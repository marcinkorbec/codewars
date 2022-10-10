  export const reverseSeq = (n: number): number[] => {
    let arr = [];
    arr.push(n)
    do {
      n = n - 1
      arr.push(n)
    } while (n > 1);
    
    return arr;
  };


  // Testy

  import {reverseSeq} from "./solution";
  import {assert} from "chai";

  describe("reverseSeq", function() {
    it("Sample Test", function() {
      assert.deepEqual(reverseSeq(5), [5, 4, 3, 2, 1]);
    });
  });


  // rozwiązanie innych

  export const reverseSeq = (n: number): number[] => {
    var reverse = [];
    for(let i = n; i > 0; i--){
      reverse.push(i);
    }
    
    return reverse;
  };

  export const reverseSeq = (n: number): number[] => {
    return Array.from({length:n},(_,i)=>n-i);
  };

  export const reverseSeq = (n: number): number[] => {
    return Array(n).fill(0).map((e, i) => n - i)
  };

  export const reverseSeq = (n: number): number[] => 
  Array
    .from(Array(n).keys())
    .reverse()
    .map(n => n + 1);

  export const reverseSeq = (n: number): number[] => Array(n).fill(0).map((_, i) => n - i);

  
