import { Component } from "react";

class HttpRequest extends Component {
  constructor(url) {
    super();
    this.url = url;
    this.state = {
      data: "",
    };
  }
  createRequest(url) {
    const httpRequest = new XMLHttpRequest(url);
    const data = httpRequest.responseText;
    httpRequest.addEventListener("readystatechange", (url) => {
      httpRequest.readyState === 4
        ? console.log(httpRequest.responseText)
        : console.log(httpRequest.status);
    });
    httpRequest.open("GET", url);
    httpRequest.send();
    return data;
    // const setData = () => {
    //   this.state = {
    //     data: data,
    //   };
    // };

    // setData();
    // console.log("this state should be data", setData());
  }
  test() {
    this.setState({
      data: 9,
    });
    console.log(this.state);
  }
}

export default HttpRequest;
