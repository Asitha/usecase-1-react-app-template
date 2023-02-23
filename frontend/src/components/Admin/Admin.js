import React, { useEffect, useState } from "react";
import { Container, Button, Table } from "react-bootstrap";

import { useAuthContext } from "@asgardeo/auth-react";
import { fetchGQLData } from "../../gql";
import { default as config } from "../../config.json";

export default function Admin() {
  const [productList, setProductList] = useState([]);
  const { getAccessToken } = useAuthContext();
  useEffect(() => {
    document.title = "Admin | PetStore";
    getAccessToken().then((token) => {
      const query =
        '{"query": "{ productList { id title description includes intendedFor color price } }"}';
      fetchGQLData(config.graphQlUrl, query, token).then((response) => {
        setProductList(response.data.data.productList);
      });
    });
  }, [getAccessToken]);

  const productsJsx = productList.map((product, index) => (
    <tr key={index} className="align-middle">
      <td>{product.title}</td>
      <td>{product.description}</td>
      <td>{product.includes}</td>
      <td>{product.intendedFor}</td>
      <td>{product.color}</td>
      <td>{product.material}</td>
      <td>{product.price.toFixed(2)}</td>
      <td>
        <Button variant="primary" size="sm">
          Edit
        </Button>
        &nbsp;
        <Button variant="danger" size="sm">
          Delete
        </Button>
      </td>
    </tr>
  ));

  return (
    <>
      <Container className="mt-5">
        <Table bordered hover>
          <thead>
            <tr>
              <th scope="col" width="150px">
                Title
              </th>
              <th scope="col" width="400px">
                Description
              </th>
              <th scope="col">Includes</th>
              <th scope="col">Intended For</th>
              <th scope="col" width="50px">
                Color
              </th>
              <th scope="col">Material</th>
              <th scope="col">Price</th>
              <th scope="col">&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {productsJsx}
            <tr className="text-end">
              <td colSpan="8">
                <Button variant="primary" className="float-right">
                  Add New Product
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
}
