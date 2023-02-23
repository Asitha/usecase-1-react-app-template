import React, { useState, useEffect } from "react";

import { default as config } from "../../config.json";
import { fetchGQLData } from "../../gql";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp as regThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { useAuthContext } from "@asgardeo/auth-react";

// Component to render the item list
const PetItemList = () => {
  const [productList, setProductList] = useState([]);
  const { getAccessToken } = useAuthContext();

  useEffect(() => {
    getAccessToken().then((token) => {
      const query =
        '{"query": "{ productList { id title description includes intendedFor color price } }"}';
      fetchGQLData(config.graphQlUrl, query, token).then((response) => {
        setProductList(response.data.data.productList);
      });
    });
  }, [getAccessToken]);

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
              <span style={itemPrice}>$ {product.price.toFixed(2)}</span>{" "}
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
