const PUT_ANSWER_HERE = Symbol();

describe('Objects', () => {
  it('Should get the value at path of object. If the resolved value is undefined, the defaultValue is returned in its place.', () => {
      function get(obj, path) {
          return path.split('.').reduce((item, cur) => item[cur], obj)
      }
    expect(get({ a: { b: { c: 3 } } }, 'a')).toStrictEqual({ b: { c: 3 } });
    expect(get({ a: { b: { c: 3 } } }, 'a.b.c')).toBe(3);
    expect(get({ a: { b: { c: 1, d: 2 } } }, 'a.b')).toStrictEqual({
      c: 1,
      d: 2
    });
  });

  it('Creates an object composed of the picked object properties.', () => {
      function pick(obj, props) {
        let newObject = {};
        props.reduce((item, prop) => newObject[prop] = obj[prop], obj);
          return newObject;
      }
    const object = { a: 1, b: '2', c: 3 };

    expect(pick(object, ['a', 'c'])).toStrictEqual({ a: 1, c: 3 });
    expect(pick(object, ['c'])).toStrictEqual({ c: 3 });
  });

  it('Should clone object', () => {
    const person1 = {
      firstName: 'Ivan',
      secondName: 'Ivanov'
    };

    const person2 = Object.assign({},person1);
    person2.firstName += ' Jr.';

      const person3 = {...person1};
      person3.firstName += ' Jr.';

    expect(person1.firstName).toBe('Ivan');
    expect(person2.firstName).toBe('Ivan Jr.');
    expect(person2.secondName).toBe('Ivanov');
    expect(person3.secondName).toBe('Ivanov');
    expect(person3.firstName).toBe('Ivan Jr.');
  });

  it('Performs a shallow comparison between two values to determine if they are equivalent.', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, b: 2 };
    const obj3 = { a: 1, b: 4 };

    function compare(obj1, obj2) {
        for (let key in obj1) {
            if (obj1[key] !== obj2[key])
                return false;
        }
        return true;
    }

    expect(compare(obj1, obj2)).toBe(true);
    expect(compare(obj1, obj3)).toBe(false);
  });

  it('Performs a deep comparison between two values to determine if they are equivalent.', () => {
    const obj1 = { a: 1, b: { a: 2 } };
    const obj2 = { a: 1, b: { a: 2 } };
    const obj3 = { a: 2, b: { a: 3 } };
      const compare = (obj1, obj2) => {
          let compareValue = typeof obj1 === 'object' && typeof obj2 === 'object';
          if (!compareValue && obj1 !== obj2) {
              return false;
          }
          for (let key in obj1) {
              if (typeof obj1[key] !== typeof obj2[key]) {
                  return false;
               } else if (!compare(obj1[key], obj2[key])) {
                   return false;
               }
          }
          return true;
      };
    expect(compare(obj1, obj2)).toBe(true);
    expect(compare(obj1, obj3)).toBe(false);
  });

  it('Fix me', () => {
    function hasAccess(role) {
        return role.type === 'admin';
    }

    expect(hasAccess({ type: 'admin' })).toBe(true);
    expect(hasAccess({ type: 'anonymous' })).toBe(false);
  });
});
