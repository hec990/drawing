// 工具栏图标，选中状态变大
const $headerSvg = $("header")
const $asideColor = $(".aside")
$headerSvg.on("click", ".bigger", e => {
    const $svgItems = $(e.currentTarget);
    $svgItems
        .addClass("active")
        .siblings()
        .removeClass("active");
})
$asideColor.on("click", "li", e => {
    const $liItems = $(e.currentTarget);
    $liItems
        .addClass("active")
        .siblings()
        .removeClass("active");
})

// 笔刷粗细，选中状态变大
const $brushWidth = $(".brushWidth");
const $span = $("span");
$brushWidth.on('click', $span, e => {
    const $spanItems = $(e.target);
    $spanItems
        .addClass("active")
        .siblings()
        .removeClass("active");
})


// 画布适配
$(function() {
    //添加窗口尺寸改变响应监听
    $(window).resize(resizeCanvas);
    //页面加载后先设置一下canvas大小
    resizeCanvas();
});

// 窗口尺寸改变响应（ 修改canvas大小）
function resizeCanvas() {
    $("#cvs").attr("width", $(window).get(0).innerWidth);
    $("#cvs").attr("height", $(window).get(0).innerHeight);
};