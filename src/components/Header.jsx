import React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { ShoppingBasket } from '@mui/icons-material';
import Badge from '@mui/material/Badge';

const Header = ({handleCard, orderLen}) => {
	return (
		<AppBar position='static'>
			<Toolbar>
				<Typography
					variant='h6'
					component="span"
					style={{flexGrow: 1}}
				>
					Phillip Miller
				</Typography>
				<IconButton
					color="inherit"
					onClick={handleCard}
				>   <Badge
					color='secondary'
					badgeContent={orderLen}
				>
					<ShoppingBasket />
				</Badge>
				</IconButton>
			</Toolbar>
		</AppBar>
	);
};

export default Header;