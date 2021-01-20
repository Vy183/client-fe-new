import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";

import "./App.css";

import HomePage from "./components/HomePage/HomePage";
import FormBuy from "./components/FormBuy/FormBuy";
import Head from "./components/Head/Head";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import DetailFilm from "./components/DetailFilm/DetailFilm";
import Page404 from "./components/Page404/Page404";
// import Test from "./components/test/Test";
import TabBar from "./components/TabBar/TabBar";
import FormCart from "./components/FormCart/FormCart";
import Order from "./components/Order/Order";
import Profile from "./components/Profile/Profile";
import AboutCinema from "./components/AboutCinema/AboutCinema";
import Review from "./components/Review/Review";
import EditProfile from './components/EditProfile/EditProfile';
import Search from './components/Head/Search';

export default class App extends Component {
  state = {
    cart: [],
    user: "",
    balance: 0,
    purchasedFilms: [],
  };

  loginSuccess = (user, balance) => {
    console.log(user);
    this.setState({ user: user, balance: balance });
  };

  logout = () => {
    localStorage.removeItem("token");
    this.setState({ user: "", balance: 0 });
  };

  addToCart = (phim) => {
    // console.log(`Xử lý them vào giỏ hàng ở đây
    //   lúc chuyển sang trang giỏ hàng thì truyền cái this.state.cart vào.
    //   add thì add cái idphim thôi, tới lúc sang trang giỏ hàng thì axios get phim,
    //   hoặc k thích thì cứ add là add nguyên cái thông tin phim lên cũng được`);
    // console.log(phim);
    const newCart = [...this.state.cart];
    const phimTrongList = newCart.find((pTL) => pTL._id === phim._id);

    if (phimTrongList) {
      return;
    }

    newCart.push(phim);
    this.setState({ cart: newCart });

    console.log(this.state.cart);

    localStorage.setItem("gio_hang", JSON.stringify(newCart));
  };

  removeItemFromCart = (phim) => {
    //   viết xử lý bỏ 1 phim ở đây

    const cart_temp = [...this.state.cart];

    for (var i = 0; i < cart_temp.length; i++) {
      if (phim === cart_temp[i].EN_name) {
        cart_temp.splice(0, 1);

        this.setState({ cart: cart_temp });
        localStorage.setItem("gio_hang", JSON.stringify(cart_temp));
      }
    }
  };

  updateBalance = (newBalance) => {
    this.setState({ balance: newBalance });
  };

  componentDidMount = () => {
    window.scrollTo(0, 0);

    const cart_str = JSON.parse(localStorage.getItem("gio_hang")) || [];
    this.setState({ cart: cart_str });

    const token = localStorage.getItem("token");

    if (token) {
      axios
        .get("http://localhost:4000/auto-login", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          console.log(res);
          // console.log(res.data.balance)
          this.loginSuccess(res.data.name, res.data.balance);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  successBuy = () => {
    this.setState({ cart: [] });
    localStorage.removeItem("gio_hang");
  };

  render() {
    // console.log(this.state.purchasedFilms);
    return (
      <div className="App">
        <Head
          loginSuccess={this.loginSuccess}
          logout={this.logout}
          user={this.state.user}
          updateBalance={this.updateBalance}
          cart={this.state.cart}
        />
        <Menu />
        <Switch>
          <Route path="/mua-phim" component={TabBar} />
          <Route path="/galaxy" component={AboutCinema} />
          
          <Route
            path="/chi-tiet/:idPhim"
            render={(props) => (
              <DetailFilm
                {...props}
                addToCart={this.addToCart}
                user={this.state.user}
              />
            )}
          />
          <Route exact path="/" component={HomePage} />
          <Route path="/review" component={Review} />
          {/* props laf props của render(history, params....) */}
          {/* <Route path="/trang-ca-nhan" component={Profile} /> */}
          <Route path="/edit-trang-ca-nhan" component={EditProfile} />
          <Route path="/trang-ca-nhan" component={Profile} />
          <Route
            path="/lich-su"
            render={(props) => <Order {...props} user={this.state.user} />}
          />
          <Route path="/search" component={Search} />
          <Route
            path="/gio-hang"
            render={(props) => (
              <FormCart
                {...props}
                updateBalance={this.updateBalance}
                cart={this.state.cart}
                removeCart={this.removeItemFromCart}
                user={this.state.user}
                balance={this.state.balance}
                successBuyCart={this.successBuy}
              />
            )}
          />
          <Route component={Page404} />
        </Switch>
        <Footer />
      </div>
    );
  }
}
