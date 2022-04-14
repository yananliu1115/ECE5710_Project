import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'
import { authRoles } from '../../auth/authRoles'

const EmptyPage = Loadable(lazy(() => import('./EmptyPage')))
const ProjectBoard = Loadable(lazy(() => import('./ProjectBoard/ProjectBoard'))) 
const DatasetBoard = Loadable(lazy(() => import('./DatasetBoard/DatasetBoard')))
const ModelBoard = Loadable(lazy(() => import('./ModelBoard/ModelBoard')))
const MetricBoard = Loadable(lazy(() => import('./MetricBoard/MetricBoard')))



const boardRoutes = [
 
    {
        path: '/board/project',
        element: <ProjectBoard />,
        auth: authRoles.admin,
    },
    {
        path: '/board/dataset',
        element: <DatasetBoard />,
        auth: authRoles.admin,
    },
    {
        path: '/board/process',
        element: <EmptyPage />,
        auth: authRoles.admin,
    },
    {
        path: '/board/model',
        element: <ModelBoard />,
        auth: authRoles.admin,
    },
    {
        path: '/board/metric',
        element: <MetricBoard />,
        auth: authRoles.admin,
    },
]

export default boardRoutes
