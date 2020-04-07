// Add your code here
// Post request
// let formData = {
//   dogName: "Byron",
//   dogBreed: "Poodle",
// };

// let configObj = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
//   body: JSON.stringify(formData),
// };

// fetch("http://localhost:3000/posts", configObj)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (object) {
//     console.log(object.dogName);
//   })
//   .catch(function (error) {
//     alert("Bad things! Ragnarők!");
//     console.log(error.message);
//   });
const body = document.querySelector("body");

const submitData = (userName, userEmail) => {
  let formData = {
    name: userName,
    email: userEmail,
  };
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };
  console.log("what");
  fetch("http://localhost:3000/users", configObj)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      let show = document.createElement("p");
      show.innerText = object.id;
      body.appendChild(show);
    })
    .catch(function (error) {
      alert("Bad things! Ragnarők!");
      console.log(error.message);
    });
};
submitData("joey", "jdfsal");
