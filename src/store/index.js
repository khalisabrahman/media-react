import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { usersReducer } from "./slices/usersSlice";
import { albumsApi } from "./apis/albumsApi";

//The configureStore here replaces the original createStore from Redux. Unlike createStore, configureStore from Redux Toolkit not only creates a store but can also accept reducer functions as arguments and automatically sets up the Redux DevTools Extension for easy debugging.
export const store = configureStore({
  reducer: {
    users: usersReducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(albumsApi.middleware);
  },
});

setupListeners(store.dispatch);

export * from "./thunks/fetchUsers";
export * from "./thunks/addUser";
export * from "./thunks/removeUser";
export { useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation } from "./apis/albumsApi";
