interface IConfig {
    selector: string;
    lyric?: boolean;
    controlHideTimeOut?: number;
    autoPlay?:boolean;
    autoHideControl?: boolean;
}

const DEFAULT_CONFIG : IConfig = {
    selector: ".audio-player",
    lyric: true,
    controlHideTimeOut: 3000,
    autoPlay: false,
    autoHideControl: true
}

export {IConfig, DEFAULT_CONFIG}