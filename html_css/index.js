    let conteneur = document.getElementsByClassName("first")[0];

    setInterval(function(){
        if(conteneur.style.backgroundImage.includes("paysage.jpg"))
            conteneur.style.backgroundImage = "url('images/image2.jpg')";
        else
            conteneur.style.backgroundImage = "url('images/paysage.jpg')";  
    },3000)
