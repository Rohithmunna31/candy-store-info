const submit = document.getElementById("additem");

submit.addEventListener("click", (e) => {
  e.preventDefault();

  const choclate = document.getElementById("candy").value;
  const description = document.getElementById("description").value;
  const price = document.getElementById("price").value;
  const quantity = document.getElementById("quantity").value;

  axios
    .post(
      "https://crudcrud.com/api/1e35d430fe994be2a85edcb1703bddc2/choclates",
      {
        body: {
          choclate: `${choclate}`,
          description: `${description}`,
          price: `${price}`,
          quantity: `${quantity}`,
        },
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
    .then((res) => {
      console.log(res);
      displaythings(res.data._id);
    });
});

function displaythings(_id) {
  const choclate = document.getElementById("candy").value;
  const description = document.getElementById("description").value;
  const price = document.getElementById("price").value;
  const quantity = document.getElementById("quantity").value;

  var text = document.createElement("div");

  text.innerText = `${choclate}   ${description}  ${price}  ${quantity}`;

  const addone = document.createElement("BUTTON");
  addone.setAttribute("value", "buy two");
  addone.innerHTML = "buy one";
  console.log("this is buy one ");
  text.appendChild(addone);

  const addtwo = document.createElement("BUTTON");
  addtwo.innerText = "buy two";
  text.appendChild(addtwo);

  const addthree = document.createElement("BUTTON");
  addthree.setAttribute("id", "buythree");
  addthree.innerText = "buy three";
  console.log("this is buy three");
  text.appendChild(addthree);

  document.body.appendChild(text);

  addone.addEventListener("click", (e) => {
    e.preventDefault();

    axios
      .put(
        `https://crudcrud.com/api/1e35d430fe994be2a85edcb1703bddc2/choclates/${_id}`,
        {
          body: {
            choclate: `${choclate}`,
            description: `${description}`,
            price: price,
            quantity: quantity - 1,
          },
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
          },
        }
      )
      .then(() => {
        text.innerText = `${choclate}   ${description}  ${price}  ${
          quantity - 1
        }
        }`;
        text.appendChild(addone);
        text.appendChild(addtwo);
        text.appendChild(addthree);
        // document.body.appendChild(text);
      });
  });

  addtwo.addEventListener("click", (e) => {
    e.preventDefault();

    axios
      .put(
        `https://crudcrud.com/api/1e35d430fe994be2a85edcb1703bddc2/choclates/${_id}`,
        {
          body: {
            choclate: `${choclate}`,
            description: `${description}`,
            price: price,
            quantity: quantity - 2,
          },
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
          },
        }
      )
      .then((res) => {
        text.innerText = `${choclate} ${description}${price} ${quantity - 2}`;
        text.appendChild(addone);
        text.appendChild(addtwo);
        text.appendChild(addthree);
        // document.body.appendChild(text);
      });
  });

  addthree.addEventListener("click", (e) => {
    e.preventDefault();

    axios
      .put(
        `https://crudcrud.com/api/1e35d430fe994be2a85edcb1703bddc2/choclates/${_id}`,
        {
          body: {
            choclate: `${choclate}`,
            description: `${description}`,
            price: price,
            quantity: quantity - 3,
          },
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
          },
        }
      )
      .then((res) => {
        text.innerText = `${choclate}   ${description}  ${price}  ${
          quantity - 3
        }
        }`;
        text.appendChild(addone);
        text.appendChild(addtwo);
        text.appendChild(addthree);
        // document.body.appendChild(text);
      });
  });
}
