function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
}

document.querySelector('.tecla_pom').onclick = tocaSomPom;
 
function TocaSomClap() {
    document.querySelector('#som_tecla_clap').play();
}

document.querySelector('.tecla_clap').onclick = TocaSomClap;
function TocaSomTim(){
    document.querySelector('#som_tecla_tim').play()
    document.querySelector('.tecla_tim').onclick =TocaSomTim;
    