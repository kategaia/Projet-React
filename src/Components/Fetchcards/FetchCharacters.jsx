import Comment from "../Comments/Comments";
import Apifetch from "../../api/Apifetch";

export default function FetchCharacters() {

  return (
    <>
      <Apifetch url="https://zelda.fanapis.com/api/characters">
        {(response) => {
          console.log(response);
          const data = response.data;
          return (
            <div>
              {data && Array.isArray(data) ? (
                data
                  .filter((charact) => charact.id)
                  .map((charact) => (
                    <div key={charact.id} style={{border: "1px solid black", margin: "10px", padding: "30px", backgroundColor: "black", color: "white"}}>
                        <p>{charact.name}</p>
                        <p>{charact.race}</p>
                        <p>{charact.description}</p>
                        <div>
                          <Comment />
                        </div>
                    </div>
                  ))
              ) : (
                <p>Aucun Personnage trouvé.</p>
              )}
            </div>
          );
        }}
      </Apifetch>
    </>
  );
}