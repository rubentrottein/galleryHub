const cartes = document.getElementsByTagName("aside");
const levels = document.getElementsByTagName("li");
const lightbox = document.getElementById("lightBox");
const galleries = ["Final Fantasy XII", "Dragon Quest VIII", "Xenoblade Chronicles 2"];
let lvl = 'init';
var title = "<button>Reset</button>Gallery JS ";
document.getElementsByTagName("h1")[0].innerHTML = title;
document.getElementsByTagName("h1")[0].addEventListener("click", function (){getLevel("init")});
function test(){
    for (let i=0; i<galleries.length;i++){
        document.getElementsByTagName("figcaption")[i].innerHTML = galleries[i];
    }
}
    document.getElementsByTagName("h1")[0].innerHTML += (
    `<ul>
        <a href="../index.html"><ol>Home</ol></a>
        <a href="../gallery0/index.html"><ol>`+galleries[0]+`</ol></a>
        <a href="../gallery1/index.html"><ol>`+galleries[1]+`</ol></a>
        <a href="../gallery2/index.html"><ol>`+galleries[2]+`</ol></a>
    </ul>`
);
for (let i=0; i<levels.length;i++){
    levels[i].innerHTML = "level "+ i;
    levels[i].addEventListener("click", function (){getLevel(i)});
}
function getLevel(newLevel){
    lvl = newLevel;
    for (let i=0; i<cartes.length;i++){
        if (lvl === 'init'){
            cartes[i].innerHTML = "<img src='img/"+i+".jpg' />";
        } else{
            cartes[i].innerHTML = "<img src='img/lvl"+lvl+"/"+i+".jpg' />";
        }
    }
    
    for (let i=0; i<cartes.length;i++){
        cartes[i].addEventListener("click",function (){
            lightbox.classList.add('is-paused'); reveal(i);});
    }
}
    
function reveal(card){
    if (lvl==='init'){
        lightbox.innerHTML = "<img src='img/"+card+".jpg' />";
        lightbox.style.display = "block";
        lightbox.classList.remove('is-paused');
    } else {
        lightbox.innerHTML = "<img src='img/lvl"+lvl+"/"+card+".jpg' />";
    }
    lightbox.style.display = "block";
    lightbox.classList.remove('is-paused');
}

getLevel(lvl);