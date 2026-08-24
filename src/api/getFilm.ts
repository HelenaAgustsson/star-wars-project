import type { Film } from "../types/film";

const baseUrl = "https://swapi.dev/api";

export default async function getFilm(id: string): Promise<Film> {
  const res = await fetch(`${baseUrl}/films/${id}/`);

  if (!res.ok) {
    throw new Error("Failed to fetch film");
  }

  const data: Film = await res.json();

  return data;
}