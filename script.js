window.onscroll = function() {scrollFunction()};
var topBtn = document.getElementById("top-button");

function scrollFunction(){
    if(document.body.scrollTop > 350 || document.documentElement.scrollTop > 350){
        topBtn.style.display = 'block';
    } else{
        topBtn.style.display = 'none';
    }
}

function topFunction(){
    document.body.scrollTop = 0; //for Safari
    document.documentElement.scrollTop = 0;//For Chrom, Firefox, IE and opera
}