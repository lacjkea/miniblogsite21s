/* fetch("https://s2021-8556.restdb.io/rest/t9posts", {
  method: "GET",
  headers: {
    "x-apikey": "6034ed655ad3610fb5bb655d",
  },
})
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.error(err);
  }); */

/* function getData() {
  fetch("https://s2021-8556.restdb.io/rest/t9posts", {
    method: "GET",
    headers: {
      "x-apikey": "6034ed655ad3610fb5bb655d",
    },
  })
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });
} */

function getData() {
  fetch("https://s2021-8556.restdb.io/rest/t9posts", {
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
}
function showPosts(posts) {
  console.table(posts);
  posts.forEach((post) => {
    //grab
    const template = document.querySelector("template").content;
    console.log(post);
    //clone
    const copy = template.cloneNode(true);
    copy.querySelector("h2").textContent = post.title;
    copy.querySelector("h3 span").textContent = post.username;

    const a = copy.querySelector("a");
    a.href += post._id;
    const post_title_for_url = post.title.replaceAll(" ", "-");
    a.href += `&${post_title_for_url}`;
    a.querySelector("span").textContent = post.title;

    copy.querySelector("section").innerHTML = post.content;

    //append
    document.querySelector("main").appendChild(copy);
  });
}
getData();
