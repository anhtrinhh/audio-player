const __PLAYER = document.querySelector(".player");
const __PROGRESS_BAR = document.querySelector(".player-control__progress-bar");
let _TIMEOUT;
__PLAYER.addEventListener("mouseover", handleShowControl);
__PLAYER.addEventListener("mouseleave", handleHideControl);
__PLAYER.addEventListener("mousemove", handleMouseMovePlayer);
__PROGRESS_BAR.addEventListener("click", handleClickProgressBar);
function handleShowControl() {
    const control = document.querySelector(".control");
    control.style.display = "block";
}
function handleHideControl() {
    const control = document.querySelector(".control");
    _TIMEOUT && clearTimeout(_TIMEOUT);
    _TIMEOUT = setTimeout(function () {
        control.style.display = "none";
    }, 3000);
}
function handleMouseMovePlayer() {
    handleShowControl();
    handleHideControl();
}
function handleClickProgressBar(evt) {
    const progressed = document.querySelector(".player-control__progress-bar .progressed");
    const { offsetX } = evt;
    progressed.setAttribute("style", `width: ${offsetX}px !important`);
}
//# sourceMappingURL=display.js.map