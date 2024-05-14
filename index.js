// Write a function to find the longest common prefix string amongst an array of strings.

// Example:
// Input: ["flower", "flow", "flight"]
// Output: "fl"

// Example:
// Input: ["dog", "racecar", "car"]
// Output: "" (No common prefix)

// Example:
// Input: ["apple", "ape", "apricot"]
// Output: "ap"

// Example:
// Input: ["prefix", "preference", "president"]
// Output: "pre"

function findCommonPrefix(input) {
  let minLength = Math.min(...input.map((str) => str.length));

  let prefix = "";

  for (let i = 0; i < minLength; i++) {
    let char = input[0][i];

    if (input.every((str) => str[i] === char)) {
      prefix += char;
    } else {
      break;
    }
  }
  if (prefix.length == 0) {
    prefix = "(No common prefix)";
  }

  return prefix;
}
console.log(findCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(findCommonPrefix(["dog", "racecar", "car"]));
