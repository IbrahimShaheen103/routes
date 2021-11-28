import axios from "axios";
import { useEffect, useState } from "react";


const Details = (props) => {
    const [post, setPost] = useState([]);
    let id = props.match.params.details_id;
    useEffect(() => {
           axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(res => setPost(res.data));
       
    }, [id])
    return ( 
        <div>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        </div>
     );
}

export default Details;