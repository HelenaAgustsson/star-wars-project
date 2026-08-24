import { useParams } from 'react-router-dom'
import type { Film } from '../types/film'
import { useEffect, useState } from 'react'
import getFilm from '../api/getFilm'
import FilmDetails from '../components/FilmDetails/FilmDetails'

function FilmPage() {
    const [film, setFilm] = useState<Film | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const { id } = useParams()

    useEffect(() => {
        if (!id) return

        async function loadFilm(filmId: string) {
            try {
                setLoading(true)
                setError(null)

                const res = await getFilm(filmId)
                setFilm(res)
            } catch (err) {
                console.error(err)
                setError(
                    'We are having trouble fetching this film right now. Please try again later.'
                )
            } finally {
                setLoading(false)
            }
        }

        loadFilm(id)
    }, [id])

    if (!id) {
        return <div>No film id provided</div>
    }

    if (loading) {
        return <div>Loading film...</div>
    }

    if (error) {
        return <div>{error}</div>
    }

    if (!film) {
        return <div>Film not found</div>
    }

    return (
        <FilmDetails film={film} />
    )
}

export default FilmPage