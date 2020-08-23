import {IConfig, DEFAULT_CONFIG} from "./config";
import InitElements from "./init-elements";

class AudioPlayer {
    private readonly _config: IConfig;
    constructor(path: string, customConfig: IConfig) {
        this._config = {...DEFAULT_CONFIG, ...customConfig}
        new InitElements(this._config);
    }
}

export {AudioPlayer}