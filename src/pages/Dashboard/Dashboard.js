import React, { useContext } from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import { AdminContext } from "../../App";
import AddProduct from "./AddProduct";
import MakeAdmin from "./MakeAdmin";
import ManageAllOrders from "./ManageAllOrders";
import ManageProduct from "./ManageProduct";
import MyOrder from "./MyOrder";
import Pay from "./Pay";
import Review from "./Review";
const Dashboard = () => {
  const { path, url } = useRouteMatch();
  const {admin} = useContext(AdminContext);
  console.log(admin);
  return (
    <div>
      <DashContainer>
        <DashboardLayout>
          <DashboardSideBar>
            <Link to={`${url}/myorder`}>
              <h3>My Order</h3>
            </Link>
            <Link to={`${url}/review`}>
              <h3>Review</h3>
            </Link>
            <Link to={`${url}/payment`}>
              <h3>Pay</h3>
            </Link>
            <Link to={`${url}/manageorders`}>
              <h3>Manage All Orders</h3>
            </Link>
            <Link to={`${url}/addproduct`}>
              <h3>Add Product</h3>
            </Link>
            <Link to={`${url}/makeAdmin`}>
              <h3>MakeAdmin</h3>
            </Link>
            <Link to={`${url}/manageProduct`}>
              <h3>ManageProduct</h3>
            </Link>
          </DashboardSideBar>
          <DashboardMainContent>
            <Switch>
              <Route exact path={path}>
                <MyOrder />
              </Route>
              <Route path={`${path}/myorder`}>
                <MyOrder />
              </Route>
              <Route path={`${path}/review`}>
                <Review />
              </Route>
              <Route path={`${path}/payment`}>
                <Pay />
              </Route>
              <Route path={`${path}/manageorders`}>
                <ManageAllOrders />
              </Route>
              <Route path={`${path}/addproduct`}>
                <AddProduct />
              </Route>
              <Route path={`${path}/makeAdmin`}>
                <MakeAdmin />
              </Route>
              <Route path={`${path}/manageProduct`}>
                <ManageProduct />
              </Route>
            </Switch>
          </DashboardMainContent>
        </DashboardLayout>
      </DashContainer>
    </div>
  );
};

export default Dashboard;

const DashContainer = styled.div`
  padding: 0 50px;
`;

const DashboardLayout = styled.div`
  display: flex;
`;

const DashboardSideBar = styled.div`
  flex: 1;
  height: 100vh;
  background-color: #f2f2f2;
  padding: 0 20px;
  left: 30px;
  & h3 {
    margin: 20px 0px;
  }
`;

const DashboardMainContent = styled.div`
  flex: 5;
  margin-left: 30px;
`;
