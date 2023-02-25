import React, { useState, useEffect } from "react";
import { Form, FormControl, Button, Card, Row, Col } from "react-bootstrap";
import "../App.css";

function Nutrition() {
  const [query, setQuery] = useState("");
  const [finalQuery, setFinalQuery] = useState("");
  const [container, setContainer] = useState([]);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "2b85d90714msh1d7ece47b8e8220p1c55a4jsnb14b38250f0a",
      "X-RapidAPI-Host": "nutritionix-api.p.rapidapi.com",
    },
  };

  useEffect(() => {
    fetch(
      `https://nutritionix-api.p.rapidapi.com/v1_1/search/+${query}?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat%2Cnf_protein%2Cnf_total_carbohydrate%2Cnf_saturated_fat%2Cnf_sodium%2Cnf_sugars`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        const uniqueItems = data.hits.filter(
          (item, index, self) =>
            index ===
            self.findIndex((i) => i.fields.item_name === item.fields.item_name)
        );
        setContainer(uniqueItems);
      })
      .catch((err) => console.error(err));
  }, [finalQuery]);

  const onChangeHandler = (e) => {
    setQuery(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setFinalQuery(query);
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-center my-5">Check your Meals</h1>
      <Form
        className="d-flex justify-content-center"
        onSubmit={onSubmitHandler}
      >
        <FormControl
          type="text"
          placeholder="Enter meal name"
          className="mr-2"
          value={query}
          onChange={onChangeHandler}
        />
        <Button variant="success" type="submit">
          Search
        </Button>
      </Form>
      <Row className="mt-5">
        {container.map((item, index) => (
          <Col key={index} sm={4}>
            <Card id="foodCard" className="mb-3">
              <Card.Body>
                <div className=" text-center">
                  <img id="foodPic" src={"/images/food.png"} />
                </div>
                <Card.Title className="text-center">
                  {item.fields.item_name}
                </Card.Title>
                <Card.Text>
                  Fat: {item.fields.nf_total_fat}g <br />
                  Calories: {item.fields.nf_calories} <br />
                  Protein: {item.fields.nf_protein}g Carbs: <br />
                  Carbs :{item.fields.nf_total_carbohydrate}g <br />
                  Saturated Fat: {item.fields.nf_saturated_fat}g <br />
                  Sodium: {item.fields.nf_sodium}mg <br />
                  Sugars: {item.fields.nf_sugars}g
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Nutrition;
