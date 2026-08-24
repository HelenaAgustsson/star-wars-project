import { Link } from 'react-router-dom'
import './FilmDetails.css'
import type { Film } from '../../types/film'
import { formatDate } from '../../utils/formatDate'

type FilmDetailsProps = {
    film: Film
}

function FilmDetails({ film }: FilmDetailsProps) {
    return (
        <main className="film-details">
            <Link to="/" className="film-details__back">
                ← Back to films
            </Link>

            <article>
                <span className="film-details__episode">
                    Episode {film.episode_id}
                </span>

                <h1>{film.title}</h1>

                <div className="film-details__meta">
                    <p>
                        <strong>Released:</strong> {formatDate(film.release_date)}
                    </p>
                    <p>
                        <strong>Director:</strong> {film.director}
                    </p>
                </div>

                <section className="film-details__crawl">
                    <h2>In a galaxy far, far away...</h2>
                    <p>{film.opening_crawl}</p>
                </section>
            </article>
        </main>
    )
}

export default FilmDetails