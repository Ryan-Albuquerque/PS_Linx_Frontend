import React, { useEffect, useState } from 'react'

import api from '../../services/api'

import './style.css'

export default function TotalHits() {

    const [hits, setHits] = useState(0)

    useEffect(() => {
        const getHits = async () => { 
            const {data} = await api.get('/api/hits')
            setHits(data.totalHits)
        }
        getHits()
    },[])


    return (
        <div className="totalHits">
            <div id="totalHitsTitle">
                <h2>Hits</h2>
            </div>
            <div id="totalHitsBox">
                <h3>{hits}</h3>
            </div>
            <div id="totalHitsDescription">
                <p>Cliques em links</p>
            </div>
        </div>
    )
}
