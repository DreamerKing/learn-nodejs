import Logger from "./logger.js";

const logger = new Logger();

logger.on("message", (data) => console.log(`Called Listener`, data));

logger.log("Hello World");
