import {Client as DiscordJSClient, ClientOptions} from "discord.js"
import ICommand from "./ICommand";

export default class Client extends DiscordJSClient {

    commands: ICommand[];
    prefix: string;

    constructor(options?: ClientOptions) {
        super(options);

        this.commands = [];
        this.prefix = "!!";
    }
}

