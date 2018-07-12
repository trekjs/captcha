declare module 'trek-captcha'{
    export interface Options{
        size?:number;
        style?:number;
    }
    export interface Captcha {
        token:string;
        buffer:Buffer;
    }
    export function captcha(opts?:Options):Promise<Captcha>;
}
