import React from 'react';
import "./index.css";


const UserData = ({users}) => {
  return (
    <>
      {
        users.map((user) => {
          const { name, id, email } = user;
          const {city, street, zipcode} = user.address;
          return (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{email}</td>
              <td>{street}, {city}, {" "} { zipcode}</td>
            </tr>
          )
        })
      }
    </>
  )
}

export default UserData