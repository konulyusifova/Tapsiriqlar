let row=document.querySelector(".row")
let inp = document.querySelector("#inp")
let btn = document.querySelector("#btn")
axios.get('https://api.tvmaze.com/shows')
.then(res => {

var datas=res.data;
console.log(datas)
datas.forEach(el =>{
    row.innerHTML += ` <div class="col-3">
    <div class="card">
    <img src="${el.image.medium}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${el.name}</h5>
          <p class="card-text">${el.externals.imdb}</p>
          <a href="${el.url}" class="btn btn-primary">Details</a>
        </div>
      </div>
</div>`
})
});


btn.addEventListener("click", function(){
  axios.get('https://api.tvmaze.com/shows').then(res=>{
    var datas=res.data;
    let newArr = []
      for (let i = 0; i < datas.length; i++) {
        if(datas[i].name.toLowerCase().includes(inp.value.toLowerCase())){
          console.log(datas[i])
          newArr.push(datas[i])
        }
      }

    console.log(newArr)
    row.innerHTML = ""

    newArr.forEach(el =>{
      console.log(el.name)
        row.innerHTML += ` <div class="col-3">
        <div class="card">
        <img src="${el.image.medium}" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">${el.name}</h5>
              <p class="card-text">${el.externals.imdb}</p>
              <a href="${el.url}" class="btn btn-primary">Details</a>
            </div>
          </div>
    </div>`
    })
  })
})