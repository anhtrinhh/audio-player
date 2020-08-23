export default class InitElements {
    constructor(config) {
        this._config = config;
        this.initElements();
    }
    initElements() {
        const containerElement = document.querySelector(this._config.selector);
        const mainScreenElement = this.createMainScreen();
        const lyricElement = this._config.lyric && this.createLyric();
        const controlElement = this.createControl();
        !containerElement.classList.contains("audio-player") && containerElement.classList.add("audio-player");
        containerElement.appendChild(mainScreenElement);
        containerElement.appendChild(lyricElement);
        containerElement.appendChild(controlElement);
        if (this._config.autoHideControl) {
            containerElement.addEventListener("mouseover", this.handleShowControl);
            containerElement.addEventListener("mouseleave", this.handleHideControl);
        }
    }
    handleHideControl() {
        const control = document.querySelector(".control");
        this.__TIMEOUT && clearTimeout(this.__TIMEOUT);
        this.__TIMEOUT = setTimeout(function () {
            control.classList.add("ap-dpnone");
        }, 3000);
    }
    handleShowControl() {
        const control = document.querySelector(".control");
        control.classList.remove("ap-dpnone");
    }
    createLyric() {
        const lyricWrapper = this.genarateElement("div", ["lyric-wrapper"]);
        const lyricFixed = this.genarateElement("div", ["lyric-fixed"]);
        const lyric = this.genarateElement("div", ["lyric"], [lyricFixed, lyricWrapper]);
        return lyric;
    }
    createMainScreen() {
        const canvas = this.genarateElement("canvas", ["main-screen__canvas"]);
        const mainScreen = this.genarateElement("div", ["main-screen"], [canvas]);
        return mainScreen;
    }
    createControl() {
        const volumePoint = this.genarateElement("div", ["volume-point"]);
        const currentVolume = this.genarateElement("div", ["current-volume"]);
        const volume = this.genarateElement("div", ["volume"], [currentVolume, volumePoint]);
        const controlVolumeContainer = this.genarateElement("div", ["control-volume-controller"], [volume]);
        const controlVolume = this.genarateElement("div", ["control-volume"], [controlVolumeContainer]);
        const audioIcon = this.genarateElement("i", ["ap-icon", "ap-icon-audio"]);
        const audioBtn = this.genarateElement("button", ["ap-icon-button", "control__volume"], [audioIcon]);
        const volumeControl = this.genarateElement("div", ["control__volume-control"], [audioBtn, controlVolume]);
        const nextIcon = this.genarateElement("i", ["ap-icon", "ap-icon-next"]);
        const nextBtn = this.genarateElement("button", ["ap-icon-button", "control__next"], [nextIcon]);
        const prevIcon = this.genarateElement("i", ["ap-icon", "ap-icon-prev"]);
        const prevBtn = this.genarateElement("button", ["ap-icon-button", "control__prev"], [prevIcon]);
        const togglePlayIcon = this.genarateElement("i", ["ap-icon", "ap-icon-play"]);
        const togglePlayBtn = this.genarateElement("button", ["ap-icon-button", "control__toggle-play"], [togglePlayIcon]);
        const toggleRandomIcon = this.genarateElement("i", ["ap-icon", "ap-icon-random"]);
        const toggleRandomBtn = this.genarateElement("button", ["ap-icon-button", "control__toggle-random"], [toggleRandomIcon]);
        const controlButtons = this.genarateElement("div", ["control__buttons"], [toggleRandomBtn, prevBtn, togglePlayBtn, nextBtn, volumeControl]);
        const progressPoint = this.genarateElement("div", ["control__progress-point"]);
        const progressed = this.genarateElement("div", ["control__progressed"]);
        const progressBar = this.genarateElement("div", ["control__progress-bar"], [progressed, progressPoint]);
        const progressBarContainer = this.genarateElement("div", ["control__progress-bar-container"], [progressBar]);
        const control = this.genarateElement("div", ["control"], [progressBarContainer, controlButtons]);
        return control;
    }
    genarateElement(elementName, classNames, childs) {
        const element = document.createElement(elementName);
        classNames && classNames.forEach(v => {
            element.classList.add(v);
        });
        childs && childs.forEach(v => {
            element.appendChild(v);
        });
        return element;
    }
}
//# sourceMappingURL=init-elements.js.map