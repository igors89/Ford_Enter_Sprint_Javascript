

//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {

    constructor (nome, text, link){
        this.nome=nome;
        this.text=text;
        this.link=link;
    }
    
      
    static Start(arr){
        if(arr){

            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Next(); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(); },2000);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next(){

        const container = document.getElementById("carousel");
        const titulo = document.getElementById("carousel-title");

        if(Carousel._sequence >= Carousel._size) Carousel._sequence=0;

        let item = carouselArr[Carousel._sequence];
        
        container.innerHTML = `<img src="img/${item.nome}" alt="${item.nome}"  />`
        titulo.innerHTML = `<a>${item.text}</a>`
        
        Carousel._sequence++;

    }
};
