import { Component } from "react";

class HttpRequest extends Component {
  constructor(url) {
    super();
    this.url = url;
  }
  createRequest(url) {
    const httpRequest = new XMLHttpRequest(url);
    httpRequest.addEventListener("readystatechange", (url) => {
      httpRequest.readyState === 4
        ? console.log(httpRequest.responseText)
        : console.log(httpRequest.status);
    });
    httpRequest.open("GET", url);
    httpRequest.send();
    console.log(httpRequest.responseText);
  }
}

export default HttpRequest;
