/*
    IObservable
*/

export interface IObservable {
    notify(): void;
}
    
    
/**
 * Subject
 */
export class Subject {
    observableList: IObservable[] = [];
    constructor() {
    }

    public add(observer: IObservable) {
        this.observableList.push(observer);
    }

    public remove(observer: IObservable) {
        this.observableList.splice(this.observableList.indexOf(observer), 1);
    }

    public notifyObservers() {
        this.observableList.forEach((value, index) => {
            try {
                value.notify();
            } catch (e) {

            }
        });
    }
}