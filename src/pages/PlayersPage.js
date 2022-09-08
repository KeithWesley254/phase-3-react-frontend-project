import React, { useEffect, useState } from 'react'
import PlayerDetails from '../components/PlayerDetails';

const PlayersPage = () => {

  const [allPlayers, setAllPlayers] = useState([])

    useEffect(() => {
        fetch('https://esports-api-wesley.herokuapp.com/players')
        .then(r => r.json())
        .then(data => setAllPlayers(data))
    }, []);

    console.log(allPlayers)

    function deletePlayer(id){
      fetch(`https://esports-api-wesley.herokuapp.com/players/${id}`,{
          method: "DELETE",
      })
      .then(r => r.json())
      .then(() => {
          const goThru = allPlayers.filter((player) => player.id !== id)
              setAllPlayers(goThru)
          })
    }

  return (
    <>
    <PlayerDetails totalPlayers={allPlayers} deletePlayer={deletePlayer}/>
    </>
  )
}

export default PlayersPage