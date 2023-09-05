import { configureStore } from "@reduxjs/toolkit";
import { usersSlice } from "../componentes/users/slice";

export const store = configureStore({
	reducer: {
		users: usersSlice.reducer,
	},
});

//Arreglamos el problema de que no sepa el tipo de RootState
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
