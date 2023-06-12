import React from "react";
import HomeCard from "../components/HomeCard";
import { useSelector } from "react-redux";
import CardFeature from "../components/CardFeature";

const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  console.log(productData);
  const homeProductCardList = productData.slice(0, 4);
  const homeProductCardListVegetables = productData.filter(
    (el) => el.category === "vegetable",
    []
  );
  console.log("homeProductCardListVegetable", homeProductCardListVegetables);
  const loadingArray = new Array(4).fill(null);
  return (
    <div className="p-2 md:p-4">
      <div className="md:flex gap-4 py-2">
        <div className="md:w-1/2 py-4">
          <div className="flex gap-3 bg-slate-200 w-36 px-2 items:center rounded-full">
            <p className="text-sm font-medium text-slate-500">Bike Delivery</p>
            <img
              src={"https://logowik.com/content/uploads/images/bike3816.jpg"}
              className="h-6"
            />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold py-3">
            The Fastest Delivery in{" "}
            <span className="text-red-600 text">Your Home</span>
          </h2>
          <p className="py-3 text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </p>
          <button className="font-bold bg-red-500 text-slate-200 px-4 py-1 rounded-md">
            Order Now
          </button>
        </div>
        <div className="md:w-1/2 flex flex-wrap gap-5">
          {homeProductCardList[0]
            ? homeProductCardList.map((e) => {
                return (
                  <HomeCard
                    key={e._id}
                    image={e.image}
                    name={e.name}
                    price={e.price}
                    category={e.category}
                  />
                );
              })
            : loadingArray.map((el, index) => {
                return <HomeCard key={index} loading={"Loading..."} />;
              })}
        </div>
      </div>
      <div className="">
        <h2 className="text-bold text-2xl text-slate-800">Fresh Vegetables</h2>
        <div className="flex gap-5">
          {homeProductCardListVegetables.map((el) => {
            return (
              <CardFeature
                key={el._id}
                name={el.name}
                category={el.category}
                price={el.price}
                image={el.image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
