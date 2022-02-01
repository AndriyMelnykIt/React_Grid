import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const GoodsItem = (props) => {
	const {name, price, poster, setOrder} = props;

	return (
		<Grid item xs={12} md={4}>
			<Card style={{height: '100%'}}>
				<CardMedia
					image={poster}
					alt={name}
					title={name}
					component='img'
					style={{height: '140px'}}
				/>
				<CardContent>
					<Typography variand='h6'>{name}</Typography>
					<Typography variand='h6'>Ціна:{price} uah.</Typography>
				</CardContent>
				<CardActions>
					<Button
						variant='contained'
						onClick={() =>
							setOrder ({
								id: props.id,
								name: props.name,
								price: props.price,
							})
						}
					>
						Купить
					</Button>
				</CardActions>
			</Card>
		</Grid>
	);
};

export default GoodsItem;