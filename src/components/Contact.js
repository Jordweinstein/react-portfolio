import React from 'react'
import { useState } from 'react'
import supabase from '../config/supabaseClient.js'

import './styles/Contact.css'

export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [formError, setFormError] = useState(null)
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !message) {
            setFormError('Please fill in all the fields correctly');
            alert(formError);
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

    const handleDownload =  () => {
        const element = document.createElement("a");
        element.href = '/Resume.pdf';
        element.download = "Jordan-Weinstein-Resume.pdf";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }

    return (
        <>
        <div className = "contact-container" id = "contact">
            <div className="contact-container2">
                    <h3>Contact Me</h3>
                    <h5>jweins@unc.edu</h5>
                    <button className = "btn" onClick={handleDownload} value = "download">Download Resume </button>
            </div>
            <div className>
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
                        rows="4" 
                        placeholder='Enter message'
                    />
                    <button type='submit'>send</button>
                </form>
            </div>
        </div>
        </>
    )
}