import * as pubsub from "./pubsub"

describe("pubsub tests:", () => {
    it("publish test", () => {
        var channel = new pubsub.Channel;
        var setfromCallback: string;
        console.log(typeof (this));

        var myCallback: pubsub.ISubscriber = {
            context: this,
            callback: (data) => {
                console.log(typeof (this));
                console.log(data);
                setfromCallback = data;
            }
        }

        channel.subscribe("test", myCallback);
        channel.publish("test", "hello");
        waitsFor(() => {
            expect(setfromCallback).toBe("hello");

            return true;
        }, "message publish failed", 0);
    });
});