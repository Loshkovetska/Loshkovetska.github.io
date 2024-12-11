type SearchItemResult = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster?: string;
};

type SearchResultType = {
  Response: string;
  Search: SearchItemResult[];
  totalResults: string;
};

export type { SearchItemResult, SearchResultType };
