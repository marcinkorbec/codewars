export function rentalCarCost(d: number): number {
    let price = 0;
    
    if (d < 3) {
      price = d * 40;
    }
    else if (d >= 3 && d < 7) {
      price = d * 40 - 20;
    }
    else if (d >= 7) {
      price = d * 40 - 50;
    }  
    return price;
  }


  // testy

  import { assert } from "chai";
import { rentalCarCost } from "./solution";

describe("Regular Tests:", () => {
  it("Should work for under 3 days:", () => {
    assert.strictEqual(rentalCarCost(1), 40);
    assert.strictEqual(rentalCarCost(2), 80);
  });
  
  it("Should work for under 7 days:", () => {
    assert.strictEqual(rentalCarCost(3), 100);
    assert.strictEqual(rentalCarCost(4), 140);
    assert.strictEqual(rentalCarCost(5), 180);
    assert.strictEqual(rentalCarCost(6), 220);
  });
  
  it("Should work for 7 or more days:", () => {
    assert.strictEqual(rentalCarCost(7), 230);
    assert.strictEqual(rentalCarCost(8), 270);
    assert.strictEqual(rentalCarCost(9), 310);
    assert.strictEqual(rentalCarCost(10), 350);    
  });
});



// ROZWIĄZANIA INNYCH

  export function rentalCarCost(d: number): number {
    if (d >= 7) return d * 40 - 50;
    if (d >= 3) return d * 40 - 20
    return d * 40;
  }


  export const rentalCarCost = (d: number): number => {
    return d < 3 ? 40 * d : d >= 3 && d < 7 ? 40 * d - 20 : 40 * d - 50;
  }

  export function rentalCarCost(d: number): number {
    let total = d*40
    if(d >= 3 && d < 7) total -= 20
    if(d >= 7) total -= 50
    
    return total
  }

  export function rentalCarCost(d: number): number {
    // Your solution here
    
    let cost: number = d * 40;
    if (d >= 7) {cost -= 50}
    else if (d >= 3) {cost -= 20}
    
    return cost;
  }


  export function rentalCarCost(d: number): number {
    const price: number = 40
    const weekDiscount: number = 50
    const threeDaysDiscount: number = 20
    return d >= 7 ? price * d - weekDiscount : d >= 3 ? price * d - threeDaysDiscount : price * d
}