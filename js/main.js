// GET, PUT, DELETE, POST

// fetch('https://jsonplaceholder.typicode.com/users',{
//     method:'GET'
// })
// .then((res)=>res.json())
// .then((data)=> console.log(data))


function setCars(e){
    e.preventDefault()
    let car ={
        title: e.target.title.value,
        img: e.target.img.value,
        price: e.target.price.value,
    }
    fetch('https://65e9b9ccc9bf92ae3d3a0ac3.mockapi.io/cars',{
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(car)
    })
    .then((res)=> res.json())
    .then((data)=> console.log(data))
}
let elList =document.querySelector('.list')
fetch('https://65e9b9ccc9bf92ae3d3a0ac3.mockapi.io/cars',)  
.then((res)=> res.json())
.then((data)=> {
    data.forEach(element => {
        let newLi = document.createElement('li')
        newLi.innerHTML = `
        <img src=${element.img} width="100" alt="">
        <p>${element.price}</p>
        <button class="btn btn-success" onclick="DelCar(${element.id})">${element.title}
        </button>
        <button class="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick"stId(${element.id}) >Edit
        </button>
        `
        elList.appendChild(newLi)
    }); 
})

function DelCar(id){
    fetch(`https://65e9b9ccc9bf92ae3d3a0ac3.mockapi.io/cars/${id}`,{
        method:'DELETE',
        headers:{'content-type':'application/json'},
    })
    .then((res)=> res.json())
    .then((data)=> console.log(data))
}

function stId(id){
    window.localStorage.setItem('id',id)
}
function carEdit(){
    e.preventDefault()
   let id = window.localStorage.getItem('id')
   let car ={
       title: e.target.title.value,
       img: e.target.img.value,
       price: e.target.price.value,
   }
   fetch(`https://65e9b9ccc9bf92ae3d3a0ac3.mockapi.io/cars/${id}`,{
       method:'PUT',
       headers:{'content-type':'application/json'},
       body:JSON.stringify(car)
   })
   .then((res)=> res.json())
   .then((data)=> console.log(data))
}



