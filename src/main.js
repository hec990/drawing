import './resize.js'
import './toolbar.js'

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













// 获取canvas标签
let myCanvas = document.querySelector("#cvs")

// 获取上下文对象
let context = myCanvas.getContext("2d");

// 是否开始画画
let isDraw = false;

// 记录画笔最后一次的位置
let lastPoint = {
    x: undefined,
    y: undefined
};

// 是否开启橡皮擦
let eraserEnabled = false


// 鼠标单击
myCanvas.onmousedown = function(e) {
    isDraw = true;
    let x = e.clientX;
    let y = e.clientY;
    // 记录最后一次位置
    lastPoint = {
        'x': x,
        'y': y
    };
}

// 鼠标移动
myCanvas.onmousemove = function(e) {
    if (isDraw) {
        let x = e.clientX;
        let y = e.clientY;
        let newPoint = {
            'x': x,
            'y': y
        };
        drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y);
        lastPoint = newPoint;
    }
}

// 鼠标弹起
myCanvas.onmouseup = function(e) {
    isDraw = false;
}

// 画线
function drawLine(x1, y1, x2, y2) {
    // 开启一条路径
    context.beginPath()
        // 设置线条宽度
    context.lineWidth = 3;
    // 设置线条末端样式。
    context.lineCap = "round";
    // 设定线条与线条间接合处的样式
    context.lineJoin = "round";
    // moveTo(x,y)将笔触移动到指定的坐标x以及y上
    context.moveTo(x1, y1);
    // lineTo(x, y) 绘制一条从当前位置到指定x以及y位置的直线
    context.lineTo(x2, y2);
    // 通过线条来绘制图形轮廓
    context.stroke();
    context.closePath();
}