import React, { useEffect, useState } from 'react'
import TeamDetails from '../components/TeamDetails';

const TeamsPage = () => {

  const [allTeams, setAllTeams] = useState([])

    useEffect(() => {
        fetch('https://esports-api-wesley.herokuapp.com/teams')
        .then(r => r.json())
        .then(data => setAllTeams(data))
    }, []);

    function deleteTeam(id){
      fetch(`https://esports-api-wesley.herokuapp.com/teams/${id}`,{
          method: "DELETE",
      })
      .then(r => r.json())
      .then(() => {
          const goThru = allTeams.filter((team) => team.id !== id)
              setAllTeams(goThru)
          })
    }

  return (
    <>
    <TeamDetails allTeams={allTeams} deleteTeam={deleteTeam}/>
    </>
  )
}

export default TeamsPage