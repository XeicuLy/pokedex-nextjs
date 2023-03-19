export type pokemonData = {
  id: string;
  image: string;
  height: number;
  weight: number;
  index: number;
  name: string;
  genus: string;
  description: string;
};

export type pokemon = {
  name: string;
  url: string;
};

export type PokemonDetailData = {
  id?: string;
  image: string;
  height: number;
  weight: number;
  index: number;
  name: string;
  genus: string;
  description: string;
};

export interface DetailPokemonData {
  names: {
    name: string;
    language: {
      name: string;
    };
  }[];
  genera: {
    genus: string;
    language: {
      name: string;
    };
  }[];
  flavor_text_entries: {
    flavor_text: string;
    language: {
      name: string;
    };
  }[];
}

