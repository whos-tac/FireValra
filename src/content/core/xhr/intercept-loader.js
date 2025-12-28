(function() {
    const docEl = document.documentElement;
    if (!docEl) return;

    if (docEl.dataset.rovalraInterceptLoaded === 'true') return;
    docEl.dataset.rovalraInterceptLoaded = 'true';

    const runtime = (typeof browser !== 'undefined' && browser.runtime?.getURL) ? browser.runtime : (typeof chrome !== 'undefined' ? chrome.runtime : null);
    if (!runtime?.getURL) return;

    const script = document.createElement('script');
    script.src = runtime.getURL('intercept.js');
    script.type = 'text/javascript';
    script.async = false;
    script.defer = false;

    (document.head || docEl).appendChild(script);
    script.remove();
})();
