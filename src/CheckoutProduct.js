import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";
// import Delete from "@material-ui/icons/Delete";

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    marginBottom: 20,
  },
});

export default function CheckoutProduct({
  id,
  title,
  image,
  price,
  rating,
  category,
}) {
  const classes = useStyles();
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="250"
          image={image}
          title={category}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="h2"
            style={{ textAlign: "center", color: "gray" }}
          >
            {category}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {title}:
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <CurrencyFormat
            renderText={(value) => (
              <div>
                <p>{value}</p>
              </div>
            )}
            decimalScale={2}
            value={price}
            displayType={"text"}
            thousandSeparator
            prefix={"$"}
          />
        </Button>
        <Button size="small" color="primary">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </Button>
        <Button
          style={{
            borderRadius: 5,
            backgroundColor: "red",
            padding: "5px 20px",
            fontSize: "16px",
            color: "#fff",
            textTransform: "lowercase",
          }}
          size="small"
          color="primary"
          onClick={removeFromBasket}
        >
          Remove Product
        </Button>
      </CardActions>
    </Card>
  );
}
