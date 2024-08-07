/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { Agents } from "./agents.js";
import { Chat } from "./chat.js";
import { Embeddings } from "./embeddings.js";
import { Files } from "./files.js";
import { Fim } from "./fim.js";
import { FineTuning } from "./finetuning.js";
import { Models } from "./models.js";

export class Mistral extends ClientSDK {
    private _models?: Models;
    get models(): Models {
        return (this._models ??= new Models(this.options$));
    }

    private _files?: Files;
    get files(): Files {
        return (this._files ??= new Files(this.options$));
    }

    private _fineTuning?: FineTuning;
    get fineTuning(): FineTuning {
        return (this._fineTuning ??= new FineTuning(this.options$));
    }

    private _chat?: Chat;
    get chat(): Chat {
        return (this._chat ??= new Chat(this.options$));
    }

    private _fim?: Fim;
    get fim(): Fim {
        return (this._fim ??= new Fim(this.options$));
    }

    private _agents?: Agents;
    get agents(): Agents {
        return (this._agents ??= new Agents(this.options$));
    }

    private _embeddings?: Embeddings;
    get embeddings(): Embeddings {
        return (this._embeddings ??= new Embeddings(this.options$));
    }
}
