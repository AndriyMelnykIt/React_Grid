import React from 'react';
import TextField from '@mui/material/TextField';

const Search = (props) => {
    const { onChange, value } = props;

    return <TextField
	    label='search'
	    variant='standard'
	    type='search'
	    value={value}
	    onChange={onChange}
	    style={{
	    	marginBottom: '2rem'
	    }}
    />;
};

export default Search;