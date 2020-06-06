import {Message} from "discord.js";
import Client from "./Client";

export interface ICommandCallbackData {
    message: Message,
    client: Client,
    args: string[],
    command: ICommand
}

export default interface ICommand {
    name: string,
    callback: (data: ICommandCallbackData) => void
}