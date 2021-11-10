export const addItemTocart = (cartItems, cartItemToAdd) => {
  if (cartItemToAdd.qty === cartItemToAdd.stockCount) {
    return cartItems.map((cartitem) =>
      cartitem.id === cartItemToAdd.id
        ? {
            ...cartitem,
            qty: cartitem.qty,
          }
        : cartitem
    );
  }
  return cartItems.map((cartitem) =>
    cartitem.id === cartItemToAdd.id
      ? {
          ...cartitem,
          qty: cartitem.qty + 1,
        }
      : cartitem
  );
};

export const reduseitem = (cartItems, cartItemReduseTo) => {
  const existingItem = cartItems.find(
    (cartitem) => cartitem.id === cartItemReduseTo.id
  );
  if (existingItem.qty === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemReduseTo.id);
  }
  return cartItems.map((cartitem) =>
    cartitem.id === cartItemReduseTo.id
      ? {
          ...cartitem,
          qty: cartitem.qty - 1,
        }
      : cartitem
  );
};
