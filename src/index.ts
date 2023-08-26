// interface PaintOptions {
//     shape: number,
//     xpos?: number,
//     ypos?: number
// }

// const paintShape = (opt: PaintOptions) => {

// }

// paintShape({ shape: 0 });
// paintShape({ shape: 0, xpos: 23 });
// paintShape({ shape: 0, xpos: 34, ypos: 12 });


// class Point {
//     x: number = 0;
//     y: number = 7;
// }
// const pt: Point = new Point();
// pt.x = 0;
// // pt.y = 0;
// console.log(`${pt.x}, ${pt.y}`);



class GoodGreeter {
    readonly name: string;
    constructor(name?: string) {
        if (name !== undefined) {
            this.name = name;
        }
    }

    //Error name is readonly property

    // setName = (name): string => {
    //     this.name = name;
    //     return this.name
    // }

}



// Error  name is readonly property

// const obj = new GoodGreeter();
// obj.name = "sachin";




// class Base {
//     k: number = 4;
// }

// class Derived extends Base {
//     constructor() {
//         super();
//         console.log(this.k);
//     }
// }
// let a = new Derived();




// const url = "https://jsonplaceholder.typicode.com/todos";
// const options = {
//     method: "POST",
//     headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json;charset=UTF-8",
//     },
//     body: JSON.stringify({
//         a: 10,
//         b: 20,
//     }),
// };
// fetch("url", { method: "POST", headers: {}, body: JSON.stringify({}) })
//     .then((response) => response.json())
//     .then((data) => { console.log(data) })


// let x = 4;
// class C {
//     x: string = "hello";
//     constructor() {

//     }

//     setx() {
//         this.x = "world"
//     }
// }

// interface Pingable {
//     ping(): void,
// }

// class Sonar implements Pingable {
//     ping() {
//         console.log('ping');
//     }
// }

// class Ball {
//     pong() {
//         console.log('pong');
//     }
// }
interface Message {
    platform: string,
    recipient: number,
    message: string,
}

abstract class SendToClientBase {
    abstract sendToClient(msg: Message): string;
}

class WhatsAppClient extends SendToClientBase {
    token: number
    username: number;
    password: number;

    constructor() {
        super();
        this.username = 123;
        this.password = 321;
    }

    getToken(): number {
        this.token = this.username + this.password;
        console.log(`this is whatsapp token `, this.token);
        return this.token;
    }

    formatMessage(msg: Message): string {
        const formatted_msg = `${msg.platform} - ${msg.message}`
        return formatted_msg;
    }

    sendToClient(msg: Message): string {
        const token = this.getToken();
        const formatted_msg = this.formatMessage(msg);
        console.log(formatted_msg);
        return "success";
    }

}


class FacebookClient extends SendToClientBase {
    token: number
    secret: number;
    key: number;

    constructor() {
        super();
        this.secret = 123;
        this.key = 321;
    }

    getToken(): number {
        this.token = this.secret - this.key;
        console.log(`this is facebook token -`, this.token);
        return this.token;
    }

    formatMessage(msg: Message): string {
        const formatted_msg = `${msg.platform} - ${msg.message}`
        return formatted_msg;
    }

    sendToClient(msg: Message): string {
        const token = this.getToken();
        const formatted_msg = this.formatMessage(msg);
        console.log(formatted_msg);
        return "success";
    }

}

class OtherClient extends SendToClientBase {
    token: number
    secret: number;
    key: number;

    constructor() {
        super();
        this.secret = 123;
        this.key = 321;
    }

    getToken(): number {
        this.token = this.secret * this.key;
        console.log(`this is other client token - `, this.token);
        return this.token;
    }

    formatMessage(msg: Message): string {
        const formatted_msg = `Sent by other Client - ${msg.platform} ${msg.message}`
        return formatted_msg;
    }

    sendToClient(msg: Message): string {
        const token = this.getToken();
        const formatted_msg = this.formatMessage(msg);
        console.log(formatted_msg);
        return "success";
    }

}

class ClientFactory {
    getClientObject(platform: string) {
        switch (platform) {
            case 'whatsapp': {
                return new WhatsAppClient();
            }

            case 'facebook': {
                return new FacebookClient();
            }

            default: {
                return new OtherClient();
            }
        }
    }

}

const sendMessage = (msg: Message) => {
    let clientFactory = new ClientFactory();
    let client = clientFactory.getClientObject(msg.platform);
    client.sendToClient(msg);
}

const message: Message = {
    platform: 'facebodok',
    recipient: 1234,
    message: "this is the original message"
}

sendMessage(message);

