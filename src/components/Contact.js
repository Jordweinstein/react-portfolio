import React from 'react'
import { useState } from 'react'
import Axios from 'axios'

export default function Contact() {
    const url = "";
    const [data, setData] = useState({name: "", email: "", message: ""})
    function handle(e) {
        const newData = {...data}
        newData[e.target.id] = newData[e.target.value]
        setData(newData)
        console.log(newData)
    }
    function submit(e){
        e.preventDefault();
        Axios.post(url, {
            name: data.name,
            email: data.email,
            message: data.message
        })
        .then(res => {
            console.log(res.data)
        })
    }
    return (
        <>
        <div className = "container" id = "contact">
            <div className="container2">
                    <h2>Contact Me</h2>
                    <h4>jweins@unc.edu</h4>
                    </div>
                <div className = "container2">
                    <form onSubmit={(e)=>submit(e)}>
                        <input onChange={(e)=>handle(e)} id="name" value={data.name} type="text" name="name" placeholder='Enter name'/>
                        <input onChange={(e)=>handle(e)} id="email" value={data.email} type="email" name="email" placeholder='Enter email'/>
                        <textarea onChange={(e)=>handle(e)} id="message" value={data.message} name="message" cols="30" rows="10" placeholder='Enter message'/>
                        <button type='submit'>send</button>
                    </form>
                </div>
        </div>
        </>
    )
}