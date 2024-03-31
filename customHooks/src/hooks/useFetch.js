import { useEffect, useState } from 'react'

function useFetch (fetchFunction, initialValue,  errorMss) {
    const [fetchData, setFetchData] = useState(initialValue)
    const [isFetching, setIsFetching] = useState()
    const [error, setError] = useState()
    useEffect(() => {
        async function fetchPlaces() {
            setIsFetching(true)
            try {
                const data = await fetchFunction()
                setFetchData(data)
            } catch (error) {
                setError({ message: error.message || errorMss })
            }

            setIsFetching(false)
        }

        fetchPlaces()
    }, [fetchFunction])

    const setData = (data) => setFetchData(data)

    return {
        fetchData,
        isFetching,
        error,
        setData
    }
}

export default useFetch
