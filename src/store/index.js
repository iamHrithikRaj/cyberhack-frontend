import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialAuthState = { isAuthenticated: false, authtoken: '' };

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.authtoken = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export const authActions = authSlice.actions;
export default store;
