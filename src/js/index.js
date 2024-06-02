require("@babel/polyfill");
import Search from "./model/Search1.js";
import { elements, loader, renderLoader, clearLoader } from "./view/base.js";
import * as searchView from "./view/searchView1";

// web app-n tuluv 1. Hailtiin query, ur dun 2.Tuhain uzuulj bga jor 3. Likelsan joruud 4. Zahialj baigaa joriin nairlaga
const state = {};
const controlSearch = async () => {
  // 1. webees hailtiin tulhuur ugiig gargaj avna
  const query = searchView.getInput();

  if (query) {
    //   2. Shineer hailtiin objectiig uusgej ugnu
    state.search = new Search(query);
    //   3. Hialt hiihed zoriulj delgetsiig UI beltgene
    searchView.clearSearchQuery();
    searchView.clearSearchResult();
    renderLoader(elements.searchResultDiv);
    //   4. Hailtiig guitsetgene
    await state.search.doSearch();
    //   5. Hailtiin ur dung delgetsend uzuulne
    clearLoader();
    if (state.search.result === undefined) alert("Хайлтаар илэрцгүй");
    else searchView.renderRecipes(state.search.result);
  }

  console.log("daragdlaa");
};
elements.searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  controlSearch();
});
