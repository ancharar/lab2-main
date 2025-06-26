let getLongestUniqueWords = (...arrays) => {
    return arrays
      .map(array => {
        let words = array
          .map(str => str.split(" "))
          .reduce((acc, words) => acc.concat(words), [])
          .filter((word, index, arr) => arr.indexOf(word) === index);

        let maxLength = words.reduce((max, word) => word.length > max ? word.length : max, 0);

        return words.filter(word => word.length === maxLength).join(" ")
      })
      .filter((word, index, arr) => arr.indexOf(word) === index)
      .join(' ');
};

let arr1 = ["hello world qwertyu", "good morning morning"];
let arr2 = ["functional programming is cool", "javascript is awesome morning"];
let arr3 = ["functional programming is cool", "javascript is awesome morning"];
let result = getLongestUniqueWords(arr1, arr2, arr3);
console.log(result);
