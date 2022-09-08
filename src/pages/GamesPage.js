import React, { useEffect, useState } from 'react'
import GamesDetails from '../components/GamesDetails';

const GamesPage = () => {

  const [allGames, setAllGames] = useState([])

    useEffect(() => {
        fetch('https://esports-api-wesley.herokuapp.com/games')
        .then(r => r.json())
        .then(data => setAllGames(data))
    }, []);

    console.log(allGames)

  return (
    <>
    <GamesDetails totalGames={allGames}/>
    </>
  )
}

export default GamesPage