define(['./shoppingcart', './inventory'], (cart, inv) => {

  const itemsElement = document.querySelector('.items');
  const fruitListElement = document.querySelector('.fruit-list');

  const renderItems = (category) => {
    const fruit = inv.getStockByCategory(category);
    fruit.forEach((item) => {
      const listItemElement = document.createElement('li');
      const listItemElementText = document.createTextNode(item);
      listItemElement.appendChild(listItemElementText);
      fruitListElement.appendChild(listItemElement);
    });
    fruitListElement.addEventListener('click', (evt) => {
      evt.preventDefault();

      console.log(evt);
      if (evt.srcElement.nodeName === 'LI') {
        const item = evt.srcElement.innerText;
        const itemObject = inv.getStockItem(category, item);
        console.log(itemObject);
        cart.add(itemObject);
      }
    });
  };

  return {
    init() {
      renderItems('fruit');
    },
    getInventory(category) {
      return inv.getStock()
    },
    removeItemInventory() {

    },
    getStockByCategory(category) {
      inv.getStockByCategory(category);
    },
    removeItemFromStockByCategory(category) {
      inv.removeStockItemByCategory(category);
    },
    addItemToStock(category) {

    },
    addToCart(item) {
      cart.add(item);
    },
    removeFromCart(item) {

    },
    getCartTotal() {

    }
  }
});
