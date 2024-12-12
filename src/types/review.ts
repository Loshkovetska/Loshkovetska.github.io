type ReviewsResponseType = {
  id: number;
  page: number;
  results: ReviewItemType[];
  total_pages: number;
  total_results: number;
};

type ReviewItemType = {
  id: number;
  author: string;
  author_details: {
    name: string;
    username: string;
    avatar_path: string;
    rating: number;
  };
  content: string;
  created_at: string;
  updated_at: string;
  url: string;
};

export type { ReviewItemType, ReviewsResponseType };
