import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
// redux-persist
import storage from "redux-persist/lib/storage";
// slices
import moviesReducer from "./slices/movies";
import actorsReducer from "./slices/actors";
// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: [],
};

const moviesPersistConfig = {
  key: "movies",
  storage,
  keyPrefix: "redux-",
  whitelist: ["moviesList"],
};

const actorsPersistConfig = {
  key: "actores",
  storage,
  keyPrefix: "redux-",
  whitelist: ["actorsList"],
};

const rootReducer = combineReducers({
  movies: persistReducer(moviesPersistConfig, moviesReducer),
  actores: persistReducer(actorsPersistConfig, actorsReducer),
});

export { rootPersistConfig, rootReducer };
