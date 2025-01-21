import Apifetch from "../../api/Apifetch";

export default function FetchPlaces() {
    return (
        <>
            <Apifetch url="https://zelda.fanapis.com/api/places">
                {(data) => (
                    <div>
                        {data
                            .filter((place) => place.id )
                            .map((place) => (
                                <div key={place.name}>
                                    <p>{place.name}</p>
                                    <p>{place.games}</p>
                                </div>
                            ))
                        }
                    </div>
                )}
            </Apifetch>
        </>
    )
}