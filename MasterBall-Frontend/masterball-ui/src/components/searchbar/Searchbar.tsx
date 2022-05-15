import React from 'react'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import styled from '@emotion/styled/types/base';

function Searchbar() {

    // const StyledTextField = styled(TextField)({
    //     '& label.Mui-focused': {
    //         color: 'green',
    //     },
    //     '& .MuiInput-underline:after': {
    //         borderBottomColor: 'green',
    //     },
    //     '& .MuiOutlinedInput-root': {
    //         '& fieldset': {
    //         borderColor: 'red',
    //         },
    //         '&:hover fieldset': {
    //         borderColor: 'yellow',
    //         },
    //         '&.Mui-focused fieldset': {
    //         borderColor: 'green',
    //         },
    //     },
    // })


    return (
        <div className="searchbar">
        <Autocomplete
            freeSolo
            options={["Option 1", "Option 2"]}
            renderInput={(params) => <TextField {...params} label="search for a set..." sx={{ input: { color: 'white' } }} focused/>}
        />
        </div>
    )
}

export default Searchbar