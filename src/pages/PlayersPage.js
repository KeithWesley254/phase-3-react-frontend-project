import React, { useEffect, useState } from 'react'
import PlayerDetails from '../components/PlayerDetails';
import PlayersForm from '../components/PlayersForm';

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

    function handlePosting(data){
      setAllPlayers([...allPlayers, data])
    }

  return (
    <>
    <PlayerDetails totalPlayers={allPlayers} deletePlayer={deletePlayer}/>
    <PlayersForm handlePosting={handlePosting}/>
    </>
  )
}

export default PlayersPage