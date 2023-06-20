import React, { useRef } from "react";
import HomeCard from "../components/HomeCard";
import { useSelector } from "react-redux";
import CardFeature from "../components/CardFeature";
import { GrPrevious, GrNext } from "react-icons/gr";
import {CiForkAndKnife} from "react-icons/ci"
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
  const loadingArrayFeature = new Array(10).fill(null);
  const slideProductRef = useRef();
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };
  const prevProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };
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
        <div className="flex w-full items-center">
          <h2 className="text-bold text-2xl text-slate-800 mb-4">
            Fresh Vegetables
          </h2>
          <div className="ml-auto flex gap-4">
            <button
              onClick={prevProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded"
            >
              <GrPrevious />
            </button>
            <button
              onClick={nextProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded "
            >
              <GrNext />
            </button>
          </div>
        </div>
        <div
          className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all"
          ref={slideProductRef}
        >
          {homeProductCardListVegetables[0]
            ? homeProductCardListVegetables.map((el) => {
                return (
                  <CardFeature
                    key={el._id}
                    name={el.name}
                    category={el.category}
                    price={el.price}
                    image={el.image}
                  />
                );
              })
            : loadingArrayFeature.map((el) => (
                <CardFeature loading="Loading...." />
              ))}
        </div>
      </div>
      <div className="my-5">
      <h2 className="text-bold text-2xl text-slate-800 mb-4">
           Your Product
          </h2>
      <div className="">
        <div className="">
          <CiForkAndKnife/>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;
