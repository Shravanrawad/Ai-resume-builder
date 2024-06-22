import React from 'react'
import logo from '../../logo/logo.svg'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { UserButton, useUser } from '@clerk/clerk-react'

function Header() {

    const { user, isSignedIn } = useUser();

    return (
        <div className='flex justify-between items-center p-3 px-5 shadow-md'>

            <div className='flex justify-center items-center gap-1'>
                <img src={logo} height={70} width={70} alt="" />
                <h2 className='font-semibold'>ProResume</h2>
            </div>

            {isSignedIn ?
                <div className='flex justify-center items-center gap-2'>
                    <Link to={'/Dashboard'}>
                        <Button variant='outline'>Dashboard</Button>
                    </Link>
                    <UserButton />
                </div>
                :
                <Link to={'/auth/sign-in'}>
                    <Button>Get Started</Button>
                </Link>
            }
        </div>
    )
}

export default Header