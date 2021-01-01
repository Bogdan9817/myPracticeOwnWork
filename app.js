let burger = document.querySelectorAll('.menu_btn')
let bodies = document.querySelectorAll('body')
let navBar = document.querySelectorAll('.nav_bar')

burger[0].addEventListener('click' ,function(){
        for(let i = 0; i<bodies.length; i++){
            const body = bodies[i];
            const nav = navBar[i];
            nav.classList.toggle('unoverlay')
            body.classList.toggle('overlay')
        }
})
let showState =document.querySelectorAll('.show_us')
console.log(showState)
let modalWindow = document.querySelectorAll('.modal_window')
for(let i=0; i<showState.length; i++){showState[i].addEventListener('click', function(){
    for(let i=0; i<modalWindow.length; i++ ){
        const show = modalWindow[i]
        show.classList.add('show')
    }
})}
function hideModal(){
    modalWindow[0].classList.remove('show')
}
let btnClose = document.querySelectorAll('.btn_close')
btnClose[0].addEventListener('click', hideModal)
modalWindow[0].addEventListener('click', function(e){
    if(e.target == modalWindow[0] ){
        hideModal()
    }
})
let all_images = new Array(
    "assets/portfolio/inLake.jpg",
    "assets/portfolio/train.jpg",
    "assets/portfolio/tree.jpg",
    "assets/portfolio/window_and_girl.jpg"
)
let slide = document.getElementsByClassName('auto_slide')
let images = Array.from(slide)

if(all_images){
        let i = 0 
        max_count = all_images.length
        function setImage (){
            if(++i>=max_count){i=0}
            return all_images[i]
        }
    }


function setImages(){
    for(i=0; i<=images.length;i++){
        $(images[i]).attr('src', setImage()
        )
    }
}
setImages()

if(all_images){
    let i = 0
    max_count= all_images.length
   
    function autoSlide (){
        if(++i>=max_count){i=0}
        $('.auto_slide').attr("src",all_images[i]) }
        setInterval( autoSlide, 3000)
    }
    
    
   










$('.nav_bar').onePageNav()