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
  const usernameEl = form.elements.username;
  console.log("email");
  console.log(form.elements.email.value);
  const emailEl = form.elements.email;
  console.log("title");
  console.log(form.elements.title.value);
  const titleEl = form.elements.title;
  console.log("message");
  console.log(form.elements.message.value);
  const messageEl = form.elements.message;
  const now = new Date();
  const payload = {
    title: titleEl.value,
    username: usernameEl.value,
    content: messageEl.value,
    date: now,
  };

  fetch("https://s2021-8556.restdb.io/rest/t9posts", {
    method: "POST",
    headers: {
      "x-apikey": "6034ed655ad3610fb5bb655d",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
      clearFields();
    })
    .catch((err) => {
      console.error(err);
    });

  function clearFields() {
    form.elements.submit.disabled = false;
    document.querySelector("p.hidden").classList.remove("hidden");
    usernameEl.value = "";
    emailEl.value = "";
    titleEl.value = "";
    messageEl.value = "";
  }
}
