import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userDetailReducer } from "./redux/reducer/userDetailReducer";
import {
  userLoginReducer,
  userRegisterReducer,
} from "./redux/reducer/userReducer";
import { newUserReducer } from "./redux/reducer/newUserReducer";

const reducer = combineReducers({
  userDetail: userDetailReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  newUser: newUserReducer,
});

const userInfoFormStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const initialState = {
  userLogin: { userInfo: userInfoFormStorage },
};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
