import { useEffect } from "react";
import { Link ,useHistory} from "react-router-dom";
import Head from "../Components/Head";


const NotFound = () => {
    const router =useHistory();
    useEffect(()=>{
        setTimeout(()=>{
            router.push('/')
        },3000)
    },[router])
    return (
        <>
        <Head title='Not Found' />
        <div className='not-found'>
            <h1>Ooops...</h1>
            <h2>That page cannot be found :(</h2>
            <p>Go back to the <Link to='/'>Homepage</Link></p>
        </div>
        </>
    );
}

export default NotFound;