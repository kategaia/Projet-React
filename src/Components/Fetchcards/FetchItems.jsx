import Apifetch from "../../api/Apifetch";
import Comment from "../Comments/Comments";

export default function FetchItems() {
  return (
    <>
      <Apifetch url="https://zelda.fanapis.com/api/items">
        {(response) => {
          console.log(response);
          const data = response.data;
          return (
            <div>
              {data && Array.isArray(data) ? (
                data
                  .filter((item) => item.id)
                  .map((item) => (
                    <div key={item.name} style={{border: "1px solid black", margin: "10px", padding: "30px", backgroundColor: "black", color: "white"}}>
                      <p>{item.name}</p>
                      <p>{item.appearances}</p>
                      <div>
                        <Comment />
                      </div>
                    </div>
                  ))
              ) : (
                <p>Aucun Objet Trouvé trouvé.</p>
              )}
            </div>
          );
        }}
      </Apifetch>
    </>
    );
}