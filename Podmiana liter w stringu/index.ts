export function DNAtoRNA(dna: string): string {
    return dna.replace(/T/g, "U"); 
}


// testy:
import solution = require('./solution');
import {assert} from "chai";

describe("Sample Test Cases", function(){
  it("Should return a string", function() {
    assert.equal(solution.DNAtoRNA("TTTT"), "UUUU");
    assert.equal(solution.DNAtoRNA("GCAT"), "GCAU");
    assert.equal(solution.DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC");
  });
});

// rozwiązania innych:
