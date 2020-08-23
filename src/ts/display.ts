const __PLAYER : HTMLDivElement = <HTMLDivElement>document.querySelector(".player");
const __PROGRESS_BAR : HTMLDivElement = <HTMLDivElement>document.querySelector(".player-control__progress-bar");
let _TIMEOUT : number;

__PLAYER.addEventListener("mouseover", handleShowControl);
__PLAYER.addEventListener("mouseleave", handleHideControl);
__PLAYER.addEventListener("mousemove", handleMouseMovePlayer);
__PROGRESS_BAR.addEventListener("click", handleClickProgressBar);

function handleShowControl() : void {
    const control = <HTMLDivElement>document.querySelector(".control");
    control.style.display = "block";
}

function handleHideControl(): void {
    const control = <HTMLDivElement>document.querySelector(".control");
    _TIMEOUT && clearTimeout(_TIMEOUT);
    _TIMEOUT = setTimeout(function () {
        control.style.display = "none";
    }, 3000);
}

function handleMouseMovePlayer(): void {
    handleShowControl();
    handleHideControl();
}

function handleClickProgressBar(evt: MouseEvent): void {
    const progressed = <HTMLDivElement>document.querySelector(".player-control__progress-bar .progressed");
    const { offsetX } = evt;
    progressed.setAttribute("style", `width: ${offsetX}px !important`);
}