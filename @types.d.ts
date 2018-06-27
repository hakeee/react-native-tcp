declare module "react-native-tcp" {
    import { Duplex, Buffer } from 'stream-browserify'
    export class Server {

    }
    export class Socket extends Duplex {
        isLegalPort(port: number) : boolean
        read(n): Buffer
        readonly readable: boolean
        readonly writeable: boolean
        readonly allowHalfOpen: boolean

        setTimeout(msecs: number, callback: () => void): void
        address(): { port: number, address: string, family: string }
        end(data: string | Buffer | Uint8Array | string, encoding?: string): void
        destroy(): void
        getState(): number
        write(chunk: string | Buffer | Uint8Array, encoding?: string, cb?: (err: ?Error) => void): void
    }
    export function createServer(connectionListener: (socket: Socket)  => void) : Server
    export function connect(connectionListener: (socket: Socket)  => void) : Server
    export function isIP(input: string) : number
    export function isIPv4(input: string) : number
    export function isIPv6(input: string) : number
}