import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    // useEffect
    useEffect(() => {
        const abortCont = new AbortController();
        // conditional loading message
        setTimeout(() => {
            // fetching data with useEffect
            fetch(url, { signal: abortCont.signal })
            .then(res => {
                if(!res.ok){
                    throw Error('Pas de post');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                // useEffect cleanup
                if(err.name === 'AbortError'){
                    console.log('fetch aborted')
                } else {
                    setIsPending(false);
                    setError(err.message);
                }
            })
        }, 1000);
        // useEffect cleanup
        return () => abortCont.abort();
    }, [url]);

    return { data, isPending, error }
}

export default useFetch;