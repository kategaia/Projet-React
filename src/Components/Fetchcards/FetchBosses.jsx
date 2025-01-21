import Apifetch from "../../api/Apifetch";
import Comment from "../Comments/Comments";

export default function FetchBosses() {
    return (
    <>
      <Apifetch url="https://zelda.fanapis.com/api/bosses">
        {(response) => {
          console.log(response);
          const data = response.data;
          return (
            <div>
              {data && Array.isArray(data) ? (
                data
                  .filter((boss) => boss.id)
                  .map((boss) => (
                    <div key={boss.name} style={{border: "1px solid black", margin: "10px", padding: "30px", backgroundColor: "black", color: "white"}}>
                        <p>{boss.name}</p>
                        <p>{boss.description}</p>
                        <div>
                          <Comment />
                        </div>
                    </div>
                  ))
              ) : (
                <p>Aucun Boss trouvé.</p>
              )}
            </div>
          );
        }}
      </Apifetch>
    </>
    );
}