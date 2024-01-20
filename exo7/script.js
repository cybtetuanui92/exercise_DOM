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

// ////////////EXO4

const tag = document.getElementsByClassName('tagList')

for (let i = 0; i < tag.length; i++) {
    tag[i].innerHTML = 'Hola';
}

// console.log(tag);

//////////EXO5

const elementDiv = document.createElement('div');
elementDiv.textContent = 'Bonne année 2024 !!!!!';

const parentElement = document.getElementById('textUnique');
parentElement.appendChild (elementDiv);


// console.log(elementDiv);        
 
//////////////EXO6

const monElement = document.getElementById('monId');
// console.log(monElement); /* debug vérification changement de l'attribut href*/
const attribute = monElement.getAttribute('href');
// console.log(attribute);

const attributeChanged = monElement.setAttribute ('href','#')
// console.log(attributeChanged);
// console.log(attribute);

//////////////////////////EXO7
///Voir exo 5 pour la raison de parentElement
parentElement.innerHTML = 'Bonne année 2034 !!!!!'

////////////////////////////