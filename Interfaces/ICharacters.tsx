export interface ICharacters extends ICharacter {
  info: {
    count: number;
    next?: string;
    pages: number;
    prev?: number;
  };
  results: ICharacters[];
}

export interface ICharacter {
  created: string;
  episode: string[];
  gender: string;
  id: number;
  image: string;
  location: {
    name: string;
    url: string;
  };
  name: string;
  origin: {
    name: string;
    url: string;
  };
  species: string;
  status: string;
  type: string;
  url: string;
}
