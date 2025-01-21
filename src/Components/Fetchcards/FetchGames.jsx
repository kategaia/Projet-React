import Apifetch from "../../api/Apifetch";
import Comment from "../Comments/Comments";

export default function FetchGames() {
  return (
    <>
      <Apifetch url="https://zelda.fanapis.com/api/games">
        {(response) => {
          console.log(response);
          const data = response.data;
          return (
            <div>
              {data && Array.isArray(data) ? (
                data
                  .filter((games) => games.id)
                  .map((games) => (
                    <div key={games.name} style={{border: "1px solid black", margin: "10px", padding: "30px", backgroundColor: "black", color: "white"}}>
                      <p>{games.description}</p>
                      <div>
                        <Comment />
                      </div>
                    </div>
                  ))
              ) : (
                <p>Aucun jeu trouvé.</p>
              )}
            </div>
          );
        }}
      </Apifetch>
    </>
    );
}