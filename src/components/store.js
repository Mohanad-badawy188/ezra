import { React, useState, useEffect } from "react";
import * as Unicons from "@iconscout/react-unicons";
import { Link, useLocation } from "react-router-dom";
import Axios from "axios";

function Store() {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [product, setProduct] = useState([]);
  const [sort, setSort] = useState("Newest");
  const [filter, setFilter] = useState("all");
  const [filterdProducts, setFilterdProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await Axios.get("http://localhost:5000/api/product");

        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    const filterdItems = product.filter((item) =>
      item.categories.includes(filter)
    );

    setFilterdProducts(filterdItems);
  }, [product, filter]);
  useEffect(() => {
    if ((sort === "Newest")) {
    
      setFilterdProducts((prev) => [...prev].sort((a, b) =>  new Date(a.createdAt) - new Date(b.createdAt)));
    
    } else if (sort === "price(asc)") {
      setFilterdProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilterdProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  return (
    <div>
      <div className="bg-light">
        <div className="container">
          <h1 className="text-center pt-5"> plants </h1>

          <div className=" d-flex justify-content-between">
            <div className="d-flex">
              <h1>Sort Products : </h1>
              <select className="m-3" onChange={(e) => setSort(e.target.value)}>
                <option>Newest</option>
                <option>price(asc)</option>
                <option>Price(desc)</option>
              </select>
            </div>
            <div className="d-flex">
              <h1>Filter Products : </h1>

              <select
                className="m-3"
                onChange={(e) => setFilter(e.target.value)}
                name="filter"
              >
                <option>all</option>
                <option>low maintenece</option>
                <option>pet friendly</option>
                <option>out door</option>
                <option>gifts</option>
              </select>
            </div>
          </div>

          <div className="d-flex d-block container text-center item">
            {filterdProducts.map((props) => (
              <div className="col-4 item" key={props._id}>
                <div className="card me-5">
                  <div className="card">
                    <img
                      className="circle-img"
                      src={props.imgURL}
                      alt="avatar_img"
                    />
                    <div className="d-flex icons">
                      <p>
                        {" "}
                        <Unicons.UilShoppingCart
                          size="50"
                          className="iconBG"
                        />{" "}
                      </p>
                      <Link to={`/productPage/${props._id}`}>
                        <p>
                          {" "}
                          <Unicons.UilHeart size="50" className="iconBG" />
                        </p>
                      </Link>
                      <p>
                        {" "}
                        <Unicons.UilSearch size="50" className="iconBG" />{" "}
                      </p>
                    </div>
                  </div>

                  <div className="card-body removeUnderline">
                    <h3 className="card-title">{props.name}</h3>
                    <p className="card-text">{props.description}</p>
                    <h5> price : $ {props.price}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Store;
