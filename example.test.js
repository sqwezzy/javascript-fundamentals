describe('Example', () => {
  it('Should multiply 2 numbers', () => {
    function multiply(a,b){
      return a*b;
    }
    expect(multiply(1,2)).toBe(2);
    expect(multiply(3,5)).toBe(15);
    // TODO: Write additional tests
  });

  it('Should define one number and one string variable', () => {
    let num = 100;
    let str = "Maksim";
    expect(typeof num).toBe('number');
    expect(typeof str).toBe('string');
  });
});
