import {
    Button,
    Icon,
    Grid,
    Radio,
    RadioGroup,
    FormControlLabel,
    Checkbox,
} from '@mui/material'
import { styled } from '@mui/system'
import { Span } from 'app/components/Typography'
import React, { useState, useEffect } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
// import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { DatePicker } from '@mui/lab'

const processData = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
]

const dataSetData = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
]

const TextField = styled(TextValidator)(() => ({
    width: '100%',
    marginBottom: '16px',
}))

const Input = styled('input')({
    display: 'none',
  });

const SimpleForm = () => {
    const [state, setState] = useState({
        date: new Date(),
    })

    useEffect(() => {
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            console.log(value)

            if (value !== state.password) {
                return false
            }
            return true
        })
        return () => ValidatorForm.removeValidationRule('isPasswordMatch')
    }, [state.password])

    const handleSubmit = (event) => {
        // console.log("submitted");
        // console.log(event);
    }

    const handleChange = (event) => {
        event.persist()
        setState({
            ...state,
            [event.target.name]: event.target.value,
        })
    }

    const handleDateChange = (date) => {
        setState({ ...state, date })
    }

    const {
        username,
        mobile,
        date,
    } = state

    return (
        <div>
            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                <Grid container spacing={6}>
                    <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                        <TextField
                            type="text"
                            name="Name"
                            id="standard-basic"
                            onChange={handleChange}
                            value={username || ''}
                            validators={[
                                'required',
                                'minStringLength: 4',
                                'maxStringLength: 9',
                            ]}
                            label="Name (Min length 4, Max length 9)"
                            errorMessages={['this field is required']}
                        />

                        <Autocomplete
                            disablePortal
                            id="Metric Type"
                            options={processData}
                            sx={{ width: "100%" }}
                            renderInput={(params) => <TextField {...params}  label="Metric Type"/>}
                        />
                    
                        
                    </Grid>

                    <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Description"
                            onChange={handleChange}
                            type="text"
                            name="Description"
                            value={mobile || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                    
                            <label htmlFor="contained-button-file">
                                <Input accept="image/*" id="contained-button-file" multiple type="file" />
                                <Button variant="contained" component="span">
                                    Upload
                                </Button>
                            </label>

                    </Grid>
                </Grid>

                
                <Button color="primary" variant="contained" type="submit">
                    <Span sx={{textTransform: 'capitalize' }}>
                        Create
                    </Span>
                </Button>
            </ValidatorForm>
        </div>
    )
}

export default SimpleForm
