import React, {useEffect} from 'react';
import { Container, Row, Col, Button }  from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp as regThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faThumbsUp as solidThumbsUp } from '@fortawesome/free-solid-svg-icons';
// import PetStoreNav from '../../App.js';

// Component to render the item list
const PetItemList = () => {
    const itemPrice = {
      fontSize: '20px',
      fontWeight: 'bold',
      marginRight: '50px'
    };
    return (
      <>
      <Container>
        <Row>
  
  {/* 
  
  Item list that's displayed on the page follow the following format:
  
          <Col>
            <img src={require('./item-1.png')} width="300" alt="dog"/><br />
            <h4>Title....</h4>
            <p>Description</p>
            <p>
              <b>Includes: </b> 1 Sweater<br />
              <b>Intended For:</b> Dogs<br />
              <b>Color:</b> Red, White, Black<br />
              <b>Material: </b> 100% Acrylic<br />
            </p>
            <br />
            <span style={itemPrice}>$ 14.99</span> <Button variant="danger">Add to cart</Button>
            <br /><br />
            Follow updates &nbsp;&nbsp;<FontAwesomeIcon icon={regThumbsUp} /> 
          </Col>
  
  You can use this as a template to create the other items from data you get from the API.
  
  Displaying a list programmatically in React
  -------------------------------------------
  
  Let's assume the data you get from the API is in the following format:
      [
        {
          itemID: 1,
          itemName: "Top Paw® Valentine's Day Single Dog Sweater",
          itemDesc: "Dress your pup up appropriately ....",
          itemImage: "http://some/path/to/item-1.png",
          stockDetails: {
            includes: "1 Sweater",
            intendedFor: "Dogs",
            color: "Red, White, Black",
            material: "100% Acrylic"
          }
        },
        ...
      ]
  
  In react assign this to variable. You would have to replace the assignment with the API call.
  
  const items = [
    {itemId: 1, itemName: ..., itemDesc: ..., itemImage: ..., ...}
    {itemId: 2, itemName: ..., itemDesc: ..., itemImage: ..., ...}
  ];
  
  Now you can use the items variable to display the list of items.
  
  const listItems = items.map((item) =>
    <Col>
      <img src={item.itemImage} width="300" alt="dog"/><br />
      <h4>{item.itemName}</h4>
      <p>{item.itemDesc}</p>
      <p>
        <b>Includes: </b> {item.stockDetails.includes}<br />
        <b>Intended For:</b> {item.stockDetails.intendedFor}<br />
        ....
    </Col>
  );
  
  return (
    <Row>{listItems}</Row>
  );
  
    */}
          <Col>
            <img src={require('./item-1.png')} width="300" alt="dog"/><br />
            <h4>Top Paw® Valentine's Day Single Dog Sweater</h4>
            <p>Dress your pup up appropriately for Valentine's Day with this Top Paw Valentine's Day Kisses Dog Sweater. This sweet sweater slips on and off easily while offering a comfortable fit, and lets it be known that your pup is single and ready to mingle</p>
            <p>
              <b>Includes: </b> 1 Sweater<br />
              <b>Intended For:</b> Dogs<br />
              <b>Color:</b> Red, White, Black<br />
              <b>Material: </b> 100% Acrylic<br />
            </p>
            <br />
            <span style={itemPrice}>$ 14.99</span> <Button variant="danger">Add to cart</Button>
            <br /><br />
            Follow updates &nbsp;&nbsp;<FontAwesomeIcon icon={regThumbsUp} /> 
          </Col>
          <Col>
            <img src={require('./item-2.png')} width="300" alt="dog1"/><br />
            <h4>Arcadia Trail™ Dog Windbreaker</h4>
            <p>The right jacket for your pet while the two of you are out on the trail together can make all the difference when it comes to both warmth and comfort. This Arcadia Trail Windbreaker zippers shut, features a packable hood, has an opening for a leash, and even comes with a waste bag dispenser and waste bags. Comfortable and versatile, this unique jacket makes a great choice for the outdoor adventures you share with your pup</p>
            <p>
              <b>Includes: </b> 1 Windbreaker Jacket<br />
              <b>Intended For:</b> Dogs<br />
              <b>Color:</b> Available in Pink or Navy<br />
            </p>
            <br />
            <span style={itemPrice}>$ 29.99</span> <Button variant="danger">Add to cart</Button>
            <br /><br />Following updates &nbsp;&nbsp;<FontAwesomeIcon icon={solidThumbsUp} />
          </Col>
          <Col>
            <img src={require('./item-3.png')} width="300" alt="dog-bandana"/><br />
            <h4>Top Paw® Valentine's Day Kisses Dog Tee and Bandana</h4>
            <p>Dress your pup up appropriately for Valentine's Day with this Top Paw Valentine's Day Kisses Dog Tee and Bandana. This tee and bandana slip on and off easily while offering a comfortable fit, and offers kisses from your favorite furry friend</p>
            <p>
              <b>Includes: </b> 1 Tee and Bandana<br />
              <b>Intended For:</b> Dogs<br />
              <b>Color:</b> White, Red, Black<br />
              <b>Material: </b> T-Shirt: 65% Polyester, 35% Cotton; Bandana: 100% Cotton<br />
            </p>
            <br />
            <span style={itemPrice}>$ 7.47</span> <Button variant="danger">Add to cart</Button>
            <br /><br />
            Follow updates &nbsp;&nbsp;<FontAwesomeIcon icon={regThumbsUp} /> 
          </Col>
        </Row>
      </Container>
    </>
    );
  
  };

  export default function Catalog() {
    useEffect(() => {
        document.title = 'PetStore Catalog';
      }, []);
    return (
      <>
        <PetItemList />
      </>
    );
}