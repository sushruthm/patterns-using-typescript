import * as observer from  './observer';

describe("Observer test", () => {
    
    /* test setup */
    var obj1: observer.IObservable = {
        notify: () => {
            console.log("from obj1");
        }
    }

    class ObserverTester implements observer.IObservable {
        public i = 10;
        public notify() {
            console.log(this instanceof ObserverTester);
        }
    }

    var obj2 = new ObserverTester();
   
    /* end test setup */
    it("verify observers get called.", () => {
        var sub = new observer.Subject();
        sub.add(obj1);
        sub.add(obj2);

        spyOn(obj2, 'notify');
        spyOn(obj1, 'notify');

        sub.notifyObservers();
        expect(obj1.notify).toHaveBeenCalled();
        expect(obj2.notify).toHaveBeenCalled();
    });
})