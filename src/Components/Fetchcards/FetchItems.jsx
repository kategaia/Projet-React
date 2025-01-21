import Apifetch from "../../api/Apifetch";

export default function FetchItems() {
    return (
        <>
            <Apifetch url="https://zelda.fanapis.com/api/items">
                {(data) => (
                    <div>
                        {data
                            .filter((item) => item.id )
                            .map((item) => (
                                <div key={item.name}>
                                    <p>{item.name}</p>
                                    <p>{item.games}</p>
                                </div>
                            ))
                        }
                    </div>
                )}
            </Apifetch>
        </>
    )
}