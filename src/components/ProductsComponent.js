import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import { numberFormat } from "../utils/numberFormat";

const ProductsComponent = ({ product }) => {
  return (
    <Col md={4} xs={6} className="mb-4">
      <Card className="h-100">
        <Card.Img
          className="card-img-top"
          variant="top"
          src={
            "assets/images/" +
            product.category.nama.toLowerCase() +
            "/" +
            product.gambar
          }
        />
        <Card.Body>
          <Card.Title className="text-dark">{product.nama}</Card.Title>
          <Card.Text className="text-success">
            Rp. {numberFormat(product.harga)}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductsComponent;
