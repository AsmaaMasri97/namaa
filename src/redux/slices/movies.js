import { createSlice } from "@reduxjs/toolkit";

// ----------------------------------------------------------------------

const slice = createSlice({
  name: "movies",
  initialState: {
    movieID: null,
    moviesList: [
      {
        id: 1,
        title: "The Shawshank Redemption",
        year: "1994",
        description:
          "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.",
        actors: [1, 2, 3],
      },
      {
        id: 2,
        title: "Pulp Fiction",
        year: "2010",
        description:
          "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        actors: [4, 5, 6],
      },
      {
        id: 3,
        title: "The Dark Knight",
        year: "2020",
        description: "",
        actors: [1, 2, 3, 4],
      },
      {
        id: 4,
        title: "The Mother",
        year: "2021",
        description: "",
        actors: [1, 2, 3, 4, 5, 6],
      },
      {
        id: 5,
        title: "Goodfellas",
        year: "2015",
        description:
          "The story of Henry Hill and his life in the mafia, covering his relationship with his wife Karen and his mob partners Jimmy Conway and Tommy DeVito.",
        actors: [1, 2, 3, 4, 5, 6, 7],
      },
      {
        id: 6,
        title: "Inception",
        year: "2010",
        description: "",
        actors: [1, 2, 3, 4, 5],
      },
      {
        id: 7,
        title: "The Lord of the Rings: The Two Towers",
        year: "2002",
        description: "",
        actors: [2, 3, 4],
      },
      {
        id: 8,
        title: "One Flew Over the Cuckoo's Nest",
        year: "1975",
        description:
          "In the Fall of 1963, a Korean War veteran and criminal pleads insanity and is admitted to a mental institution, where he rallies up the scared patients against the tyrannical nurse.",
        actors: [1, 2, 3, 4, 5, 6, 7],
      },
    ],
  },

  reducers: {
    // create
    createMovie(state, action) {
      state.moviesList.push(action.payload);
    },

    //update
    editMovie(state, action) {
      const updatedList = state.moviesList.map((obj) => {
        if (obj.id === action.payload.id) {
          return { ...action.payload };
        }
        return obj;
      });
      state.moviesList = updatedList;
    },

    //delete
    deleteMovie(state, action) {
      const updatedList = state.moviesList.filter(
        (actor) => actor.id !== action.payload
      );
      state.moviesList = updatedList;
    },

    //
    setMovieID(state, action) {
      state.movieID = action.payload;
    },
  },

  extraReducers: {},
});

// Reducer
export default slice.reducer;

// Actions
export const { createMovie, deleteMovie, setMovieID, editMovie } =
  slice.actions;
