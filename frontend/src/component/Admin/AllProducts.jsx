import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./AllProducts.css";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  deleteProduct,
  getAdminProduct,
} from "../../actions/ProductActions";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SideBar from "./Sidebar";
import { ToastContainer, toast } from "react-toastify";
import { DELETE_PRODUCT_RESET } from "../../constans/ProductConstans";

const AllProducts = ({ history }) => {
  const dispatch = useDispatch();

  const { error, products } = useSelector((state) => state.products);

  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.deleteProduct
  );

  const deleteProductHandler = (id) => {
    dispatch(deleteProduct(id));
    dispatch(getAdminProduct());
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    if (deleteError) {
      toast.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      console.log("Delete start");
      toast.success("Product Deleted Successfully");
      dispatch({ type: DELETE_PRODUCT_RESET });
      console.log("Delete end");
    }
    dispatch(getAdminProduct());
  }, [dispatch, error, deleteError, isDeleted]);

  const columns = [
    {
      field: "images",
      headerName: "image",
      minWidth: 60,
      flex: 0.3,
    },
    {
      field: "name",
      headerName: "Name",
      minWidth: 130,
      flex: 0.5,
    },
    {
      field: "description",
      headerName: "Description",
      minWidth: 130,
      flex: 0.5,
    },
    {
      field: "stock",
      headerName: "Stock",
      type: "number",
      minWidth: 80,
      flex: 0.3,
    },

    {
      field: "price",
      headerName: "Price ($)",
      type: "number",
      minWidth: 150,
      flex: 0.5,
    },

    {
      field: "actions",
      flex: 0.3,
      headerName: "Edit/Delete",
      minWidth: 100,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            <Link to={`/edit/product/${params.getValue(params.id, "id")}`}>
              <EditIcon />
            </Link>

            <Button
              onClick={() =>
                deleteProductHandler(params.getValue(params.id, "id"))
              }
            >
              <DeleteIcon />
            </Button>
          </Fragment>
        );
      },
    },
  ];

  const rows = [];

  products &&
    products.forEach((item) => {
      rows.push({
        id: item._id,
        stock: item.Stock,
        price: item.price,
        name: item.name,
        description: item.description,
        images: item.images,
      });
    });

  return (
    <Fragment>
      <div className="dashboard">
        <SideBar />
        <div className="productListContainer">
          <h1 id="productListHeading">ALL PRODUCTS</h1>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="productListTable"
            autoHeight
          />
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={4000}
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

export default AllProducts;
