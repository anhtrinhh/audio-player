import { DEFAULT_CONFIG } from "./config";
import InitElements from "./init-elements";
class AudioPlayer {
    constructor(path, customConfig) {
        this._config = Object.assign(Object.assign({}, DEFAULT_CONFIG), customConfig);
        new InitElements(this._config);
    }
}
export { AudioPlayer };
//# sourceMappingURL=audio-player.js.map