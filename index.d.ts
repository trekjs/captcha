declare module 'trek-captcha' {
    export = Captcha;
}

declare module 'trek-captcha/lib/captcha' {
    export = Captcha;
}

interface Ops{
    size?:number;
    style?:number;
}

interface Value{
    token:string;
    buffer:Buffer;
}

interface Captcha{
    (Ops?:any):Promise<Value>
}

declare const Captcha:Captcha
