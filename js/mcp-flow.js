// MCP 흐름도: 재생/멈춤 버튼, 번호 박스에 마우스를 올렸을 때 다음 흐름 선 색 바꾸기
(function () {
    var flow = document.querySelector('.mcp-flow');
    var toggle = document.querySelector('.mf-toggle');
    if (!flow || !toggle) return;

    function clear() {
        flow.classList.remove('mf-focus');
        flow.querySelectorAll('.mf-rt.mf-on').forEach(function (line) {
            line.classList.remove('mf-on');
        });
    }
    function show(step) {
        clear();
        flow.classList.add('mf-focus');
        flow.querySelectorAll('.mf-rt[data-route~="' + step.getAttribute('data-step') + '"]').forEach(function (line) {
            line.classList.add('mf-on');
        });
    }
    flow.querySelectorAll('.mf-step').forEach(function (step) {
        step.addEventListener('mouseenter', function () { show(step); });
        step.addEventListener('focus', function () { show(step); });
        step.addEventListener('mouseleave', clear);
        step.addEventListener('blur', clear);
    });

    toggle.addEventListener('click', function () {
        var paused = flow.classList.toggle('mf-paused');
        if (paused) flow.pauseAnimations(); else flow.unpauseAnimations();
        var label = paused ? '흐름 애니메이션 재생' : '흐름 애니메이션 멈추기';
        toggle.classList.toggle('is-paused', paused);
        toggle.setAttribute('aria-label', label);
        toggle.title = label;
    });
})();
