import { LISTEYE_EKLE, LISTEDEN_CIKAR } from "./actions";

const initialState = {
  favMovies: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LISTEYE_EKLE:
      return {
        ...state,
        favMovies: [...state.favMovies, action.payload],
      };
    case LISTEDEN_CIKAR:
      const updatedList = state.favMovies.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, favMovies: updatedList };
    default:
      return state;
  }
}
