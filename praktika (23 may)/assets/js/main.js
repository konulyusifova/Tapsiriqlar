document.querySelector(".btn").addEventListener('click', function () {
    const fetched = fetch('https://6469da9c03bb12ac2093f7d4.mockapi.io/bizpro', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
  
        body: JSON.stringify( {
          image: document.querySelector('#img').value,
          name: document.querySelector('#name').value,
          date: document.querySelector('#date').value,
          about: document.querySelector('#about').value
        }
        )
    })
    fetched.then(res=>{
        (res.ok == true)
        {
          document.querySelector('#img').value = '',
          document.querySelector('#name').value = '',
          document.querySelector('#date').value = '',
          document.querySelector('#about').value = ''
            successAlert('Product created !')
        }
    }).catch(err=>console.log(err))
  })