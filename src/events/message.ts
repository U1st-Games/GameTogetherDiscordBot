import IEvent from "../IEvent";
import Client from "../Client";
import {Message} from "discord.js";
import {ICommandCallbackData} from "../ICommand";

const MessageEvent: IEvent = {
    name: "message",
    execute: (client: Client, message: Message) => {
        if (!message.content.startsWith(client.prefix)) return;

        let args = message.content.split(/[ ,]+/)
        const name = <string>args.shift()?.substr(client.prefix.length);

        const filteredCommands = client.commands.filter(command => command.name == name);
        if (filteredCommands.length > 0) {
            const data: ICommandCallbackData = {
                message: message,
                client: client,
                args: args,
                command: filteredCommands[0]
            };
            filteredCommands[0].callback(data);
        }

    }
}
export default MessageEvent;