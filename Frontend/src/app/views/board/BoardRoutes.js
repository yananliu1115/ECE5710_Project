import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'
import { authRoles } from '../../auth/authRoles'

const EmptyPage = Loadable(lazy(() => import('./EmptyPage')))


const boardRoutes = [
    {
        path: '/student',
        element: < EmptyPage/>,
        auth: authRoles.student,
    },
]

export default boardRoutes
