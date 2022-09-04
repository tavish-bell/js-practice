'use strict';

// 1. printIndices
function printIndices(items) {
  for (const i in items) {
  console.log(`${items[i]} ${i}`);
  
  }   
}

// 2. everyOtherItem
function everyOtherItem(items) {
  const result = [];
  for (const i in items){
    if (i % 2 === 0) {
      result.push(i);
    }
  }
  console.log(result)
}

// 3. smallestNItems
function smallestNItems(items, n) {
  const sortedItems = items.sort((a, b) => (a - b));
  let sortedNItems = sortedItems.slice(0, n);
  sortedNItems = sortedNItems.reverse();
  console.log(sortedNItems);