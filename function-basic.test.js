describe("Function basic", () => {
  it("Should be function declarations", () => {
    function f(){
      return "I am a function declarations"
    }
    expect(f()).toBe("I am a function declarations");
  });

  it("Should be function expression", () => {
    var f2 = function(){
      return "I am a function expression"
    };
    expect(f2()).toBe("I am a function expression");
  });

  it("Should get sum of 2 numbers", () => {
    function sum(a,b) {
      return a+b;
    }
    expect(sum(5, 7) ).toBe(12);
    expect( sum(10, 1000) ).toBe(1010);
    expect( sum(-10, 10) ).toBe(0);
  });

  test("Should get arguments length", () => {
    // TODO: Declare 3 functions (withoutArguments, withOneArgument, withTwoArguments ) with different quantity of named arguments
    function countArguments(){
      let count = 0;
      for (let i = 0; i < arguments.length; i++){
        count+=1;
      }
      return count;
    }
    expect( countArguments() ).toBe(0);
    expect( countArguments(1)).toBe(1);
    expect( countArguments(1, 2)).toBe(2);
    expect( countArguments(1) ).toBe(1);
    expect(countArguments(1, 2, 3, 4, 5) ).toBe(5);
  });

  test("Should find argument at N position", () => {
    // Write function fn. First argument should be position (N) of argument
    function fn() {
      return arguments[arguments[0]];
    }
    expect( fn(1) ).toBe(undefined);
    expect( fn(1, "a") ).toBe("a");
    expect( fn(3, "a", "b") ).toBe(undefined);
    expect( fn(1, "a", "b", "c") ).toBe("a");
    expect( fn(2, "a", "b", "c") ).toBe("b");
    expect( fn(3, "a", "b", "c") ).toBe("c");
  });

  it("Should return string of wrapped arguments", () => {
    function wrap(...args) {
      for (let i = 0; i <= args.length; i++) {
        return `|${args.toString().replace(/,/g, "|")}|`;
      }
    }
    expect(wrap("a", "b") ).toBe("|a|b|");
    expect(wrap("a", "b", "c", "d", "e") ).toBe("|a|b|c|d|e|");
  });

  test("Should use Function as argument", () => {
    // Write logCalculationResult function. Function should accept 2 arguments
    // First is calculation function
    // Second is argument for calculation function
    // Return value is message 'Result is ###'
    function logCalculationResult(func, num) {
      const result = func(num);
      return `Result is ${result}`;
    }

    function add10(a) {
      return a + 10;
    }

    function mul3(a) {
      return a * 3;
    }

    expect(logCalculationResult(add10, 7) ).toBe("Result is 17");
    expect(logCalculationResult(mul3, 7) ).toBe("Result is 21");
  });
});
