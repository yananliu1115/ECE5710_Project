import React, { Fragment } from 'react'
import SimpleForm from './SimpleForm'
import PaginationTable from './PaginationTable'
import { Breadcrumb, SimpleCard } from 'app/components'
import { Grid, Card } from '@mui/material'
import { styled, useTheme, Box} from '@mui/system'

const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '16px',
        },
    },
}))


const ProjectBoard = () => {

    return (
        <>
            <Container>
                <div className="breadcrumb">
                    <Breadcrumb
                        routeSegments={[
                            { name: 'Board', path: '/board' },
                            { name: 'Project' },
                        ]}
                    />
                </div>

                <SimpleCard title="Creat Project">
                    <SimpleForm />
                </SimpleCard>

                <Box py="12px" />


                <SimpleCard title="Project List">
                    <PaginationTable />
                </SimpleCard>

            </Container>
        </> 

       
    )
}

export default ProjectBoard
