import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import burger from "./burger.jpg";
import { scaleDown as Menu } from "react-burger-menu";

class App extends Component {
  styles2 = {
    bmBurgerButton: {
      position: "fixed",
      width: "36px",
      height: "30px",
      left: "36px",
      top: "36px"
    },
    bmBurgerBars: {
      background: "#373a47"
    },
    bmBurgerBarsHover: {
      background: "#a90000"
    },
    bmCrossButton: {
      height: "24px",
      width: "24px"
    },
    bmCross: {
      background: "#bdc3c7"
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%"
    },
    bmMenu: {
      background: "#373a47",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em"
    },
    bmMorphShape: {
      fill: "#373a47"
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "0.8em"
    },
    bmItem: {
      display: "inline-block"
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)"
    }
  };

  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <Menu styles={this.styles2}>
          <a id="home" className="menu-item" href="/">
            Home
          </a>
          <br />
          <a id="about" className="menu-item" href="/about">
            About
          </a>
          <br />
          <a id="contact" className="menu-item" href="/contact">
            Contact
          </a>
          <br />
          <a onClick={this.showSettings} className="menu-item--small" href="">
            Settings
          </a>
        </Menu>

        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>This burgerlog app is going to be awesome.</p>
            <img
              src={burger}
              className="Burger-pic"
              alt="nice picture of my burger"
            />
            {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
          </header>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
