import React, { useEffect, useState } from 'react'

const RolesPage = () => {
  
  const [allRoles, setAllRoles] = useState([]);

  useEffect(() => {
    fetch('https://esports-api-wesley.herokuapp.com/roles')
    .then(r => r.json())
    .then(data => setAllRoles(data))
  }, []);

  return (
    <div>
      <h2 className="gaming-title">Gaming Roles</h2>
      {allRoles.map((role) => (
        <section key={role.id} className="amTheCaptainNow">
          <div className="myStory">
              <div className="myImg">
                  <img src={role.image_url} alt="My Picture" />
              </div>
              <div className="aboutText">
                  <h5>{role.role_name}</h5>
                  <p> {role.description} </p>
              </div>
          </div>
        </section>
      ))}
    </div>
  )
}

export default RolesPage