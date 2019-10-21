describe('Array', () => {
  it('Should find the position of the first occurrence', () => {
    const arr1 = [1, 5, 8, 3, 2];
      expect(arr1.indexOf(5)).toBe(1);
      expect(arr1.indexOf(3)).toBe(3);
      expect(arr1.indexOf(8)).toBe(2);

    // TODO: Write additional it
  });

  it('Should return the specified array twice', () => {
    let arr1 = [1,2,3];
    expect(arr1.concat(arr1)).toStrictEqual([1, 2, 3, 1, 2, 3]);
  });

  it('Convert the number array to  the array of string values', () => {
    function convertToStringArr(values){
      return values.map(String);
    }
    expect( convertToStringArr([1, 2, 3]) ).toStrictEqual(['1', '2', '3']);
    expect( convertToStringArr([4, 9, 18]) ).toStrictEqual(['4', '9', '18']);
    expect( convertToStringArr([1, 2, 3, 20, 21, 45, 90]) ).toStrictEqual(['1', '2', '3', '20', '21', '45', '90']);
    // TODO: Write additional its
  });

  it('Should return the number of all occurrences of specified item in an array', () => {
    function calculateOccurences(arr, inc) {
      return arr.filter(element => element === inc).length;

    }
    expect(calculateOccurences([1, 2, 1, 4, 1], 1)).toBe(3);
    expect(calculateOccurences([5, 2, 5, 5, 5], 5)).toBe(4);
    // TODO: Write additional its
  });

  it('Should convert strings from specified array to uppercase', () => {
    function toUppercase(arr) {
      return arr.map((x) => x.toUpperCase());
    }
    expect(toUppercase(["aaaa", "abc"])).toStrictEqual(['AAAA', 'ABC']);
  });

  it('Insert an item at specified position', () => {
    function insert(arr, num, pos) {
      return arr.slice(0, pos).concat(num).concat(arr.slice(pos));
    }
    expect(insert([1, 2, 4], 3, 2)).toStrictEqual([1, 2, 3, 4]);
  });

  it('Should return the n last items from the specified array', () => {
    const last = (arr,num) => arr.slice(-num);
    expect(last([1, 2, 3, 4, 5, 6, 7], 3) ).toStrictEqual([5, 6, 7]);
  });

  it('Return the 3 largest items from integer array', () => {
    function find3Largest(arr) {
        const largest = arr.slice(0).sort((a, b) => a - b).slice(-3);
        return arr.filter(element => largest.indexOf(element) !== -1);
      }

    expect(find3Largest([1, 3, 8, 3, 29, 11, 2, 17, 9, 1]) ).toStrictEqual(
      [29, 11, 17]
    );
  });

  it('Sort numbers array by using array method', () => {
    function sort(arr){
      return arr.sort((a, b) => b - a);
    }

    function sort2 (arr){
      for (var i = 0, endI = arr.length - 1; i < endI; i++) {
        for (var j = 0, endJ = endI - i; j < endJ; j++) {
          if (arr[j] > arr[j + 1]) {
            var swap = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = swap;
          }
        }
      }
      return arr.reverse();
    }
    expect(sort([2, 3, 1, 8, 4, 5] ) ).toStrictEqual([8, 5, 4, 3, 2, 1]);
    expect(sort2([2, 3, 1, 8, 4, 5] ) ).toStrictEqual([8, 5, 4, 3, 2, 1]);
  });

  it('Should summarize of all items of numbers array', () => {
    function sum(arr){
      return arr.reduce((sum,cur) => sum + cur, 0);
    }
    expect(sum([1, 5, 7, 9, 3]) ).toBe(25);
  });

  it('Should return the numbers of falsy value in the specified array', () => {
    function getNumberOfFalsy(arr){
      return arr.filter(element => !element).length;
    }
    expect(getNumberOfFalsy([1, 0, "", null, "hello", "0"]) ).toBe(3);
  });

  it('Should return an array of unique items from the specified array', () => {
    function unique(arr){
      return arr.filter((value, index, self) =>  self.indexOf(value) === index)
    }
    function uniqueSet(arr){
      return [...new Set(arr)];
    }
    expect(unique(["a", "b", "a", "c", "e", "b", "o"]) ).toStrictEqual([
      'a',
      'b',
      'c',
      'e',
      'o'
    ]);
    expect(uniqueSet(["a", "b", "a", "c", "e", "b", "o"]) ).toStrictEqual([
      'a',
      'b',
      'c',
      'e',
      'o'
    ]);
  });

  it('Should return a map of grouped data by key and value selector', function() {
    let arr = [
      { country: 'Belarus', city: 'Brest' },
      { country: 'Russia', city: 'Omsk' },
      { country: 'Russia', city: 'Samara' },
      { country: 'Belarus', city: 'Grodno' },
      { country: 'Belarus', city: 'Minsk' },
      { country: 'Poland', city: 'Lodz' }
    ];

    function group(arr) {
      let groupToCountry = arr.reduce(function(obj, item) {
        obj[item.country] = obj[item.country] || [];
        obj[item.country].push(item.city);
        return obj;
      }, {});

      return Object.keys(groupToCountry).map(key => [key, groupToCountry[key]]);
    }

    expect(group(arr, 'country') ).toStrictEqual([
      ['Belarus', ['Brest', 'Grodno', 'Minsk']],
      ['Russia', ['Omsk', 'Samara']],
      ['Poland', ['Lodz']]
    ]);
  });

  it('Should creates an array with all falsy values removed.', () => {
    function compact (arr){
      return arr.filter(element => element);
    }
    expect(compact([1, 0, null, "a"]) ).toStrictEqual([1, 'a']);
  });

  it('Should flattens array a single level deep', () => {
    function flatten(arr) {
      var merged = [].concat.apply([], arr);
      return merged
    }
    expect( flatten([1, [2, [3, [4]], 5]]) ).toStrictEqual([
      1,
      2,
      [3, [4]],
      5
    ]);
  });

  it('Should recursively flattens array.', () => {
    function flattenDeep(arr){
      return arr.reduce(function (flat, toFlatten) {
        return flat.concat(Array.isArray(toFlatten) ? flattenDeep(toFlatten) : toFlatten);
      }, []);
    }
    expect(flattenDeep([1, [2, [3, [4]], 5]]) ).toStrictEqual([
      1,
      2,
      3,
      4,
      5
    ]);
  });

  it('Should creates an array of unique values that are included in all given', () => {
    function intersection(arr1 , arr2){
      return arr1.filter(value => arr2.indexOf(value) !== -1);
    }
    expect(intersection([1, 2, 3, 4], [8, 3, 1, 0, 9]) ).toStrictEqual([
      1,
      3
    ]);
  });

  it('Should remove all elements from array that predicate returns truthy for and returns an array of the removed elements. The predicate is invoked with two arguments: (value, index).', () => {
    let arr = [1, 7, 5, 2, 8];
    const gt5 = v => v > 5;
    let removed = arr.filter(gt5);

    Array.prototype.remove = function(set){return this.filter(
        function(element){return set.indexOf(element) < 0}
    )};
    arr = arr.remove(removed);
    expect(arr).toStrictEqual([1, 5, 2]);
    expect(removed).toStrictEqual([7, 8]);
  });
});
