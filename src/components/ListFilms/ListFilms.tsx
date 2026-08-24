import type { Film } from '../../types/film'
import FilmCard from '../FilmCard/FilmCard'
import './ListFilms.css'

type ListFilmsProps = {
    films: Film[]
}

function ListFilms({ films }: ListFilmsProps) {
    return (
        <main className="films">
            <h1>Star Wars Films</h1>

            <div className="film-grid">
                {films.map((film) => (
                    <FilmCard key={film.url} film={film} />
                ))}
            </div>
        </main>
    )
}

export default ListFilms