import React from 'react'
import './Sidebar.css'
import {Avatar,IconButton} from '@material-ui/core'
import {SearchOutlined} from '@material-ui/icons'
import DonutLargeIcon  from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import  MoreVertIcon  from '@material-ui/icons/MoreVert'
import SidebarChat from './SidebarChat'
import { useStateValue } from './StateProvider'


const Sidebar = ({messages}) => {

    const [{user}, dispatch] = useStateValue()
    return (
        <div className='sidebar'>
            <div className='sidebar_header'>
            <Avatar src={user?.photoURL}/>
            <div className='sidebar_headerRight'>
             <IconButton>
                 <DonutLargeIcon />
             </IconButton>
             <IconButton>
                 <ChatIcon />
             </IconButton>
             <IconButton>
                 <MoreVertIcon />
             </IconButton>
              </div>
            </div>
            <div className='sidebar_search'>
                <div className='sidebar_searchContainer'>
                    <SearchOutlined/>
                    <input type="text" placeholder='Search or start new chat'/>
                </div>
            </div>
            <div className='sidebar_chats'>
                <SidebarChat messages={messages}/>
            </div>
            
        </div>
    )
}

export default Sidebar
