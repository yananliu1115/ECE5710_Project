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


const MetricBoard = () => {

    return (
        <>
            <Container>
                <div className="breadcrumb">
                    <Breadcrumb
                        routeSegments={[
                            { name: 'Board', path: '/board' },
                            { name: 'Metric' },
                        ]}
                    />
                </div>

                <SimpleCard title="Creat Metric">
                    <SimpleForm />
                </SimpleCard>

                <Box py="12px" />


                <SimpleCard title="Metrics">
                    <PaginationTable />
                </SimpleCard>

            </Container>
        </> 

       
    )
}

export default MetricBoard
