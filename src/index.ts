import dotenv from "dotenv";
import {Client, ClientEvents} from "discord.js"
import fs from "fs"
import path from "path";
import IEvent from "./IEvent";

dotenv.config();

const client = new Client()

/**
 * Register Events
 */
const registerEvents = async () => {
    const dir = await fs.readdirSync(path.join(__dirname, "./events"))
    for (const file of dir) {
        const event: IEvent = (await import(path.join(__dirname, "events", file))).default
        client.on(event.name as keyof ClientEvents, event.execute.bind(null, client))
    }
}

/**
 * Main
 */
(async () => {
    await registerEvents()
    await client.login()
})();