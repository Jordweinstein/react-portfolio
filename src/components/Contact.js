import React from 'react'
import { useState } from 'react'
import supabase from '../config/supabaseClient.js'

export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [formError, setFormError] = useState(null)
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !message) {
            setFormError('Please fill in all the fields correctly');
            return;
        }

        const {data, error} = await supabase
            .from('contact_info')
            .insert([{ name, email, message }])
            .select();
    if (error){
        console.log(error);
        setFormError('unexpected error');
    } if (data)
        console.log(data);
        setFormError('Message sent.');
        setName('');
        setEmail('');
        setMessage('');
    };

    // const handleDownload = () => { 
    //     const fileContent = { Resume }; 
    //     const blob = new Blob([fileContent], { type: 'text/plain;charset=utf-8' }); 
    //     saveAs(blob, 'download.txt'); 
    // };

    // const DownloadButton = () => { 
    //     return ( <button onClick={handleDownload}> Download File </button> ); 
    // };

    return (
        <>
        <div className = "container" id = "contact">
            <div className="container2">
                    <h2>Contact Me</h2>
                    <h4>jweins@unc.edu</h4>
                    <a className = "btn" href="Resume.pdf" download = "Resume.pdf">Download Resume</a>
            </div>
            <div className = "container2">
                <form onSubmit={(e)=>handleSubmit(e)}>
                    <input 
                        onChange={(e)=>setName(e.target.value) }
                        id="name" 
                        value={name} 
                        type="text" 
                        name="name" 
                        placeholder='Enter name'
                    />
                    <input 
                        onChange={(e)=> setEmail(e.target.value)} 
                        id="email" 
                        value={email} 
                        type="email" 
                        name="email" 
                        placeholder='Enter email'
                    />
                    <textarea 
                        onChange={(e)=>setMessage(e.target.value)} 
                        id="message" 
                        value={message} 
                        name="message" 
                        cols="30" 
                        rows="10" 
                        placeholder='Enter message'
                    />
                    <button type='submit'>send</button>
                    {formError}
                </form>
            </div>
        </div>
        </>
    )
}