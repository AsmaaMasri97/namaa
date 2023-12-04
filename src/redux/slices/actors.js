import { createSlice } from "@reduxjs/toolkit";

// ----------------------------------------------------------------------

const slice = createSlice({
  name: "actores",
  initialState: {
    actorID: null,
    actorsList: [
      {
        id: 1,
        name: "Tim Robbins",
        age: "30",
        join_date: "10-11-2010",
        role: "Background role",
      },
      {
        id: 2,
        name: "Morgan Freeman",
        age: "50",
        join_date: "01-01-2000",
        role: "Cameo",
      },
      {
        id: 3,
        name: "Bob Gunton",
        age: "50",
        join_date: "01-02-2000",
        role: "Recurring character",
      },
      {
        id: 4,
        name: "William Sadler",
        age: "34",
        join_date: "01-11-2005",
        role: "Side character",
      },
      {
        id: 5,
        name: "Clancy Brown",
        age: "45",
        join_date: "10-11-2010",
        role: "Series regular",
      },
      {
        id: 6,
        name: "Gil Bellows ",
        age: "40",
        join_date: "01-01-2023",
        role: "Cameo",
      },
      {
        id: 7,
        name: "Mark Rolston",
        age: "40",
        join_date: "01-01-2010",
        role: "Background role",
      },
      {
        id: 8,
        name: "Aaron Eckhart",
        age: "40",
        join_date: "01-01-2010",
        role: "Series regular",
      },
    ],
  },

  reducers: {
    // create
    createActor(state, action) {
      console.log(action.payload);
      state.actorsList.push(action.payload);
    },

    //update
    editActor(state, action) {
      const updatedList = state.actorsList.map((obj) => {
        if (obj.id === action.payload.id) {
          return { ...action.payload };
        }
        return obj;
      });
      state.actorsList = updatedList;
    },

    //delete
    deleteActor(state, action) {
      console.log(action.payload);
      const updatedList = state.actorsList.filter(
        (actor) => actor.id !== action.payload
      );
      state.actorsList = updatedList;
    },

    //
    setActorID(state, action) {
      state.actorID = action.payload;
    },
  },

  extraReducers: {},
});

// Reducer
export default slice.reducer;

// Actions
export const { createActor, deleteActor, editActor, setActorID } =
  slice.actions;
