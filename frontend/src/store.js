import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import {
  userDetailReducer,
  userDeleteReducer,
  userEditReducer,
} from "./redux/reducer/userDetailReducer";
import {
  userLoginReducer,
  userRegisterReducer,
} from "./redux/reducer/userReducer";
import {
  collectionListReducer,
  collectionGameReducer,
} from "./redux/reducer/collectionListReducer";
import { newUserReducer } from "./redux/reducer/newUserReducer";
import { newGameReducer } from "./redux/reducer/newCollectionReducer";
import { cartReducer } from "./redux/reducer/cartReducer";
import {order,orderList,deletOrderred} from "./redux/reducer/cartItemOrderReducer"
import {commentList,postComment} from "./redux/reducer/commentReducer"
const reducer = combineReducers({
  userDetail: userDetailReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  newUser: newUserReducer,
  newGame: newGameReducer,
  collectionList: collectionListReducer,
  game: collectionGameReducer,
  UserDelete: userDeleteReducer,
  userEdit: userEditReducer,
  cart: cartReducer,
  orderItem:order,
  orderListItem:orderList,
  deletOrder: deletOrderred,
  Comment:commentList,
  newcomment:postComment
});

const cartItemFromStorage = localStorage.getItem("cartItem")
  ? JSON.parse(localStorage.getItem("cartItem"))
  : [];

const userInfoFormStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const initialState = {
  cart: { cartItems: cartItemFromStorage },
  userLogin: { userInfo: userInfoFormStorage },
};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
