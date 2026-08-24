import { type ApiResponse, type Film } from "../types/film";
const baseUrl = "https://swapi.dev/api";

export default async function getFilms(): Promise<Film[]> {
    const res = await fetch(`${baseUrl}/films/`);

    if (!res.ok) {
        throw new Error("Failed to fetch films");
    }

    const data: ApiResponse<Film> = await res.json();

    return data.results;
}