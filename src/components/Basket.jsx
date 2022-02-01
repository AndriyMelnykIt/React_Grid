import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { ShoppingBasket } from '@mui/icons-material';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import BasketItem from './BasketItem';
import Typography from '@mui/material/Typography';

const Basket = (props) => {
	const {order = [], removeFromOrder, cartOpen, closeCart = Function.prototype} = props;

	return (
		<Drawer
			anchor='right'
			open={cartOpen}
			onClose={closeCart}
		>
			<List style={{width: '250px'}}>
				<ListItem>
					<ListItemIcon>
						<ShoppingBasket />
					</ListItemIcon>
					<ListItemText primary='Корзина' />
				</ListItem>
				<Divider />

				{!order.length ? (
					<ListItem>Корзина пуста</ListItem>
				) : (
					<>
					{order.map ((item) => (
						<BasketItem key={item.name} removeFromOrder={removeFromOrder}{...item} />
					))}
					< Divider />
					<ListItem>
						<Typography style={{fontWeight: 700}}>
							Загальна вартість:{' '}
							{order.reduce((acc, item) => {
								return acc + item.price * item.quantity;
							}, 0)}{' '}
							uah.
						</Typography>
					</ListItem>
					</>
					)}
			</List>
		</Drawer>
	);
};

export default Basket;