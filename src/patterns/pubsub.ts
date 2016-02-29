export interface ISubscriber {
    callback: (data: any) => any;
    context: any;
}


export class Channel {
    private subscribers: { [topic: string]: ISubscriber[] } = {};

    public publish(topic: string, data: any) {
        var arry = this.subscribers[topic];
        if (arry) {
            arry.forEach((value) => {
                setTimeout.call(value.context, value.callback, 0, data);
            });
        }
    }

    public subscribe(topic: string, subscriber: ISubscriber) {
        if (!this.subscribers[topic]) {
            this.subscribers[topic] = [];
        }
        this.subscribers[topic].push(subscriber);
    }

    public unsubscribe(topic: string, subscriber: ISubscriber): boolean {
        var arry = this.subscribers[topic];
        return arry ? arry.splice(arry.indexOf(subscriber), 1) ? true : false : true;
    }

}
