import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
  name: "company",
  initialState: {
    allCompany: [],
    singleCompany: null,
  },
  reducers: {
    setSingleCompany: (state, action) => {
      state.singleCompany = action.payload;
    },
    setAllCompany: (state, action) => {
      state.allCompany = action.payload;
    },
  },
});

export const { setSingleCompany,setAllCompany } = companySlice.actions;
export default companySlice.reducer;
