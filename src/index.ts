import dotenv from "dotenv";
import Client from "./Client";
import {ClientEvents} from "discord.js"
import fs from "fs"
import path from "path";
import IEvent from "./IEvent";
import ICommand from "./ICommand";

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
 * Register Commands
 */
const registerCommands = async () => {
    const dir = await fs.readdirSync(path.join(__dirname, "./commands"))
    for (const file of dir) {
        const command: ICommand = (await import(path.join(__dirname, "commands", file))).default
        client.commands.push(command)
    }
}


/**
 * Main
 */
(async () => {
    await registerEvents()
    await registerCommands()
    await client.login()
})();