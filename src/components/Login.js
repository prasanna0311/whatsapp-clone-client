import React, { useState } from 'react'
import {Button} from '@material-ui/core'
import './Login.css'
import {auth,provider} from '../firebase'
import { actionTypes } from './reducer'
import { useStateValue } from './StateProvider'



const Login = () => {
    const [{}, dispatch] = useStateValue()
    const siginIn = () => {

   auth.signInWithPopup(provider)
   .then(result => {
       dispatch ({
           type:actionTypes.SET_USER,
           user: result.user
       })
   })
    .catch(error => alert(error.message))
    }


    return (
        <div className='login'>
        <div className='login_container'>
          <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/800px-WhatsApp.svg.png" alt ='whatsapp'/>
          <div className='login_text'>
              <h1>Sign in to Whatsapp</h1>
          </div>
         <Button onClick={siginIn}>SignIn with Google</Button>
        </div>
        </div>
    )
}


export default Login