import { Card, Button } from "react-bootstrap";
// import Rating from "./Rating";
import { useDispatch, useSelector } from "react-redux/es/exports";
const SingleProduct = ({ prod }) => {
  //   console.log("prod :", prod, prod.price);
  const cart = useSelector((state) => state.cartReducer);
  //   console.log("cart :", cart);
  const dispatch = useDispatch();

  return (
    <div className="products">
      <Card>
        <Card.Img
          variant="top"
          src={prod.image}
          alt={prod.name}
          style={{ maxHeight: 300, maxWidth: "auto" }}
        />
        <Card.Body>
          <Card.Title>{prod.title}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>₹ {prod.price}</span>
          </Card.Subtitle>
          {cart.some((p) => p.id === prod.id) ? (
            <Button
              variant="danger"
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                })
              }
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: prod,
                })
              }
            >
              Add to Cart
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
