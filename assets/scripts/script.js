const button = document.querySelector('#car-1')
const swet = document.querySelector('.swet')
const car = document.querySelector('.car')
const gai = document.querySelector('.gai')

button.addEventListener('click', () => {
    car.classList.toggle('drive')

});

let s = Number(0);


    
// setInterval(() => {
//     s ++;

//     if(s === 1){
// 	swet.classList.toggle("green")
//     }
//     if(s === 2){
// 	swet.classList.toggle("yellow")
//     }
//     if(s === 3){
// 	swet.classList.toggle("red")
//     }
// console.log(s)
    
//     if(s == 3 & car.classList.contains('drive')){
// 	car.classList.remove('driveb')
// 	// gai.style.display = "block"
//     };
    
//     if(s == 3){
// 	s = 0;
//     }

    
// }, 12000)


function fu(){
    
    s ++;

    if(s === 1){
	swet.classList.toggle("green")
    }
    if(s === 2){
	swet.classList.toggle("yellow")
    }
    if(s === 3){
	swet.classList.toggle("red")
    }
    if(s == 3 & car.classList.contains('drive')){
	car.classList.remove('drive')

	setTimeout(() =>{gai.style.display = "block"}, 500)
	
    };
    

    if(s == 3){
	s = 0;
    }

    
};


button.addEventListener('click', () => {
    swet.style.animation = "unset"
    let fuint = setInterval(() => {
	fu()
    }, 8000);
    
});

setInterval(() => {
    
    console.log("game started: ",car.classList.contains('drive'))

}, 5000)

// if(car.classList.toggle)





















