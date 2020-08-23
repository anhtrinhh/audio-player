export default function InitElement(config) {
    const containerElement = document.querySelector(config.selector);
    const mainScreenElement = createMainScreen();
    const lyricElement = config.lyric && createLyric();
    !containerElement.classList.contains("audio-player") && containerElement.classList.add("audio-player");
    containerElement.appendChild(mainScreenElement);
    containerElement.appendChild(lyricElement);
}
function createLyric() {
    const lyric = document.createElement("div");
    const lyricFixed = document.createElement("div");
    const lyricWrapper = document.createElement("div");
    lyric.classList.add("lyric");
    lyricFixed.classList.add("lyric-fixed");
    lyricWrapper.classList.add("lyric-wrapper");
    lyric.appendChild(lyricFixed);
    lyric.appendChild(lyricWrapper);
    return lyric;
}
function createMainScreen() {
    const mainScreen = document.createElement("div");
    mainScreen.classList.add("main-screen");
    return mainScreen;
}
//# sourceMappingURL=init-element.js.map