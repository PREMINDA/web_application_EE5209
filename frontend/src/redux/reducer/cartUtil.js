export const addItemTocart = (cartItems, cartItemToAdd) => {
  if (cartItemToAdd.qty === cartItemToAdd.stockCount) {
    return cartItems.map((cartitem) =>
      cartitem.game.id === cartItemToAdd.game.id
        ? {
            ...cartitem,
            qty: cartitem.qty,
          }
        : cartitem
    );
  }
  return cartItems.map((cartitem) =>
    cartitem.game.id === cartItemToAdd.game.id
      ? {
          ...cartitem,
          qty: cartitem.qty + 1,
          totalPrice: (cartitem.qty+1)*cartitem.price
        }
      : cartitem
  );
};

export const reduseitem = (cartItems, cartItemReduseTo) => {
  const existingItem = cartItems.find(
    (cartitem) => cartitem.id === cartItemReduseTo.id
  );
  if (existingItem.qty === 1) {
    return cartItems.filter((cartItem) => cartItem.game.id !== cartItemReduseTo.game.id);
  }
  return cartItems.map((cartitem) =>
    cartitem.game.id === cartItemReduseTo.game.id
      ? {
          ...cartitem,
          qty: cartitem.qty - 1,
          totalPrice: (cartitem.qty-1)*cartitem.price
        }
      : cartitem
  );
};
