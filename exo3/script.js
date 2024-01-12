const div = document.getElementById('uniqueId')
div.textContent = "Service des sports du Vatican, Bonjour !"

div.style.color = 'red';
div.style.fontSize = '50px'

const pulser = document.getElementById('btn')
pulser.addEventListener('click', ()=>{
    /*console.log('click')*/
    // pulser.style.backgroundColor += 'pink'
    pulser.classList.toggle('toggleColor')
    
})

pulser.style.height = '60px';
pulser.style.width = '800px';



// console.log(pulser);
// console.log(div);  