import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import {
  Badge,
  Button,
  Container,
  Dropdown,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
const Linkto = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    color: white;
    font-style: normal;
    text-decoration: none;
  }
`;
const Header = () => {
  const cart = useSelector((state) => state.cartReducer);
  console.log("cart form header :", cart);
  const dispatch = useDispatch();
  return (
    <Navbar bg="primary" variant="dark" style={{ height: 80 }}>
      <Container>
        <Nav>
          <Dropdown>
            <Dropdown.Toggle variant="primary">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu className="DeshBordCart" style={{ minWidth: 370 }}>
              {cart.length > 0 ? (
                <>
                  {cart.map((prod) => (
                    <span className="cartitem" key={prod.id}>
                      <img
                        src={prod.image}
                        className="cartItemImg"
                        alt={prod.name}
                      />
                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <span>₹ {prod.price}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        }
                      />
                    </span>
                  ))}
                  <Link to="/cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </Link>
                </>
              ) : (
                <span className="EmptyCart">Cart is Empty!</span>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>

        {useLocation().pathname.split("/")[1] !== "cart" && (
          <Navbar.Text className="search">
            <FormControl
              style={{ width: 500 }}
              type="search"
              placeholder="Search a product..."
              className="m-auto"
              aria-label="Search"
              onChange={(e) => {
                dispatch({
                  type: "FILTER_BY_SEARCH",
                  payload: e.target.value,
                });
              }}
            />
          </Navbar.Text>
        )}
        <Navbar.Brand>
          <Linkto to="/">Shopping Cart</Linkto>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
