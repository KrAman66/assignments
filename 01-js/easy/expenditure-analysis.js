/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const arr = [];
  for(let i = 0; i < transactions.length; i++){
    let cat = transactions[i].category;
    var found = arr.find(item => item['category'] === cat);
    if(found){
      found.totalSpent = found.totalSpent + transactions[i].price;
    }else{
      let obj = {category: cat, totalSpent: transactions[i].price};
      arr.push(obj);
    }
  }
  return arr;
}

module.exports = calculateTotalSpentByCategory;
