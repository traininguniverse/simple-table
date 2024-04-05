//pobranie elementu o id 'scroll' i w momencie jego kliknięcia wywołanie funkcji scroll()
document.getElementById("scroll").onclick = function() {scroll()};


//funkcja scroll z zainicjowana na 0 zmienną i oraz wywołaniem podfunkcji move()
function scroll(){
    i = 0;   
    move();
}


function move(){
    i++; //zwiększanie o jeden zmiennej i
    window.scrollBy(0,1); //przesuwanie ekranu w pionie
    /*jeżeli i będzie mniejsza o wysokość ekranu, wykonuj co pewien czas upłynięcia funkcję move(),
    czyli inaczej mówiąc przesuwaj w dół zawartość ekranu o całą jego wysokość względem czasu*/
    if (i < screen.height) setTimeout('move()',1);
}