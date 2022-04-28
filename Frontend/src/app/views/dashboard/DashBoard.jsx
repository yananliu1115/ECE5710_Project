import React, { Fragment } from 'react'
import StudentBoard from './StudentBoard'
import AdminBoard from './AdminBoard'
import useAuth from 'app/hooks/useAuth'

const DashBoard = () => {

    const { user} = useAuth()
    
    // console.log(user)

    return (
        
        <>
            {user.role === 'student' ? 
            <StudentBoard /> : 
            <AdminBoard/>}
        </>
    )
}

export default DashBoard
