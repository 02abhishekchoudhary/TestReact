import React, { useEffect, useState } from "react";

const FetchApi = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <ul>
        {users.map((list, index) => (
          <li key={index}>
            {list.id} | {list.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchApi;
