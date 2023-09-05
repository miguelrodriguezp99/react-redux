import { createSlice } from "@reduxjs/toolkit";

export interface User {
	name: string;
	email: string;
	github: string;
}

export interface UserWithId extends User {
	id: string;
}

const initialState: UserWithId[] = [
	{
		id: "1",
		name: "Pilar Perez",
		email: "piliolvido@gmail.com",
		github: "piliolvido",
	},
	{
		id: "2",
		name: "Miguel Rodriguez",
		email: "miguelrodriguez@gmail.com",
		github: "miguelrodriguez",
	},
	{
		id: "3",
		name: "Arnau Justribó",
		email: "arnaujustribo@gmail.com",
		github: "justri",
	},
];

export const usersSlice = createSlice({
	name: "users",
	initialState: initialState,
	reducers: {},
});

export default usersSlice.reducer;
