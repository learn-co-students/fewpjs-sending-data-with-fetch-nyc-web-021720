// Add your code here

document.addEventListener('DOMContentLoaded', function(event){
    submitData()
})

function submitData(){
    let person = {
        Name: "Johnson",
        Email:"bigboy@gmail.com"
    }
    let reqObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(person)
    }
    
    
    fetch('http://localhost:3000/users', reqObj)
    .then(resp => resp.json())
    .then(function(data){
        console.log(data)
    })
}