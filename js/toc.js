// 왼쪽 목차: ☰ 동작, 현재 보고 있는 위치 표시, PDF 저장 버튼
(function () {
    var root = document.documentElement;
    var toc = document.getElementById('toc');
    var button = document.querySelector('.toc-toggle');
    var bar = document.querySelector('.toc-bar');
    var scrim = document.querySelector('.toc-scrim');
    var wide = window.matchMedia('(min-width: 1100px)');

    function isOpen() {
        return wide.matches ? !root.classList.contains('toc-collapsed') : root.classList.contains('toc-drawer');
    }
    function syncButton() {
        var open = isOpen();
        var label = open ? '목차 접기' : '목차 열기';
        button.setAttribute('aria-expanded', String(open));
        button.setAttribute('aria-label', label);
        button.title = label;
    }
    function closeDrawer() {
        root.classList.remove('toc-drawer');
        syncButton();
    }
    button.addEventListener('click', function () {
        root.classList.toggle(wide.matches ? 'toc-collapsed' : 'toc-drawer');
        syncButton();
        window.dispatchEvent(new Event('resize'));  // 목차 폭만큼 페이지 배율이 달라져서 page-zoom.js 다시 돌림
    });
    scrim.addEventListener('click', closeDrawer);
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && root.classList.contains('toc-drawer')) { closeDrawer(); button.focus(); }
    });
    toc.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', closeDrawer);
    });
    wide.addEventListener('change', closeDrawer);
    toc.querySelector('.toc-pdf').addEventListener('click', function () { window.print(); });
    syncButton();

    var links = Array.prototype.map.call(toc.querySelectorAll('a[data-page]'), function (link) {
        return { link: link, target: document.querySelector(link.getAttribute('href')) };
    });
    var current = null;
    var chosen = false; // 목차로 이동한 뒤에는 직접 스크롤하기 전까지 고른 항목 유지
    var queued = false;

    function keepInView(link) {
        var top = link.offsetTop - 52;
        var bottom = link.offsetTop + link.offsetHeight + 12;
        if (top < toc.scrollTop) toc.scrollTop = top;
        else if (bottom > toc.scrollTop + toc.clientHeight) toc.scrollTop = bottom - toc.clientHeight;
    }
    function mark(link) {
        if (link === current) return;
        if (current) { current.classList.remove('is-current'); current.removeAttribute('aria-current'); }
        link.classList.add('is-current');
        link.setAttribute('aria-current', 'true');
        bar.textContent = link.getAttribute('data-label');
        current = link;
        keepInView(link);
    }
    function update() {
        queued = false;
        if (chosen) return;
        var line = window.innerHeight * 0.25;  // 화면 위쪽 1/4 선을 지난 마지막 항목을 현재 위치로 봄
        var active = links[0];
        links.forEach(function (entry) {
            if (entry.target.getBoundingClientRect().top <= line) active = entry;
        });
        mark(active.link);
    }
    function requestUpdate() {
        if (queued) return;
        queued = true;
        requestAnimationFrame(update);
    }
    function release() {
        chosen = false;
        requestUpdate();
    }
    links.forEach(function (entry) {
        entry.link.addEventListener('click', function () { chosen = true; mark(entry.link); });
    });
    window.addEventListener('popstate', function () {
        // 목차 클릭, 뒤로 가기 둘 다 주소의 #항목 기준으로 표시
        var entry = links.filter(function (item) { return item.link.getAttribute('href') === location.hash; })[0];
        if (entry) { chosen = true; mark(entry.link); } else release();
    });
    ['wheel', 'touchstart', 'keydown', 'mousedown'].forEach(function (name) {
        window.addEventListener(name, release, { passive: true });
    });
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    update();
})();
