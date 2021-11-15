import { createContext, useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import useAuth from "./hooks/useAuth";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Dashboard from "./pages/Dashboard/Dashboard";
import UpdatedProduct from "./pages/Dashboard/UpdatedProduct";
import Explore from "./pages/Explore/Explore";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Register from "./pages/Register/Register";

export const FeaturedProductsContext = createContext();
export const TestimonialContext = createContext();
export const MyOrderContext = createContext();
export const AllOrdersContext = createContext();
export const AdminContext = createContext();
const App = () => {
  
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [myOrder, setMyOrder] = useState([]);
  const [allOrders, setAllOrders] = useState([]);
  const [admin, setAdmin] = useState(false);
  const {user} = useAuth();

  const fetchProducts = async () => {
    const res = await fetch("https://aqueous-fortress-70124.herokuapp.com/products");
    const data = await res.json();
    setFeaturedProducts(data);
  };

  const fetchTestimonials = async () => {
    const res = await fetch("https://aqueous-fortress-70124.herokuapp.com/reviews");
    const data = await res.json();
    setTestimonials(data);
  };

  const fetchAllOrders = async () => {
    const res = await fetch('https://aqueous-fortress-70124.herokuapp.com/allOrders');
    const data = await res.json();
    setAllOrders(data)
  }

    useEffect( () => {
      fetchAllOrders();
    }, [])

  useEffect( () => {
    fetch(`https://aqueous-fortress-70124.herokuapp.com/myOrder?email=${user.email}`)
    .then( res => res.json())
    .then( data => {
      setMyOrder(data)
    })
  }, [user.email])

  useEffect(() => {
    fetchTestimonials();
  }, []);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect( () => {
    const url = `https://aqueous-fortress-70124.herokuapp.com/users/admin/${user.email}`;
    fetch(url)
    .then( res => res.json())
    .then( data => {
      setAdmin(data.admin);
    })
  }, [user.email])

  console.log(admin);
  return (
    <div>
      <FeaturedProductsContext.Provider value={[featuredProducts]}>
        <TestimonialContext.Provider value={[testimonials]}>
          <MyOrderContext.Provider value={[myOrder, setMyOrder]} >
            <AllOrdersContext.Provider value={[allOrders]}>
              <AdminContext.Provider value={admin}>
            <Header />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <PrivateRoute exact path="/explore">
                <Explore />
              </PrivateRoute>
              <PrivateRoute path="/explore/details/:id">
                <ProductDetails />
              </PrivateRoute>
              <PrivateRoute path="/dashboard/manageProduct/updated/:id">
                <UpdatedProduct />
              </PrivateRoute>
              <Route path="/contact">
                <Contact />
              </Route>
              <PrivateRoute path="/dashboard">
                <Dashboard />
              </PrivateRoute>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/:pageName">
                <NotFound />
              </Route>
            </Switch>
            <Footer />
            </AdminContext.Provider>
            </AllOrdersContext.Provider>
          </MyOrderContext.Provider>
        </TestimonialContext.Provider>
      </FeaturedProductsContext.Provider>
    </div>
  );
};

export default App;
