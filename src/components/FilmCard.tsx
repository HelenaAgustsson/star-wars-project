import { Link } from 'react-router-dom'
import type { Film } from '../types/film'
import './FilmCard.css'

type FilmCardProps = {
    film: Film
}

function FilmCard({ film }: FilmCardProps) {
    const id = film.url.split('/').filter(Boolean).pop()

    return (
        <Link className="film-card" to={`/films/${id}`}>
            <span className="film-card__episode">
                Episode {film.episode_id}
            </span>

            <h2>{film.title}</h2>

            <div className="film-card__meta">
                <span>{film.release_date}</span>
                <span>Directed by {film.director}</span>
            </div>
        </Link>
    )
}

export default FilmCard