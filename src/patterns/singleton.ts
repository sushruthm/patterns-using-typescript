/**
 * Singleton
 */
export class SingletonImpl {
    constructor() {
        
    }
    private static instance : SingletonImpl;
    public static getInstance(): SingletonImpl {
        return SingletonImpl.instance || (SingletonImpl.instance = new SingletonImpl());
    }
}

export var Singleton = {
    getInstance: SingletonImpl.getInstance,
    getInstanceObject: () => {
         console.log("getInstanceObject");
    }
}
