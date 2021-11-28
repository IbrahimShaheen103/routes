import Head from "../Components/Head";
import React, { Component } from 'react';
import axios from "axios";

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userId:'',
            title:'',
            body:'',
         }
    }
    changeHandler=(e)=>{
        
        this.setState({[e.target.name]:e.target.value});
    }
    submitHandler=(e)=>{
        e.preventDefault();
        console.log(this.state);
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(res=>{
            console.log(res.data)
        })
    }
    render() { 
        const {userId,title,body}=this.state;
        return ( 
            <>
            <Head title='Create' />
            <div className='form-div'>
                <form onSubmit={this.submitHandler}>
                <label>ID : </label>
                <input type="text" name='userId'  placeholder="ID" value={userId} onChange={this.changeHandler}/>
                <label>Title : </label>
                <input type="text" name='title'  placeholder="Title.." value={title} onChange={this.changeHandler} />
                <label >Body : </label>
                <textarea  name='body' placeholder="Body.." value={body} onChange={this.changeHandler} />
                <input type="submit" value="Submit" />
                </form>
            </div> 
            </>
         );
    }
}
 
export default Create;
