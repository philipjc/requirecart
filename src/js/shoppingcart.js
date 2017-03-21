define(() => {

  let empty = true;
  let cart = [];
  let cartCount = 0;
  let cartTotal = 0;

  const accumalateCost = (price) => {
    cartTotal = cartTotal + Number(price);
  }

  const renderCartCount = () => {
    const countNumElement = document.querySelector('.num');
    countNumElement.innerHTML = cartCount;
  }

  const renderCartTotal = () => {
    const totalNumElement = document.querySelector('.total');
    totalNumElement.innerHTML = cartTotal;
  }

  return {
    add(item) {
      cartCount++;
      accumalateCost(item.price);
      cart.push(item);
      empty = false;
      console.log('add from cart');
      console.log('cat contents: ', cart);
      renderCartCount();
      renderCartTotal();
    }
  }

})
