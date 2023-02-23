import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp as regThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faThumbsUp as solidThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { useAuthContext } from "@asgardeo/auth-react";
// import PetStoreNav from '../../App.js';

// Component to render the item list
const PetItemList = () => {
  const [productList, setProductList] = useState([]);
  const { httpRequest } = useAuthContext();

  useEffect(() => {
    const requestConfig = {
      headers: {
        accept: "application/json",
      },
      method: "GET",
      url: "http://localhost:9000/products",
    };
    httpRequest(requestConfig).then((response) => {
      setProductList(response.data);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  const itemPrice = {
    fontSize: "20px",
    fontWeight: "bold",
    marginRight: "50px",
  };
  return (
    <>
      <Container>
        <Row>
          {productList.map((product, index) => (
            <Col>
              <img
                src={require(`./item-${index + 1}.png`)}
                width="300"
                alt={product.name}
              />
              <br />
              <h4>{product.name}</h4>
              <p>{product.description}</p>
              <p>
                <b>Includes: </b> {product.includes}
                <br />
                <b>Intended For:</b> {product.intendedFor}
                <br />
                <b>Color:</b> {product.color}
                <br />
                <b>Material: </b> {product.material}
                <br />
              </p>
              <br />
              <span style={itemPrice}>$ {product.price}</span>{" "}
              <Button variant="danger">Add to cart</Button>
              <br />
              <br />
              Follow updates &nbsp;&nbsp;
              <FontAwesomeIcon icon={regThumbsUp} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default function Catalog() {
  const { state } = useAuthContext();

  useEffect(() => {
    document.title = "PetStore Catalog";
  }, [state.isAuthenticated]);

  return (
    <>
      <PetItemList />
    </>
  );
}
