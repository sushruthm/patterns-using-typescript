import 'jasmine'
import {Singleton} from './singleton';

describe("test singleton", () =>{
    it("Creates only singleton", () =>{
       var c = Singleton.getInstance();
       var b = Singleton.getInstance();
       expect(c).toBe(b);
    })
 })