import React, { Fragment, useEffect, useState } from "react";
import "./newProduct.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, createCategory } from "../../actions/CategoryAction";
import { Button } from "@material-ui/core";
import DescriptionIcon from "@material-ui/icons/Description";
import StorageIcon from "@material-ui/icons/Storage";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import DiscountIcon from "@material-ui/icons/LocalOffer";
import SideBar from "./Sidebar";
import { NEW_CATEGORY_RESET } from "../../constans/CategoryConstans";
import { ToastContainer, toast } from "react-toastify";

const Category = ({ history }) => {
  const dispatch = useDispatch();

  const { loading, error, success } = useSelector(
    (state) => state.createCategory
  );
  const [name, setName] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    if (success) {
      toast.success("category Created Successfully");
      history.push("/admin/category");
      dispatch({ type: NEW_CATEGORY_RESET });
    }
  }, [dispatch, alert, error, history, success]);

  const createCategorySubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("catergoryName", name);
    myForm.set("catergoryId", categoryId);
    myForm.set("catergoryDescripition", description);
    myForm.set("productsInCatergory", products);
    myForm.set("catergoryImage", images);

    // images.forEach((images) => {
    //   myForm.append("images", images);
    // });
    dispatch(createCategory(myForm));
  };

  return (
    <Fragment>
      <div className="dashboard">
        <SideBar />

        <div className="newProductContainer">
          <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={createCategorySubmitHandler}
          >
            <h1>Create Category</h1>

            <div>
              <SpellcheckIcon />
              <input
                type="text"
                placeholder="Category Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <DiscountIcon />
              <input
                type="String"
                placeholder="Category ID"
                onChange={(e) => setCategoryId(e.target.value)}
              />
            </div>

            <div>
              <DescriptionIcon />
              <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                cols="30"
                rows="1"
              ></textarea>
            </div>

            <div>
              <StorageIcon />
              <input
                type="text"
                placeholder="Products in Category"
                required
                onChange={(e) => setProducts(e.target.value)}
              />
            </div>

            <div id="createProductFormFile">
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={(e) => setImages(e.target.value)}
                multiple
              />
            </div>

            <div id="createProductFormImage">
              {/* {imagesPreview.map((image, index) => (
                <img key={index} src={image} alt="Product Preview" />
              ))} */}
            </div>

            <Button
              id="createProductBtn"
              type="submit"
              disabled={loading ? true : false}
            >
              Create
            </Button>
          </form>
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Fragment>
  );
};

export default Category;
