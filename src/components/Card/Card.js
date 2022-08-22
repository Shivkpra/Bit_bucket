import * as React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import NewReleasesIcon from "@mui/icons-material/NewReleases";

import { VegCardData } from "./CardData";
import { FruitCardData } from "./CardData";
import { HerbsCardData } from "./CardData";

import "./Card.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function MediaCard({ increment, searchData, dataChange }) {
  const [product, setProduct] = useState([]);
  const filterData = useSelector((state) => state.product.filterData);
  const style = { color: "red" };

  useEffect(() => {
    if (filterData.length) {
      switch (filterData) {
        case "fruites":
          setProduct([...FruitCardData]);
          break;
        case "vegetables":
          setProduct([...VegCardData]);
          break;
        case "herbs":
          setProduct([...HerbsCardData]);
          break;
        case "All":
          setProduct([...VegCardData, ...FruitCardData, ...HerbsCardData]);
          break;
      }
    }
  }, [filterData]);

  useEffect(() => {
    setProduct([...VegCardData, ...FruitCardData, ...HerbsCardData]);
  }, []);

  useEffect(() => {
    if (dataChange) {
      let data = product.filter(
        (e) => e.title.toLowerCase() === searchData.toLowerCase()
      );
      setProduct([...data]);
    } else {
      setProduct([...VegCardData, ...FruitCardData, ...HerbsCardData]);
    }
  }, [dataChange]);

  console.log(product);
  return (
    <>
      <div className="container Cards ">
        {product.length &&
          product.map((element) => {
            return (
              <Card
                sx={{ maxWidth: 250 }}
                style={{ border: ".5px solid #e6e6e6" }}
                className="Card"
              >
                <Typography
                  sx={{
                    fontSize: "8px",
                    marginTop: "2%",
                    marginBottom: "auto",
                    marginLeft: "45%",
                    marginRight: "2%",
                  }}
                >
                  {element.offer}
                </Typography>

                <NewReleasesIcon
                  style={style}
                  sx={{
                    width: "1rem",
                    height: "0.9rem",
                    float: "right",
                    marginTop: "-6%",
                  }}
                />
                <div>
                  <img
                    className="productimage"
                    src={element.image}
                    alt=""
                  ></img>
                  <img
                    className="vegmark"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1200px-Veg_symbol.svg.png"
                    alt=""
                  ></img>
                  <Typography class="companyname">{element.company}</Typography>
                  <Typography class="productname">{element.title}</Typography>
                  <div className="pricequantitydiv">
                    <div className="pricediv">
                      <Typography class="mrp">MRP:</Typography>
                      <Typography class="price">{element.price}</Typography>
                    </div>
                    <div className="deliverydiv">
                      <img
                        className="truckicon"
                        src="https://www.bbassets.com/static/v2570/custPage/build/content/img/standard-del-gray.svg"
                        alt=""
                      />
                      <p className="delivery">
                        Standard Delivery: Today 9:00AM - 11:00AM
                      </p>
                    </div>
                    <div className="quantitydiv">
                      <div class="qty">
                        <Typography class="quantity">Qty</Typography>
                        <input className="priceinput" placeholder="1"></input>
                      </div>
                      <Button class="addbutton" onClick={increment}>
                        ADD
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
      </div>
    </>
  );
}
