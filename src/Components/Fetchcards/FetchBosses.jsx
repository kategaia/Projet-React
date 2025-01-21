import Apifetch from "../../api/Apifetch";

export default function FetchBosses() {
    return (
        <>
            <Apifetch url="https://zelda.fanapis.com/api/bosses">
                {(data) => (
                    <div>
                        {data
                            .filter((boss) => boss.id )
                            .map((boss) => (
                                <div key={boss.name}>
                                    <p>{boss.name}</p>
                                    <p>{boss.appearances}</p>
                                </div>
                            ))
                        }
                    </div>
                )}
            </Apifetch>
        </>
    )
}