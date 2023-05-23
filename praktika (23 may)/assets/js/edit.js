let bizpro=document.querySelector(".imgs")
axios.get('https://6469da9c03bb12ac2093f7d4.mockapi.io/bizpro').then(resp => {
console.log(resp.data)
    for (let i = 0; i < resp.data.length; i++) {       
        bizpro.innerHTML += `<div class="col-4">
        <div class="card">
            <img src="${resp.data[i].image}" class="card-img-top" height="300px">
            <div class="card-body">
              <h5 class="card-title">${resp.data[i].name}</h5>
              <p class="card-text">${resp.data[i].date}</p>
              <p class="card-text">${resp.data[i].about}</p>
            </div>
          </div>
       </div>`  
    }
});
window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 700) {
    document.querySelector(".menu").classList.add('bg-dark')
  }
  else{
    document.querySelector(".menu").classList.remove('bg-dark')

  }
}