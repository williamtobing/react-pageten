import React from "react";
import Header from "./Header";
import Main from "./Main";
import Test from "./Test";
import Thing from "./Thing";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Test />
        <Thing />
        <Footer />
      </div>
    );
  }
}

export default App;
