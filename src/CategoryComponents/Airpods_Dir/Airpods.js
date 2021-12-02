import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useStateValue } from "../../StateProvider.js";
import "./Airpods.css";
import CurrencyFormat from "react-currency-format";
import { v4 as uuidv4 } from "uuid";

export default function Airpods({ title, image, price, rating, category }) {
  const [{ basket }, dispatch] = useStateValue();
  // console.log("this is the basket >>> ", basket);

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: uuidv4(),
        title: title,
        image: image,
        price: price,
        rating: rating,
        category: category,
      },
    });
  };

  return (
    <Card className="airpods">
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Airpods"
          height="250"
          image={image}
          title="Airpods"
        />
        <CardContent>
          {/* <Typography
            gutterBottom
            variant="h6"
            component="p"
            style={{ textAlign: "center" }}
          >
            Category: {category}
          </Typography> */}
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{ textAlign: "center" }}
          >
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
            backgroundColor: "#ecca08",
            padding: "5px 20px",
            fontSize: "12px",
            color: "#fff",
            textTransform: "lowercase",
          }}
          size="small"
          color="primary"
          onClick={addToBasket}
        >
          ADD TO BASKET
        </Button>
      </CardActions>
    </Card>
  );
}
