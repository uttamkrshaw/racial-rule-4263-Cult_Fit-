const accordion = document.querySelectorAll("contentBx");

accordion.forEach(function(el){
    el.addEventListener("click",function(){
        this.classList.toggle('active')
    })
})