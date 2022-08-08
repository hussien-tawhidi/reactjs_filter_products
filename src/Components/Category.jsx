import React, { useState } from "react";
import Categories from "./Categories";

const Category = () => {
  const [data, setData] = useState(Categories);
  //   filter function start
  const filterResult = (catItem) => {
    const result = Categories.filter((curData) => {
      return curData.category === catItem;
    });
    setData(result);
  };
  //   filter function end
  return (
    <div>
      <div className="text-center text-info my-3">
        <h1>Let's SHOP</h1>
      </div>
      <div className="container-fluid">
        <div className="row">
          {/* buttons  */}
          <div className="col-md-3">
            <button
              className="btn btn-warning w-100 mb-4"
              onClick={() => {
                filterResult("IPhone");
              }}
            >
              Phones
            </button>
            <button
              className="btn btn-warning w-100 mb-4"
              onClick={() => {
                filterResult("AirPot");
              }}
            >
              AirPots
            </button>
            <button
              className="btn btn-warning w-100 mb-4"
              onClick={() => {
                filterResult("HeadPhone");
              }}
            >
              HeadPhones
            </button>
            <button
              className="btn btn-warning w-100 mb-4"
              onClick={() => {
                filterResult("LapTop");
              }}
            >
              LapTops
            </button>
            <button
              className="btn btn-warning w-100 mb-4"
              onClick={() => {
                filterResult("Watch");
              }}
            >
              Watches
            </button>
            <button
              className="btn btn-warning w-100 mb-4"
              onClick={() => {
                filterResult("Bag");
              }}
            >
              Bags
            </button>
            <button
              className="btn btn-warning w-100 mb-4"
              onClick={() => {
                setData(Categories);
              }}
            >
              All
            </button>
          </div>
          {/* products  */}
          <div className="col-md-9">
            <div className="row">
              {/* products  */}
              {data.map((values) => {
                const { id, title, price, image } = values;
                return (
                  <>
                    <div className="col-md-4 mb-4" key={id}>
                      <div className="card">
                        <img
                          className="card-img-top"
                          src={image}
                          alt="Card image cap"
                        />
                        <div className="card-body">
                          <h5 className="card-title">{title}</h5>
                          <p>{price}</p>
                          <p className="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
                          <button href="#" className="btn btn-dark">
                            Buy Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
