/*Write a function to check if 2 objects containing only primitive values or nested objects contain exactly the
same values, i.e. they are the same. Hint: use typeof. eg: `if (typeof object1.c === 'object') {}`*/

const obj1 = {
  name: "Pritam Singh",
  age: 23,
  rank: {
    Jee: {
      JeeMains: 56000,
      JeeAdvance: 9700,
    },
    WbJee: 8016,
  },
};

const obj2 = {
  name: "Pritam Singh",
  age: 23,
  rank: {
    Jee: {
      JeeMains: 56000,
      JeeAdvance: 9700,
    },
    WbJee: 8016,
  },
};

//Solution
const checkObjects = (obj1, obj2) => {
  if (Object.keys(obj1).length === Object.keys(obj2).length) {
    const keys1 = Object.getOwnPropertyNames(obj1);
    // const keys2 = Object.getOwnPropertyNames(obj2);

    for (let key of keys1) {
      if (typeof obj1[key] != typeof obj2[key]) return false;
      else {
        if (typeof obj1[key] === "object") {
          if (!checkObjects(obj1[key], obj2[key])) return false;
        } else if (obj1[key] != obj2[key]) return false;
      }
    }
  } else return false;

  return true;
};

console.log(checkObjects(obj1, obj2));

// Implement the JSON.stringify method yourself for plain objects containing only primitive values. Bonus, if you
// can recursion for nested objects. The object does not contain values that are functions, circular references or
// functions...

student = {
  name: "Pritam Singh",
  age: 23,
  marks: {
    maths: [100, 70, 89],
    english: [79, 67, 80],
    hindi: [80, 90, 99],
  },
  rank: {
    Jee: {
      JeeMains: 56000,
      JeeAdvance: 9700,
    },
    WbJee: 8016,
  },
};

//Solution
const stringify = (object) => {
  if (typeof object == "string") return `"${object}"`;

  if (typeof object !== "object") return `${object}`;

  if (object instanceof Array) return `[${object}]`;

  let ans = [];
  for (let [key, value] of Object.entries(object)) {
    ans.push(`"${key}":${stringify(value)}`);
    console.log(ans);
  }

  return `{${ans.join(",")}}`;
};

console.log(stringify(student) === JSON.stringify(student));
