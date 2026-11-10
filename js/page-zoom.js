// 화면 폭에 맞춰 A4 페이지 배율(--zoom)을 계산한다. 인쇄할 때는 print.css에서 1로 고정.
(function () {
    var PAGE_WIDTH_PX = 793.7; /* 210mm */
    var TOC_WIDTH_PX = 212;
    var root = document.documentElement;
    var wide = window.matchMedia('(min-width: 1100px)');
    function fit() {
        var tocOpen = wide.matches && !root.classList.contains('toc-collapsed');
        var available = root.clientWidth - 32 - (tocOpen ? TOC_WIDTH_PX : 0);  // 32는 .doc 좌우 패딩
        var zoom = Math.min(1.2, available / PAGE_WIDTH_PX);  // 너무 커지지 않게 1.2배까지만
        root.style.setProperty('--zoom', zoom.toFixed(4));
    }
    fit();
    window.addEventListener('resize', fit);
})();
