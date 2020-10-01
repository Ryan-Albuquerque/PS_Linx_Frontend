import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './style.css'

import api from '../../services/api'

function Convert() {

    const [url, setUrl] = useState('')
    const [shortUrl, setShortUrl] = useState('')
    const [copied, setCopied] = useState(false)

    useEffect(() => {
        setShortUrl('');
        setUrl('')
    },[])

    const validatorLink = async () =>{
        try {
            const response = await api.post("/api/create", {url:url})
            setShortUrl(response.data.shortUrl)
            return toast.success("Converted with sucessfull", {autoClose:2000})
        } catch (error) {
            return toast.error(error.response.data.message, {autoClose:2000})    
        }


    }
    const handleLink = async (e) =>{
        e.preventDefault()

        validatorLink()
    }

    const handleCopy = async (e) =>{
        e.preventDefault()

        navigator.clipboard.writeText(shortUrl)

        setCopied(true)

        return toast.success("Copied to Clipboard", {autoClose:2000})
    }
    return (
        <>
            <ToastContainer />
                <div className="shortnerBG">
                    <div className="shortnerText">
                        <h3 id="shortnerTitle">Encurte seus Links.</h3>
                        <p id="shortnerDescription">
                            Links são longos. Encurte os links que você deseja compartilhar,<br/>
                            e acompanhe enquanto viajam através da Internet.
                        </p>
                        <div className="shortnerInputs">
                            <input type="text" placeholder="Cole o seu link aqui" value={url} onChange={e=> setUrl(e.target.value)}/>
                            <button type="submit" id="shortUrl" onClick={handleLink}>Encurtar</button>         
                        </div>
                        <div className="generatedUrl">
                            {shortUrl?
                                <>
                                    <a target="blank" href={shortUrl}>{shortUrl}</a>
                                    <button type="submit" id="copyToClipboard" style={copied?{backgroundColor:'green'}:{backgroundColor:'gray'}} onClick={handleCopy}>{copied?'Copied':'Copy'}</button>   
                                </>
                            :null}
                        </div>
                    </div>
                </div>
            </>
    )
}

export default Convert