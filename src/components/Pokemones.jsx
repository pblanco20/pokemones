import React from "react";
// hooks react redux
import { useDispatch, useSelector } from "react-redux";

// importamos la acción
import { getAllPokemons } from "../redux/pokeReducer";

const Pokemones = () => {
  const pokemones = useSelector((state) => state.pokemones.array);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(getAllPokemons())}>
        Obtener Pokemones
      </button>

      <ul>
        {pokemones.map((item) => (
          <li key={item.name}>
            {item.name} <a href={item.url}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pokemones;
