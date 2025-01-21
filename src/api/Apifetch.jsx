/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';


export default function Apifetch({ url, children}) {
    const [Data, setData] = useState([]);
    const [Error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(url)
            .then((reponse) => {
                if (!reponse.ok) {
                    throw new Error("Erreur lors de la récupération des données de l'API");
                }
                return reponse.json();
            })
            .then((jsonData) => {
                setData(jsonData);
                setError(null);
                setIsLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setIsLoading(false);
            });
    }, [url]);
    
    if (isLoading) {
        return (
            <div className='container'>
                <div className='container_content'>
                    <span className='loader'></span>
                </div>
            </div>
        );
    }

    if (Error) {
        return <div className='error'>{Error}</div>;
    }

    return <>{Data && children(Data) }</>
}