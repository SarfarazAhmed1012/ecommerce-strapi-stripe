import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";
const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img src="https://www.apetogentleman.com/wp-content/uploads/2018/06/male-models-david-gandy.jpg" />
          <button>
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img src="https://www.apetogentleman.com/wp-content/uploads/2018/06/male-models-cheshire.jpg" />
          <button>
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img src="https://www.apetogentleman.com/wp-content/uploads/2018/06/male-models-jonk.jpg" />
          <button>
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img src="https://www.apetogentleman.com/wp-content/uploads/2018/06/male-models-noah.jpg" />
              <button>
                <Link className="link" to="/products/1">
                  Sale
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img src="https://www.apetogentleman.com/wp-content/uploads/2018/06/male-models-asap.jpg" />
              <button>
                <Link className="link" to="/products/1">
                  Sale
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img src="https://www.apetogentleman.com/wp-content/uploads/2018/06/male-models-johannes.jpg" />
          <button>
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
