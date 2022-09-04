"use strict";

// 1. countWords
function countWords(phrase) {
  const wordCounts = {};
  for (const word of phrase.split(" ")) {
    if (wordCounts.hasOwnProperty(word)) {
      wordCounts[word] += 1;
    } else {
      wordCounts[word] = 1;
    }
  }
  return wordCounts;
}

// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  const melons = {
    2.5: ["canteloupe", "honeydew"],
    2.95: ["watermelon"],
    3.25: ["musk", "crenshaw"],
    14.25: ["christmas"],
  };
  if (!melons.hasOwnProperty(price)) {
    return;
  }
  return melons[price].sort((a, b) => a - b);
}
