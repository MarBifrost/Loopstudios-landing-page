fetch("data_mobile.json")
  .then(function (response) {
    return response.json();
  })


    .then(function (images_for_mobile) {
    let placeHolder = document.querySelector("#images_for_mobile");
    let out = []
    ; 


    for (let images_mobile of images_for_mobile) {
        out += `
        <div class="img1">
            <img src="${images_mobile.imgSrc}" class="img_for_mobile_hover" alt="imgs">
            <h4>${images_mobile.txt}</h4>
        </div>
    `;

    }

    
    placeHolder.innerHTML = out;
    console.log(out)

});