const div = document.getElementById('uniqueId')
div.textContent = "Résidence MONIER, Bonjour !"

div.style.color = 'red';
div.style.fontSize = '50px';

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

const tag = document.getElementsByClassName('tagList')

for (let i = 0; i < tag.length; i++) {
    tag[i].innerHTML = 'Hola';
}

console.log(tag);

