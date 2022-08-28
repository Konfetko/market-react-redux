import {configureStore, ThunkAction, Action, combineReducers, getDefaultMiddleware} from '@reduxjs/toolkit';
// @ts-ignore
import storage from 'redux-persist/lib/storage'
import { persistReducer,persistStore } from 'redux-persist';
import userReducer from '../store/user/userSlice'
import productsReducer from '../store/product/productsSlice'
import productReducer from '../store/product/productSlice'
import categoryReducer from "../store/product/categorySlice";
import cartReducer from "../store/product/cartSlice";

const rootReducer = combineReducers({
  user:userReducer,
  products:productsReducer,
  categories:categoryReducer,
  cart:cartReducer,
  product:productReducer
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist:['user','cart']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware:getDefaultMiddleware({serializableCheck:false})
});

export const persister = persistStore(store)

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
