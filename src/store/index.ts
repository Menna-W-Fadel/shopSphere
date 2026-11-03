import {configureStore,combineReducers} from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import {persistStore,persistReducer} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

//combine reducers if we have multiple slices
const rootReducer = combineReducers({
    cart:cartReducer,
})

//define how redux states are saved
const persistConfig={
    key:"shopsphere",//identify the saved data in storage
    storage:AsyncStorage,//where to save data
    whitelist:["cart"],//which slices to save
    throttle:1000,//how often to save data in milliseconds(avoid multiple writes)
}

//
const persistedReducers=persistReducer(persistConfig,rootReducer);

export const store = configureStore({
    reducer:persistedReducers,
    //configure the middleware to ignore the serializable check for redux-persist actions 
    middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [
        "persist/FLUSH",
        "persist/REHYDRATE",
        "persist/PAUSE",
        "persist/PERSIST",
        "persist/PURGE",
        "persist/REGISTER",
      ],
    },
  }),
})

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;