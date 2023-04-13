import { createSlice } from '@reduxjs/toolkit';
import { planesThunk, planeThunk, createPlaneThunk } from './planeAPI';

const planeSlice = createSlice({
  name: 'plane',
  initialState: {
    planes: [],
    plane: null,
    error: null,
    loading: false,
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(planesThunk.pending, (state) => ({ ...state, error: null, loading: true }));
    builder.addCase(planesThunk.fulfilled, (state, action) => ({
      ...state, planes: action.payload.data, error: null, loading: false,
    }));
    builder.addCase(planesThunk.rejected,
      (state, action) => ({ ...state, error: action.payload, loading: false }));
    builder.addCase(createPlaneThunk.rejected, (state, action) => ({
      ...state, error: action.payload, loading: false,
    }));
    builder.addCase(planeThunk.pending, (state) => ({ ...state, error: null, loading: true }));
    builder.addCase(planeThunk.fulfilled, (state, action) => ({
      ...state, plane: action.payload.data, error: null, loading: false,
    }));
    builder.addCase(planeThunk.rejected,
      (state, action) => ({ ...state, error: action.payload, loading: false }));
  },
});

export default planeSlice.reducer;
