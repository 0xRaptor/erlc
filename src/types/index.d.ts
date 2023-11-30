declare module 'erlc' {
    export type ClientConfig = {
        globalToken: string
    }

    export class Client {
        constructor(options: ClientConfig)
        config(): ClientConfig;
    }
}