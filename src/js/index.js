require("@babel/polyfill");
import Search from "./model/Search1.js";

// web app-n tuluv 1. Hailtiin query, ur dun 2.Tuhain uzuulj bga jor 3. Likelsan joruud 4. Zahialj baigaa joriin nairlaga
const state = {};
const controlSearch = async () => {
  // 1. webees hailtiin tulhuur ugiig gargaj avna
  const query = "pizza";

  if (query) {
    //   2. Shineer hailtiin objectiig uusgej ugnu
    state.search = new Search(query);
    //   3. Hialt hiihed zoriulj delgetsiig UI beltgene
    //   4. Hailtiig guitsetgene
    await state.search.doSearch();
    //   5. Hailtiin ur dung delgetsend uzuulne
    console.log(state.search.result);
  }

  console.log("daragdlaa");
};
document.querySelector(".search").addEventListener("submit", (e) => {
  e.preventDefault();
  controlSearch();
});
