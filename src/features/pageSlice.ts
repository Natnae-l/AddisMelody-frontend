import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Page {
  page: "notification" | "user" | "";
}

const initialState: Page = {
  page: "",
};

const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    changePage: (state: Page, action: PayloadAction<Page>) => {
      state.page = action.payload.page;
    },
  },
});

export default pageSlice.reducer;
export const { changePage } = pageSlice.actions;
