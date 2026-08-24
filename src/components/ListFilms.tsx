import { Link } from 'react-router-dom'
import type { Film } from '../types/film'

type FilmListProps = {
    films: Film[]
}

function ListFilms({ films }: FilmListProps) {

    return (
        <div>
            <h1>Star Wars Films</h1>

            <ul>
                {films.map((film) => {
                    const id = film.url.split('/').filter(Boolean).pop();

                    return (
                        <li key={film.url}>
                            <Link to={`/films/${id}`}>
                                {film.title} - {film.release_date}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default ListFilms