import React, { useState } from 'react';
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "column",
    },

    cardMedia: {
        paddingTop: "56.25%",
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
    logo: {
        maxWidth: 160,
    },
}));

function Item({ data, addToCart }) {
    const classes = useStyles();
    const handleClick = (e) => {
        e.preventDefault()
        const item = e.currentTarget.getAttribute('data-add');
        const price = e.currentTarget.getAttribute('data-price');
        addToCart({ "item": item, "price": price })
    }
    return (
        <>
            {data ? (
                < main >
                    <Container className={classes.cardGrid} maxWidth="md">
                        <Grid container spacing={3}>
                            {data.feed.entry.map((product) => (
                                < Grid item key={product.gsx$name.$t} xs={12} sm={6} md={4} >
                                    <Card style={{ height: '100%' }} >
                                        <CardMedia
                                            className={classes.cardMedia}
                                            image={product.link[0].href}
                                            title={product.gsx$name.$t}
                                        />
                                        <CardContent className={classes.cardContent}>
                                            <Typography gutterBottom variant="h6" component="h3">
                                                {product.gsx$name.$t}
                                            </Typography>
                                            <Typography>{product.gsx$description.$t}</Typography>
                                            <Typography>{'$' + product.gsx$priceincents.$t / 100}</Typography>
                                        </CardContent>
                                        <CardActions className={classes.card}>
                                            <Button
                                                className={classes.buyBtn}
                                                style={{ backgroundColor: "#FFE000" }}
                                                onClick={handleClick}
                                                data-add={product.gsx$name.$t}
                                                data-price={product.gsx$priceincents.$t / 100}
                                                disabled={product.gsx$availability.$t === 'in_stock' ? false : true}
                                            >{product.gsx$availability.$t === 'in_stock' ? 'Buy' : 'Out of stock'} </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </main >
            ) : null
            }
        </>
    )
}
export default Item;
