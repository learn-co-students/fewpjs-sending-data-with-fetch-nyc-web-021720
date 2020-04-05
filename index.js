
// const submitData=(name,email)=>
//    fetch("http://localhost:3000/users",{
//         method: "POST",
//         headers:{
//             "Content-Type": "application/json",
//             "Accept":"application/json"
//         },
//         body: JSON.stringify({
//             name: name, email: email
//         })
//     })
//     .then(response =>response.json())
//     .then(json => document.body.innerHTML = json["id"])
//     .catch(error=> document.body.innerHTML= error.message)



let body = document.querySelector('body')
const appendJson = (json) => {
    const li = document.createElement('li')
    li.innerHTML = json
    body.appendChild(li)
}

const submitData = (Name, Email) => 
    fetch("http://localhost:3000/users", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: Name, 
            email: Email
        })
    })
    .then(resp => resp.json())
    .then(json => appendJson(json.id))
    .catch(error => appendJson(error.message))
