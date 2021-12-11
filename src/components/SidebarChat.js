import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import './SidebarChat.css'


const SidebarChat = ({messages}) => {

const [seed,setSeed]= useState("")


useEffect(() => {
   setSeed(Math.floor(Math.random() * 5000))
    }, [])

    return (
        <div className='sidebarChat'>
            <Avatar src={`https://avatars.dicebar.com/api/human/b${seed}.svg`}/>
            <div className='sidebarChat_info'>
             
             <h3>Fun Pandrom</h3>
             <p>
             {messages[messages.length -1]?.message}
             </p>
            </div>
        </div>
    )
}

export default SidebarChat
