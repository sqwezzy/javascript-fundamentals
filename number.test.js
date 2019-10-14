describe("Numbers", () => {
  it("Should use remainder operator '%' ", () => {
    const a = 15;
    const b = 10;

    expect(a % b).toBe(5);
    expect(a % a).toBe(0);
  });

  test("Should get average of 3 numbers", () => {
    function average(){
      let  sum = 0;
      for (let i = 0 ; i < arguments.length; i++){
        sum += arguments[i];
      }
      return sum/arguments.length
    }
    expect( average(2, 4, 6)).toBe(4);
    expect(average(-5, 12, -7) ).toBe(0);
  });

  test("Should get a last digit of the number", () => {
    function last(num){
      return num % 10;
    }
    expect(last(123) ).toBe(3);
    expect(last(3982) ).toBe(2);
  });

  test("Should sum the digits of a given number", () => {
    function sumDigits(num) {
      var sum = 0, tmp;
      while (num) {
        tmp = num % 10;
        num = (num - tmp) / 10;
        sum += tmp;
      }
      return sum;
    }

      expect(sumDigits(123) ).toBe(6);
    expect( sumDigits(53) ).toBe(8);
  });

  test("Should return true if specified number is prime", () => {
    function isPrime(num){
      if (num % 2 == 0 && num > 0)
        return false;
      else if (num > 0 )
        return true;
      else
        return "error"
    }
    expect(isPrime(7) ).toBe(true);
    expect(isPrime(4)).toBe(false);
    expect(isPrime((-12))).toBe(("error"));
    expect(isPrime(0)).toBe(("error"));
  });

  test("Should convert string to number", () => {
    function convert(elem){
      return parseInt(elem, 10);
    }
    expect(convert('234') ).toBe(234);
  });

  test("Should find highest value", () => {
    // TODO: Write 2 functions max and max2. Only one of them should use Math
    function max(...arg){
      return Math.max(...arg);
    }
    function max2(...args){
      let max = args[0];
      for(let i=1; i<args.length; i++){
        if(args[i] > max){
          max = args[i];
        }
      }
      return max;
    }
    expect(max(1, 2) ).toBe(2);
    expect( max2(1, 7, 2, 8, 5) ).toBe(8);
  });

  test("Should find lowest value", () => {
    function min(...arg){
      return (Math.min(...arg));
    }
    function min2(...args){
      let min = args[0];
      for(let i=1; i<args.length; i++){
        if(args[i] < min){
          min = args[i];
        }
      }
      return min;
    }
    expect(min(2, 3, 9, 4, 1, 5) ).toBe(1);
    expect( min2(2, 3, 9, 4, 1, 5) ).toBe(1);
    // TODO: Write additional tests
  });

  test("Should round up a value to the nearest integer", () => {
    function numround(num){
      return Math.round(num);
    }
    expect(numround(1)).toBe(1);
    expect( numround(1.8)).toBe(2);
    expect(numround(1.2)).toBe(1);
    expect(numround(-1.2)).toBe(-1);
  });

  test("Should get the largest integer less than or equal to a given number.  ", () => {
    function numfloor(num){
      return Math.floor(num);
    }
    function numfloor2(num){
      return Number((num).toFixed(0));
    }
    expect( numfloor(1)).toBe(1);
    expect(numfloor(1.2)  ).toBe(1);
    expect(numfloor(1.8)).toBe(1);
    expect( numfloor2(1)).toBe(1);
    expect(numfloor2(1.2)  ).toBe(1);

  });

  test("Should return the base10 representation of a binary string", function() {
    function converstBase(num){
      return parseInt(num, 2);
    }
    expect(converstBase(11000000) ).toBe(192);
  });

  test("Should convert an eight-bit string number to a binary string", function() {
    function convert(num){
      return parseInt(num,8).toString(2);
    }
    expect(convert(127) ).toBe("1010111");
    expect(convert (65) ).toBe("110101");
  });
});
