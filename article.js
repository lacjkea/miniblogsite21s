//REMEMBER lacj Insomnia is missing the
//".then((res) => res.json())"
//-part in the fetch snippet

const searchParams = new URLSearchParams(window.location.search);
const articleID = searchParams.get("id");
console.log(articleID);
// const fetch_url = "https://s2021-8556.restdb.io/rest/t9posts/606d6d4222a6f4340000814c";

const fetch_url = "https://s2021-8556.restdb.io/rest/t9posts/" + articleID;

fetch(fetch_url, {
  method: "GET",
  headers: {
    "x-apikey": "6034ed655ad3610fb5bb655d",
  },
})
  .then((res) => res.json())
  .then((response) => {
    console.log(response);
    showPosts(response);
  })
  .catch((err) => {
    console.error(err);
  });

function showPosts(data) {
  console.table(data);
  document.querySelector("h1").textContent = data.title;
  document.querySelector("h2 span").textContent = data.username;
  document.querySelector("p").textContent = data.content;
}
