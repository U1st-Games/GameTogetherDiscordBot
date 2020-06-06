import IEvent from "../IEvent";
import {Client} from "discord.js";

const ReadyEvent: IEvent = {
    name: "ready",
    execute: (client: Client) => {
        console.log(`${client.user?.username || "Bot"} Loaded!`);
    }
}

// noinspection JSUnusedGlobalSymbols
export default ReadyEvent