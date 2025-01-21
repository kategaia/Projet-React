import Apifetch from "../../api/Apifetch";

export default function FetchCharacters() {
    return (
        <>
            <Apifetch url="https://zelda.fanapis.com/api/characters">
                {(data) => (
                    <div>
                        {data
                            .filter((charact) => charact.name )
                            .map((charact) => (
                                <div key={charact.id}>
                                    <p>{charact.name}</p>
                                    <p>{charact.appearances}</p>
                                </div>
                            ))
                        }
                    </div>
                )}
            </Apifetch>
        </>
    )
}