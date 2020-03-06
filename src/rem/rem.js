(function(doc, win) {
    var docEl = doc.documentElement,
    resizeEvt = 'onorientationchange' in window ? 'onorientationchange' : 'resize',
    evt = "onorientationchange" in window ? "orientationchange" : "resize",
    recalc = function ( fals) {
        setTimeout(() => {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if (clientWidth >= 1050) {
                docEl.style.fontSize = 100 * (1050/750) + 'px';
            } else {
                docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
            }
            //alert(docEl.clientHeight)
            if(docEl.clientHeight <= 567) {
                docEl.style.fontSize = 95 * (clientWidth / 750) + 'px';
            }
        }, 100);
    };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    win.addEventListener(evt,recalc,false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
