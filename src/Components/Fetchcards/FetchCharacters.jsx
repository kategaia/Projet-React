import { useState, useEffect } from 'react';
import Comment from "../Comments/Comments";
import Apifetch from "../../api/Apifetch";

export default function FetchCharacters() {
  const [selectedCharacterId, setSelectedCharacterId] = useState(null);
  const [games, setGames] = useState([]);

  useEffect(() => {
    if (selectedCharacterId) {
      fetch(`https://zelda.fanapis.com/api/games/${selectedCharacterId}`)
        .then(response => response.json())
        .then(data => {
          console.log('Games data:', data);
          setGames(data.games || []);
        })
        .catch(error => console.error('Error fetching games:', error));
    }
  }, [selectedCharacterId]);

  const extractIdFromUrl = (url) => {
    const parts = url.split('/');
    return parts[parts.length - 1];
  };

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
                        <button onClick={() => setSelectedCharacterId(extractIdFromUrl(charact.appearances))}>Show Games</button>
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
      {selectedCharacterId && (
        <div>
          <h2>Games for Character ID: {selectedCharacterId}</h2>
          <ul>
            {games.length > 0 ? (
              games.map(game => (
                <li key={game.id}>{game.name}</li>
              ))
            ) : (
              <p>No games found for this character.</p>
            )}
          </ul>
        </div>
      )}
    </>
  );
}