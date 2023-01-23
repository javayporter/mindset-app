import { Component } from "react";

class HttpRequest {
  constructor(url) {
    this.url = url;
  }
  createRequest(url) {
    const httpRequest = new XMLHttpRequest(url);

    httpRequest.addEventListener("readystatechange", (url) => {
      const data = httpRequest.responseText;
      httpRequest.readyState === 4
        ? this.updateSuccess(data)
        : console.log(httpRequest.status);
    });

    httpRequest.open("GET", url);
    httpRequest.send();
  }
  updateSuccess(data) {
    const parsedData = JSON.parse(data);
    const myData = parsedData.results;
    console.log(myData);
    return myData;
  }
}

export default HttpRequest;
