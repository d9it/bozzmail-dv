import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiCall from '../api/axios';

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (userData, { rejectWithValue }) => {
    // console.log('user data: ', userData);
    try {
      const response = await apiCall('/auth/signup', userData, 'POST');
      // console.log("response of user data: ", response.data);
      return response.data;
    } catch (err) {
      // console.log("error response of user data: ", err?.response);
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        console.log('action payload: ', action.payload);
        state.loading = false;
        state.user = null;
        state.error = action.payload || 'Registration failed';
      });
  },
});

export const { clearError } = userSlice.actions;
export default userSlice.reducer;