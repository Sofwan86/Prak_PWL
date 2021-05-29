import {
  GET_BeritaS_LIST,
} from "../actions/BeritaAction";

let initialState = {
  getBeritasList: false,
  errorBeritasList: false,
  getResponDataBerita: false,
  errorResponDataBerita: false,
  title: "Berita Bola",
};

const Beritas = (state = initialState, action) => {
  switch (action.type) {
    case GET_BeritaS_LIST:
      return {
        ...state,
        getBeritasList: action.payload.data,
        errorBeritasList: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default Beritas;
