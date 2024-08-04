import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ArtistAlbumCount {
  _id: {
    artist: string;
    album: string;
  };
  count: number;
}

interface AlbumSongCount {
  _id: string;
  count: number;
}

interface GenreSongCount {
  _id: string;
  count: number;
}

interface ArtistSongCount {
  _id: string;
  count: number;
}

export interface StatisticsState {
  totalSongs: number;
  totalArtists: number;
  totalAlbums: number;
  totalGenres: number;
  artistAlbumCounts: ArtistAlbumCount[];
  albumSongCounts: AlbumSongCount[];
  genreSongCounts: GenreSongCount[];
  artistSongCounts: ArtistSongCount[];
  isLoading: boolean;
  error: string | null;
  token?: string;
  refreshToken?: string;
}

const initialState: StatisticsState = {
  totalSongs: 0,
  totalArtists: 0,
  totalAlbums: 0,
  totalGenres: 0,
  artistAlbumCounts: [],
  albumSongCounts: [],
  genreSongCounts: [],
  artistSongCounts: [],
  isLoading: false,
  error: null,
};

const statisticsSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {
    getStatstics: (state: StatisticsState) => {
      state.isLoading = true;
    },
    success: (
      state: StatisticsState,
      action: PayloadAction<StatisticsState>
    ) => {
      state.isLoading = false;
      state.totalSongs = action.payload.totalSongs;
      state.totalArtists = action.payload.totalArtists;
      state.totalAlbums = action.payload.totalAlbums;
      state.totalGenres = action.payload.totalGenres;
      state.artistAlbumCounts = action.payload.artistAlbumCounts;
      state.albumSongCounts = action.payload.albumSongCounts;
      state.genreSongCounts = action.payload.genreSongCounts;
      state.artistSongCounts = action.payload.artistSongCounts;
    },
    failed: (state: StatisticsState, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default statisticsSlice.reducer;
export const { getStatstics, success, failed } = statisticsSlice.actions;
