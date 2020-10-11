import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import MyImage from "./img/pic1.jpg";
import Main from "./components/Main";

class App extends React.Component {
   render() {
      var i;
      return (
         <div>
            Hello World! Trying to see if this works. Awesome!
            <br />
            And we&apos;re adding an image:
            <img src={require("./img/pic1.jpg").default} />
            <img src={MyImage} />
            <br />
            and some other container <br />
            <Main />
         </div>
      );
   }
}

ReactDOM.render(<App />, document.getElementById("root"));
