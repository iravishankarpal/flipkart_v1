import { Button, Form } from "react-bootstrap";
// import Rating from "./Rating";
import { useDispatch } from "react-redux/es/exports";

const Filters = () => {
  //   const {
  //     dispatch,
  //     productState: { byStock, byFastDelivery, sort, byRating },
  //   } = CartState();

  // make state for rating
  //   const cart = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
          onChange={() =>
            dispatch({
              type: "SORT_BY_PRICE",
              payload: "lowToHigh",
            })
          }
          //   checked={sort === "lowToHigh" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
          onChange={() =>
            dispatch({
              type: "SORT_BY_PRICE",
              payload: "highToLow",
            })
          }
          //   checked={sort === "highToLow" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include Out of Stock"
          name="group1"
          type="checkbox"
          id={`inline-3`}
          onChange={() =>
            dispatch({
              type: "FILTER_BY_STOCK",
            })
          }
          //   checked={byStock}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast Delivery Only"
          name="group1"
          type="checkbox"
          id={`inline-4`}
          onChange={() =>
            dispatch({
              type: "FILTER_BY_DELIVERY",
            })
          }
          //   checked={byFastDelivery}
        />
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>Rating: </label>
        {/* <Rating
          rating={byRating}
          onClick={(i) =>
            dispatch({
              type: "FILTER_BY_RATING",
              payload: i + 1,
            })
          }
          style={{ cursor: "pointer" }}
        /> */}
      </span>
      <Button
        variant="light"
        onClick={() =>
          dispatch({
            type: "CLEAR_FILTERS",
          })
        }
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default Filters;
