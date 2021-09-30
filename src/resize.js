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