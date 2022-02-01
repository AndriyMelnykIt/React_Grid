import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Close } from '@mui/icons-material';

const BasketItem = ({removeFromOrder, id, name, price, quantity}) => {
    return (
        <ListItem>
	        <Typography>
		        {name} {price}uah x{quantity}
	        </Typography>
            <IconButton
                onClick={() => removeFromOrder(id)}
            >
                <Close />
            </IconButton>
        </ListItem>
    );
};

export default BasketItem;