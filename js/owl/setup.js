$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },
        1000:{
            items:5
        }
    }
})


const bote = document.getElementById('bot')

function mostrar(){
    bote.classList.toggle('active')
}


bote.addEventListener('click',mostrar)



function mudartela(event){
    if(event.key === 'v'){
        document.body.classList.toggle('telacheia')

    }


}

window.addEventListener('keydown',mudartela)


const titulo = document.querySelector('h3')


const imgs = document.querySelectorAll('img')

function passar(event){
    console.log(event.target)
}



imgs.forEach((img)=>{
    img.addEventListener('click',passar)
})


const titulo1 = document.querySelector('h3')



