
import { Link } from "react-router-dom";
import Head from "../Components/Head";

import './Styles/home.css'

export default function Home() {
  return (
    <>
     <Head title='Home' />
    <div>
  
     <h1 className='title'>Home</h1>
     <p className='text' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
     <p className='text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
    <Link to='/list' className='btn'>See Listing</Link> 

    </div>
    </>
  )
}
