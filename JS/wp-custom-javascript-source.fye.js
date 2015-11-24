// See [https://github.com/invokeImmediately/firstyear.wsu.edu] for repository of source code
(function($) {
    $.ajax({ url: '/wp-content/uploads/sites/906/2015/08/fye-custom.js', dataType: 'script', cache: true });
    $.ajax({ url: '/wp-content/uploads/sites/906/2015/11/jQuery.textResize.js', dataType: 'script', cache: true });
    ($('.has-tool-tip').length !== 0) ? $.ajax({ url: '/wp-content/uploads/sites/906/2015/11/jQuery.qTip_.js', dataType: 'script', cache: true }) : 0;
    ($('.page-covering-notice-js').length !== 0) ? $.ajax({ url: '/wp-content/uploads/sites/906/2015/11/jQuery.cookieObjs.js', dataType: 'script', cache: true }) : 0;
})(jQuery);