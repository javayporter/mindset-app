import HttpRequest from "./HttpRequest";
import { Component } from "react";
class MusicRequest {
  constructors(term, entity, media, attribute, limit) {
    this.term = term;
    this.entity = entity;
    this.media = media;
    this.attribute = attribute;
    this.limit = limit;
  }
  sendRequest(term, entity, media, attribute, limit) {
    const MUSIC_API_URL = "https://itunes.apple.com/search?";
    const URL = `${MUSIC_API_URL}term=${term}&media=${media}&entity=${entity}&attribute=${attribute}&limit=${limit}`;
    const musicRequest = new HttpRequest();
    musicRequest.createRequest(URL);
  }
}
export default MusicRequest;
