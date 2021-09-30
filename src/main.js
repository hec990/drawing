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

// canvas js














