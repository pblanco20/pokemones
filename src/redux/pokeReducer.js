import Axios from "axios";

const initialState = {
  array: []
};

const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";

export default function pokeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_POKEMONS:
      return {
        ...state,
        array: action.payload
      };
    default:
      return state;
  }
}

export const getAllPokemons = () => async (dispatch, getState) => {
  try {
    const result = await Axios.get(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
    );

    dispatch({
      type: GET_ALL_POKEMONS,
      payload: result.data.results
    });
  } catch (error) {
    console.log(error);
  }
};
