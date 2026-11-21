import { AbilityItem, PokemonData } from "../types/pokemon";

export const getPokepediaData = async (): Promise<PokemonData[]> => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    const data = await response.json();

    const pokemonList = await Promise.all(
      data.results.map(async (pokemon: { url: string }) => {
        const res = await fetch(pokemon.url);
        const details: any = await res.json();

        return {
          id: details.id,
          name: details.name,
          imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${details.id}.png`,
          types: details.types.map((t: any) => t.type.name),
        };
      }),
    );

    return pokemonList;
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
    return [];
  }
};

export const getPokemonAbilities = async (
  id: string,
): Promise<AbilityItem[]> => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!response.ok) {
      return [];
    }

    const details = await response.json();
    return (
      details.abilities?.map((entry: any) => ({
        name: entry.ability.name.replace(/-/g, " "),
        isHidden: Boolean(entry.is_hidden),
      })) ?? []
    );
  } catch (error) {
    console.error("Error fetching Pokémon abilities:", error);
    return [];
  }
};
