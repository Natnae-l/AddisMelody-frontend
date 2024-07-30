import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface PageChanger {
  currentPage: "notification" | "user" | "music";
}

const initialState: PageChanger = {
  currentPage: "music",
};

const pageSlice = createSlice({
  name: "pageChange",
  initialState,
  reducers: {
    changePage: (state: PageChanger, action: PayloadAction<PageChanger>) => {
      state.currentPage = action.payload.currentPage;
    },
  },
});

export default pageSlice.reducer;
export const { changePage } = pageSlice.actions;
