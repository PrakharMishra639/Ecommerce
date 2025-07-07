import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const initialState = {
  isLoading: false,
  featureImageList: [],
};

// Get Feature Images
export const getFeatureImages = createAsyncThunk(
  "/feature/getFeatureImages",
  async () => {
    const response = await axios.get(`${API_BASE_URL}/api/common/feature/get`);
    return response.data;
  }
);

// Add Feature Image
export const addFeatureImage = createAsyncThunk(
  "/feature/addFeatureImage",
  async (image) => {
    const response = await axios.post(
      `${API_BASE_URL}/api/common/feature/add`,
      {
        image,
      }
    );
    return response.data;
  }
);

// Delete Feature Image
export const deleteFeatureImage = createAsyncThunk(
  "/feature/deleteFeatureImage",
  async (id) => {
    const response = await axios.delete(
      `${API_BASE_URL}/api/common/feature/delete/${id}`
    );
    return { id }; // We return id to remove it from state
  }
);

const commonSlice = createSlice({
  name: "commonSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFeatureImages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFeatureImages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.featureImageList = action.payload.data;
      })
      .addCase(getFeatureImages.rejected, (state) => {
        state.isLoading = false;
        state.featureImageList = [];
      })
      .addCase(deleteFeatureImage.fulfilled, (state, action) => {
        state.featureImageList = state.featureImageList.filter(
          (item) => item._id !== action.payload.id
        );
      });
  },
});

export default commonSlice.reducer;
