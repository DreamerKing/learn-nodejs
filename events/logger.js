import { EventEmitter } from "events";
import { v4 } from "uuid";

export default class Logger extends EventEmitter {
  log(msg) {
    this.emit("message", { id: v4(), message: msg });
  }
}
