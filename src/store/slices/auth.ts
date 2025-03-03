import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  signedIn: boolean;
  token: string | null;
  avatar?: string;
  userName?: string;
  email?: string;
  authority?: string[];
}

const initialState: AuthState = {
  signedIn: false,
  token: null,
  avatar: '',
  userName: '',
  email: '',
  authority: []
};

const sessionSlice = createSlice({
  name: `auth`,
  initialState,
  reducers: {
    signInSuccess(state, action: PayloadAction<string>) {
      state.signedIn = true;
      state.token = action.payload;
    },
    signOutSuccess(state) {
      state.signedIn = false;
      state.token = null;
    },
    setUser(state, action: PayloadAction<AuthState>) {
      state.avatar = action.payload?.avatar;
      state.email = action.payload?.email;
      state.userName = action.payload?.userName;
      state.authority = action.payload?.authority;
    }
  }
});

export const { signInSuccess, signOutSuccess, setUser } = sessionSlice.actions;
export default sessionSlice.reducer;
