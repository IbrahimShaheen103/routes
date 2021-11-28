import { useEffect, useState } from "react";
import Head from "../Components/Head";
import "./Styles/list.css";
import { Link } from "react-router-dom";
import axios from "axios";

const List = () => {
  const [users, setUsers] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users/";
  useEffect(() => {
    axios.get(url).then((res) => setUsers(res.data));
  }, []);
  const handleDelete = (id) => {
    axios.delete(url + id).then(() => {
      const user = users.filter((item) => item.id !== id);
      setUsers(user);
    });
  };
  return (
    <>
      <Head title="Lists" />
      <div>
        <h1>All Lists</h1>
        {users.map((user) => (
          <div className="single" key={user.id}>
            <Link to={"/" + user.id}>
              <h3>{user.name}</h3>
            </Link>
            <button onClick={() => handleDelete(user.id)} className="btnn">
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
