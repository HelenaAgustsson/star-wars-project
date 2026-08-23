export type ApiResponse<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};

export type Film = {
    title: string,
    episode_id: number,
    release_date: string,
    characters: string[]
}

