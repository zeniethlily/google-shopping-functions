
function getItems(products) {
  return products.items;
}
var list = [];
function getItemsByBrand(items, brand) {
  for(let i = 0; i < items.length; i++) {
    if(items[i].product.brand == brand) {
      list.push(items[i]);
      console.log("found a " + brand);
    }
    //console.log(products.items[i]);
  }
  return list;
}


function getItemsByAuthor(items, author){
  for(let i = 0; i < items.length; i++) {
    if(items[i].product.author.name == author) {
      list.push(items[i]);
      console.log("found a " + author);
    }
    //console.log(products.items[i]);
  }
  return list;
}

function getAvailableProducts(items){
  for(let i = 0; i < items.length; i++) {
    if(items[i].product.inventories[0].availability == "inStock") {
      list.push(items[i]);
      console.log("item is in stock");
    }
    //console.log(products.items[i]);
  }
  return list;
}
 

var inputHappened = function(currentInput){
  console.log( currentInput );
  var allItemArr = getItems( products );
  //ar result = getItemsByBrand(allItemArr, 'Nikon');
  //var result = getItemsByAuthor(allItemArr, 'Target');
  var result = getAvailableProducts(allItemArr);
  console.log(result);

  return "WOW GOOGLE SHOPPING";
};