import React, { useState } from "react";
import { BsCloudUpload } from "react-icons/bs";
import { ImagetoBase64 } from "../utility/ImagetoBase62";
import { toast } from "react-hot-toast";
const NewProduct = () => {
  const [data, setData] = useState({
    name: "",
    category: "",
    image: "",
    price: "",
    description: "",
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const uploadImage = async (e) => {
    const data = await ImagetoBase64(e.target.files[0]);
    setData((prev) => {
      return {
        ...prev,
        image: data,
      };
    });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    const { name, image, category, price } = data;
    if (name && image && category && price) {
      const fetchData = await fetch(
        `${process.env.REACT_APP_SERVER_DOMAIN}/uploadProduct`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const fetchres = await fetchData.json();
      toast(fetchres.message);
      setData(() => {
        return {
          name: "",
          category: "",
          image: "",
          price: "",
          description: "",
        };
      });
    } else {
      toast("Enter required fields");
    }
  };
  return (
    <div className="p-2">
      <form
        className="m-auto w-full max-w-md flex flex-col p-3 bg-white shadow"
        onSubmit={handleOnSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type={"text"}
          name="name"
          className="bg-slate-200 p-1 my-1"
          onChange={handleOnChange}
          value={data.name}
        />

        <label htmlFor="category">Category</label>
        <select
          className="bg-slate-200 p-1 my-1"
          id="category"
          name="category"
          onChange={handleOnChange}
          value={data.category}
        >
          <option value="other">Select.....</option>
          <option value="fruits">Fruits</option>
          <option value="vegetable">Vegetables</option>
          <option value="icecream">Ice-Cream</option>
          <option value="dosa">Dosa</option>
          <option value="pizza">Pizza</option>
          <option value="rice">Rice</option>
          <option value="cake">Cake</option>
          <option value="burger">Burger</option>
          <option value="paneer">Paneer</option>
          <option value="sandwich">Sandwich</option>
          <option value="chicken">Chicken</option>
        </select>

        <label htmlFor="image">
          image
          <div className="h-40 w-full bg-slate-200  rounded flex items-center justify-center cursor-pointer">
            {data.image ? (
              <img src={data.image} className="h-full" />
            ) : (
              <span className="text-5xl">
                <BsCloudUpload />
              </span>
            )}
            <input
              type={"file"}
              id="image"
              accept="image/*"
              onChange={uploadImage}
              className="hidden"
              // value={data.image}
            />
          </div>
        </label>

        <label htmlFor="price" className="my-1">
          Price
        </label>
        <input
          type={"text"}
          name="price"
          className="bg-slate-200 p-1 my-1"
          onChange={handleOnChange}
          value={data.price}
        />

        <label htmlFor="description">Description</label>
        <textarea
          rows={2}
          className="bg-slate-200 p-1 my-1 resize-none"
          name="description"
          onChange={handleOnChange}
          value={data.description}
        />
        <button className="bg-red-500 hover:bg-red-600 text-white text-lg font-medium my-2 drop-shadow">
          Save
        </button>
      </form>
    </div>
  );
};

export default NewProduct;
