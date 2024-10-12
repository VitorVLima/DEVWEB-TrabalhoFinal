const categoryButton = document.getElementsByClassName('buttonItem');
const categoryConteiner = document.getElementsByClassName('category');

for(let i = 0; i< 4; i++){
    categoryButton[i].addEventListener('click', function(){
        for( let j = 0; j<4; j++){
            if(j == i){
                categoryConteiner[j].style.display = 'flex';
            }else{
                categoryConteiner[j].style.display = 'none';
            }
        }
    })
}