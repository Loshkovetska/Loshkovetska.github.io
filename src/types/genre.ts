type GenreResultType = {
  genres: GenreItemType[];
};

type GenreItemType = {
  id: number;
  name: string;
};

export type { GenreItemType, GenreResultType };
