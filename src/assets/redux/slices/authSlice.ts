import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	userName: '',
	email: '',
	password: '',
	successMessage: null,
	errorMessage: null,
	isUserNameValid: true,
	isEmailValid: true,
	isPasswordValid: true,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUserName(state, action) {
			state.userName = action.payload
		},
		setEmail(state, action) {
			state.email = action.payload
		},
		setPassword(state, action) {
			state.password = action.payload
		},
		setSuccessMessage(state, action) {
			state.successMessage = action.payload
		},
		setErrorMessage(state, action) {
			state.errorMessage = action.payload
		},
		setIsUserNameValid(state, action) {
			state.isUserNameValid = action.payload
		},
		setIsEmailValid(state, action) {
			state.isEmailValid = action.payload
		},
		setIsPasswordValid(state, action) {
			state.isPasswordValid = action.payload
		},
	},
})

export const {
	setUserName,
	setEmail,
	setPassword,
	setSuccessMessage,
	setErrorMessage,
	setIsUserNameValid,
	setIsEmailValid,
	setIsPasswordValid,
} = authSlice.actions

export default authSlice.reducer
