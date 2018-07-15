;(function (win): void {
    let doc = document.documentElement,
        meta = document.querySelector('meta[name="viewport"]'),
        style = document.createElement("style"),
        dpr: number = win.devicePixelRatio || 1,
        scale, timer: any;

    function setFontSize(): void {
        let docWidth = doc.clientWidth,
            close = '}',
            rem;
        
        // 默认最大750
        if (!navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i) &&
                docWidth > 1024) {
            
            docWidth = 750;
            close = ";max-width:" + docWidth + "px;margin-right:auto!important;margin-left:auto!important;}";
        };

        rem = docWidth / 10;

        /ZTE U930_TD/.test(navigator.userAgent) && (rem = 1.13 * rem);
        
        style.innerHTML = "html{font-size:" + rem + "px!important;}body{font-size:" + 12 * (docWidth / 375) + "px" + close;
    };

    // 如果没有meta，提示错误
    if (scale = 1 / dpr, !meta) {
        return void console.warn('\u8bf7\u8bbe\u7f6e\u9ed8\u8ba4viewport\u4e3a\uff1a<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />');
    };

    // apple 设备
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        let docWidth = doc.clientWidth,
            attrs;
        
        attrs = "width=" + dpr * docWidth + ",initial-scale=" + scale + ",maximum-scale=" + scale + ", minimum-scale=" + scale + ",user-scalable=no";

        meta.setAttribute("content", attrs);
    } else {
        let matchs: any[] = navigator.userAgent.match(/Android[\S\s]+AppleWebkit\/?(\d{3})/i);

        !matchs || matchs && matchs[1] > 534 ? 
                meta.setAttribute("content", "target-densitydpi=device-dpi,width=device-width, initial-scale=" + scale + ",maximum-scale=" + scale + ", minimum-scale=" + scale) : 
                dpr = 1;
    };

    doc.firstElementChild.appendChild(style);
    doc.setAttribute("data-dpr", String(dpr));

    (<any>win).dpr = dpr;
    win.addEventListener('resize', function() {
        clearTimeout(timer);
        timer = setTimeout(() => {
            setFontSize();
        }, 300);
    });

    win.addEventListener('pageshow', function() {
        if ((<any>win).persisted) { // 代表从缓存中读取
            clearTimeout(timer);
            timer = setTimeout(() => {
                setFontSize();
            }, 300);
        };
    });

    setFontSize();
}(window));