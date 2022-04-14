import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'
import { authRoles } from '../../auth/authRoles'

const EmptyPage = Loadable(lazy(() => import('./EmptyPage')))

const aboutRoutes = [
 
    {
        path: '/about',
        element: <EmptyPage />,
        auth: authRoles.admin,
    },
]

export default aboutRoutes
