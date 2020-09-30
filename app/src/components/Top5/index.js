import React, { useEffect, useState } from 'react'

import api from '../../services/api'

import './style.css'

export default function Top5() {

    const [top5, setTop5] = useState()

    useEffect(() => {
        const getTop = async()=>{
            const response = await api.get('/api/top5?total=5')
            setTop5(response.data)
        }
        getTop()
    }, [])


    return (
        <div className="Top5">
            <div id="top5title">
                <h2>Top 5</h2>
            </div>
            <table id="top5table">
                <tbody>
                    {top5?top5.map((e) => (
                        
                        <tr key={e._id}>
                            <td><a target="blank" href={e.shortUrl}>{e.shortUrl}</a></td>
                            <td id="numberHits">{e.hits}</td>
                        </tr>
                    )):null}
                </tbody>
            </table>
        </div>
    )
}
