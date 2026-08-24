export type ApiResponse<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};

export type Film = {
    title: string,
    episode_id: number,
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string,
    characters: string[]
    url: string;
}

