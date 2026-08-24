import { useEffect, useState } from 'react'
import getFilms from '../api/getFilms'
import type { Film } from '../types/film'
import ListFilms from '../components/ListFilms/ListFilms'

function FilmsPage() {
    const [films, setFilms] = useState<Film[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        async function loadFilms() {
            try {
                const res = await getFilms()
                setFilms(res)
            } catch (err) {
                console.error(err)
                setError(
                    'We are having trouble fetching the films right now. Please try again later.'
                )
            } finally {
                setLoading(false)
            }
        }

        loadFilms()
    }, [])

    if (loading) return <div>Loading films...</div>
    if (error) return <div>{error}</div>

    return <ListFilms films={films} />
}

export default FilmsPage