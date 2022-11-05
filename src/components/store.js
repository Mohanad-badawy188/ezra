import { React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Axios from "axios";
import Header from "./header";
import Footer from "./footer";
import StoreProps from "./storeProps";
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
        if (res.data) {
          setProduct(res.data);
        }
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
    if (sort === "Newest") {
      setFilterdProducts((prev) =>
        [...prev].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
      );
    } else if (sort === "price(asc)") {
      setFilterdProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilterdProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  return (
    <div>
      <Header />
      <div className="bg-light page">
        {" "}
        <div></div>
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
                name="filter">
                <option>all</option>
                <option>low maintenece</option>
                <option>pet friendly</option>
                <option>out door</option>
                <option>gifts</option>
              </select>
            </div>
          </div>

          <div className="d-flex d-block container text-center item">
            {filterdProducts.map((item) => (
              <StoreProps
                name={item.name}
                imgURL={item.imgURL}
                description={item.description}
                _id={item._id}
                price={item.price}
                key={item._id}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Store;
