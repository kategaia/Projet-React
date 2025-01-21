import Apifetch from "../../api/Apifetch";

export default function FetchGames() {
    return (
        <>
            <Apifetch url="https://zelda.fanapis.com/api/games">
                {(data) => (
                    <div>
                        {data
                            .filter((games) => games.id )
                            .map((games) => (
                                <div key={games.name}>
                                    <p>{games.name}</p>
                                    <p>{games.released_date}</p>
                                </div>
                            ))
                        }
                    </div>
                )}
            </Apifetch>
        </>
    )
}