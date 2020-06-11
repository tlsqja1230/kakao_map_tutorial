import BundangguMap from "./BundangguMap.js";

export default class App {
  bundangguMap = null;
  
  constructor() {
    this.bundangguMap = new BundangguMap({
      $target: document.querySelector(".map")      
    });
  }
}
