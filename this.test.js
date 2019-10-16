describe('THIS', () => {
  it('Should invoke function with specific this', () => {
    const a = { msg: 'aaa' };
    const b = { msg: 'bbb' };

    function example() {
      return this.msg + ' ' + this.msg;
    }

    expect(example.call(a)).toBe('aaa aaa');
    expect(example.apply(b)).toBe('bbb bbb');
  });

  it('Should create function  connected with specific this', () => {
    function fn() {
      return this.name;
    }
    const tom = { name: 'Tom', age: 22 };
    const bob = { name: 'Bob', get: 50 };

    // TODO: fix

    expect(fn.apply(tom)).toBe('Tom');
    expect(fn.call(bob)).toBe('Bob');
  });

  test('Function from object method. Fix me', () => {
    const person = {
      firstName: 'Ivan',
      secondName: 'Ivanov',
      age: 20,

      sayHello: function() {
        return `Hi, ${this.firstName}!`;
      }
    };

    const sayHello = person.sayHello;

    expect(sayHello.apply(person)).toBe(person.sayHello());
  });
});
