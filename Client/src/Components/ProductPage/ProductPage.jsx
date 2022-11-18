import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Four04 from '../Four04/Four04';

const ProductPage = () => {
    const [IphoneProducts, setProducts] = useState([]);
    
    console.log(useParams());
    const {productID} = useParams();
// console.log(productID)

//http://localhost:1234/iphones

    useEffect(() => {
        fetch("/iphones.json")
        .then((res) => res.json())
        .then((data) => {
            // const productList = data.IphoneProducts;
          const singleProduct = data.IphoneProducts.filter(
            (x) => x.product_url === productID
          );
          setProducts(singleProduct);
        });
    
    }, [productID]);


    if(IphoneProducts.length !== 0){
  return (
    <div>
    <section className="internal-page-wrapper top-100">
      <div className="container">
        {IphoneProducts?.map((product) => {
          let id = product.product_url;
          let title = product.product_name;
          let img = product.product_img;
          let Brief = product.product_brief_description;
          let StartPrice = product.starting_price;
          let PriceRange = product.price_range;
        //   let ProductPage = "/iphone/" + id;
          let details = product.product_description;

          let productDiv = (
            <div key={id} className="bottom-100">
              <div className="row justify-content-center text-center bottom-50">
                <div className="col-12">
                  <div className="title-wraper bold">{title}</div>
                  <div className="brief-description">{Brief}</div>
                </div>
              </div>

              <div className="row justify-content-center text-center product-holder h-100">
                <div className={`col-sm-12 col-md-6 my-auto`}>
                  <div className="starting-price">
                    {`Starting at ${StartPrice}`}
                  </div>
                  <div className="monthly-price">{PriceRange}</div>
                  <div className="product-details">{details}</div>
                </div>

                <div className={`col-sm-12 col-md-6`}>
                  <div className="prodict-image">
                    <img src={img} alt="#"/>
                  </div>
                </div>
              </div>
            </div>
          );
          return productDiv;
        })}
      </div>
    </section>
  </div>
  );
}
else{
    return <Four04 />
}

}

export default ProductPage