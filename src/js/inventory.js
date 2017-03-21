define(() => {

  const stock = {

    items: ['fruit'], // if fruit .list is not empty, display string :TODO

    fruit: {
      list: ['apple', 'pear', 'banana'],

      items: [
        {name: 'apple', price: '.35', qty: 4},
        {name: 'pear', price: '.30', qty: 4},
        {name: 'banana', price: '.25', qty: 4}
      ]
    }
  }

  return {
    getStock(category) {
      return stock.list;
    },
    removeFromStock() {

    },
    getStockByCategory(category) {
      return stock[category].list;
    },

    getStockItem(category, itemToSearchFor) {
      // search category list
      const categoryInStock = stock.items.includes(category);
      // if exists
      if (categoryInStock) {

        // get item object
        return stock[category].items.filter((item) => {
          return item.name === itemToSearchFor;
        })[0];
        
      }

      return {inStock: false, msg: 'Not in stock'}
    },

    removeStockItemByCategory(category, item) {
      const catList = stock[category].list;
      
      const newList = stock.list.filter((item) => {
        return item !== category;
      });
      list = newList;
    }
  }
})
