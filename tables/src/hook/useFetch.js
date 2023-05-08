import { useEffect, useState } from 'react'

export const useFetch = (url, initialValue) => {
    const [data, setData] = useState(initialValue);
    const [errorState, setErrorState] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(url);                
                const data = await response.json();
                setData(data);
            } catch (err) {
                setErrorState(err)
            } finally {
                setIsLoading(false);
            }
        })()
    }, [url])
    return { data, errorState, isLoading }
}

