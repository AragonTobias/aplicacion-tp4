let boody = document.getElementById("hoteles");



fetch("../js/hoteles.json")
    .then((response) => {
        return response.json()
    })
    .then((data) => {

        
        data.forEach(e => {
            console.log(e);
         boody.innerHTML += `
            
           
            
                <div class="card">
                    <div class="fotoCard"><img src="${e.img}"/></div>
                    <div class="descCard">
                        <div class="nombreLugar"><h2> ${e.nombre} </h2></div>
                        <div class="precioLugar"> <h4> $${e.precio}</h4></div>
                    </div>
                </div>
                
            `
        })



    });