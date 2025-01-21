import Apifetch from "../../api/Apifetch";
import Comment from "../Comments/Comments";

export default function FetchPlaces() {
  return (
    <>
      <Apifetch url="https://zelda.fanapis.com/api/places">
        {(response) => {
          console.log(response);
          const data = response.data;
          return (
            <div>
              {data && Array.isArray(data) ? (
                data
                  .filter((place) => place.id)
                  .map((place) => (
                    <div key={place.name} style={{border: "1px solid black", margin: "10px", padding: "30px", backgroundColor: "black", color: "white"}}>
                      <p>{place.name}</p>
                      <p>{place.appearances}</p>
                      <div>
                        <Comment />
                      </div>
                    </div>
                  ))
              ) : (
                <p>Aucun Lieu trouvé.</p>
              )}
            </div>
          );
        }}
      </Apifetch>
    </>
    );
}