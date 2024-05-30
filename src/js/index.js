require("@babel/polyfill");
import Search from "./model/Search1.js";

let search = new Search("pasta");

search.doSearch().then((r) => console.log(r));
