const form = document.querySelector("form");

console.log(form.elements);

form.elements.email.focus();

/* 
Nononono

document.querySelector("input[type=submit]").addEventListener("click", sub); */

form.addEventListener("submit", sub);

//or
/* const form = document.querySelector("form");
form.addEventListener("submit", e=>{
    e.preventDefault()
}) */

function sub(e) {
  e.preventDefault();
  form.elements.submit.disabled = true;
  //   alert("hey");
  //   console.log(e);
  console.log("username");
  console.log(form.elements.username.value);
  const username = form.elements.username.value;
  console.log("email");
  console.log(form.elements.email.value);
  const email = form.elements.email.value;
  console.log("title");
  console.log(form.elements.title.value);
  const title = form.elements.title.value;
  console.log("message");
  console.log(form.elements.message.value);
  const message = form.elements.message.value;
  fetch("https://s2021-8556.restdb.io/rest/t9posts", {
    method: "POST",
    headers: {
      "x-apikey": "6034ed655ad3610fb5bb655d",
      "Content-Type": "application/json",
    },
    body: `{"username":"${username}","content":"${message}","title":"${title}"}`,
  })
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });
}
