import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface NewsState {
  data: NewsResponse;
  status: "idle" | "loading" | "failed";
  layout: Layout;
}

export enum Layout {
  List = "LIST",
  Cards = "CARDS",
}

interface NewsResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

export interface Article {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}
const initialState: NewsState = {
  data: { status: "", totalResults: 0, articles: [] },
  status: "idle",
  layout: Layout.Cards,
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload.data;
    },

    setLayout: (state, action) => {
      state.layout = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export const fetchData = createAsyncThunk<NewsResponse, string>(
  "news/fetchData",
  async (country) => {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=8da3dc9deb5a48cc909b1f079d4e38fa`
    );
    const data: NewsResponse = await response.json();
    return data;
  }
);

export const { setData, setLayout, setStatus } = newsSlice.actions;

export const selectNews = (state: RootState) => state.news.data;
export const selectLayout = (state: RootState) => state.news.layout;
export const selectStatus = (state: RootState) => state.news.status;

export default newsSlice.reducer;
