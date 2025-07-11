import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "job",
  initialState: {
    allJobs: [],
    singleJob: null,
  },
  reducers: {
    setAllJobs: (state, action) => {
      state.allJobs = action.payload;
    },
    setSingleJob: (state, action) => {
      state.singleJob = action.payload;
    },
    setRecruiterJobs: (state, action) => {
      state.recruiterJob = action.payload;
    },
  },
});

export const { setAllJobs, setSingleJob, recruiterJob } = jobSlice.actions;
export default jobSlice.reducer;
