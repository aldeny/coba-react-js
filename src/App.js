// import './App.css';
import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  NavbarComponent,
  ListCategoriesComponent,
  ResultComponent,
  ProductsComponent,
} from "./components";

import { API_URL } from "./utils/constants";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "products")
      .then((res) => {
        const products = res.data;
        this.setState({ products });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <NavbarComponent />
        <Container fluid>
          <div className="mt-3 text-white">
            <Row>
              <ListCategoriesComponent />
              <Col>
                <h5>Products</h5>
                <hr></hr>
                <Row>
                  {products &&
                    products.map((product) => (
                      <ProductsComponent key={product.id} product={product} />
                    ))}
                </Row>
              </Col>
              <ResultComponent />
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}
