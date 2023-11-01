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
    function TocaSomPuff(){
        document.querySelector('#som_tecla_puff').play()
        document.querySelector('Tecla_puff').onclick =TocaSomPuff;
        function TocaSomSplash(){
            document.querySelector('#som_tecla_splash').play()
            document.querySelector('Tecla_splash').onclick =TocaSomPuff;
            function TocaSomToim(){
                document.querySelector('#som_tecla_toim').play()
                document.querySelector('tecla_toim').onclick =TocaSomToim;
                fuction TocaSomSplash(){
                    document.querySelector('#som_tecla_psh').play()
                    document.querySelector('tecla_psh').onclick =TocaSomPsh;