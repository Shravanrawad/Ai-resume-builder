import { SignIn } from '@clerk/clerk-react'
import React from 'react'

function Signin() {
  return (
    <div className='flex justify-center my-16 items-center'>
        <SignIn/>
    </div>
  )
}

export default Signin