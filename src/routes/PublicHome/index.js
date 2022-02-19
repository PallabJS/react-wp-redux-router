import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { productApi } from "../../api/product.api";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";

import { authAction } from "../../core/redux/Auth/AuthSlice";
import { useCoreStyle } from "../../core/styles/style.container";
import { coreColor } from "../../core/styles/styleDefinition";
import { useStyle } from "./style";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const coreStyle = useCoreStyle();
  const style = useStyle();

  const [productList, setProductList] = useState([]);

  const logout = () => {
    dispatch(authAction.logout());
  };

  const loadProducts = async () => {
    let r = await productApi.getTrendingProducts();
    if (r.success) {
      setProductList(r.data);
    }
  };

  const handleBuy = (productId) => {
    navigate("/login");
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div className={style.container}>
      <Navbar />
      <div className={`${style.contentWrapper}`}>
        <div className={`${style.logoHeader} ${coreStyle.Box}`}>
          <h3 className="header">Shop at Homico</h3>
          <p className="text">All your needs in one place</p>
        </div>

        <h3 className={`${style.sectionTitle} ${coreStyle.Box}`}>Trending Items</h3>

        <div className={coreStyle.Box}>
          {productList.map((item, index) => {
            return (
              <Card
                key={index}
                title={`${item.name} <br/> (${item.stockCount} in stock)`}
                subtitle={`Buy at only Rs. ${item.price} `}
                submitText="Buy"
                cancelText={null}
                onSubmit={() => handleBuy(item.id)}
                extraText={[
                  <div key={index}>
                    <FontAwesomeIcon icon={faStar} color={coreColor.yellow(0.8, 150)} /> Doorstep
                    Delivery
                  </div>,
                ]}
                imageUrl={
                  "https://www.hollywoodreporter.com/wp-content/uploads/2012/12/img_logo_blue.jpg"
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
