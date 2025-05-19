import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Data() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/users').then(res => {
      setUsers(res.data);
    });
  }, []);

  return (
    <div>
      <h1>User Data</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Email</th><th>About Me</th><th>Birthdate</th><th>Address</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td>{u.email}</td>
              <td>{u.aboutMe}</td>
              <td>{u.birthdate}</td>
              <td>{u.addressStreet}, {u.addressCity}, {u.addressState}, {u.addressZip}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
