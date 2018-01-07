/*Zadeklaruj funkcję drawTree, która przyjmuje jeden parametr, ten parametr będzie odzwierciedlał wysokość choinki (ilość wypisanych wierszy w konsoli).
Wewnątrz funkcji zadeklaruj pętlę for, która wykona się tyle razy, ile mamy poziomów (parametr przekazany do drawTree odpowiada za ilość rysowanych wierszy). Żeby zachować porządek, zmienną której będziemy używać do działania pętli nazwij i
Wewnątrz tej pętli, utwórz zmienną star, która będzie pustym stringiem (stan początkowy choinki który będzie rozbudowywany w kolejnej pętli).
Następnie, wciąż wewnątrz głównej (zewnętrznej) pętli, zadeklaruj kolejną pętlę for. Tak, pętla w pętli! Tym razem, zmienną którą będziemy liczyć ilość iteracji nazwij j
Wewnętrzna pętla ma się wykonać zależnie od tego, który wiersz aktualnie drukujemy w konsoli. Czyli od tego która to iteracja głównej pętli. Warunek stopu to aktualny poziom (wartość zmiennej i).
Wewnątrz drugiej pętli nadpisz zmienną star i za każdym razem kiedy pętla będzie wykonana, do aktualnej wartości star dodaj kolejną gwiazdkę star += '*';.
Po opuszczeniu wewnętrznej pętli wyświetl console.log(star).*/

function drawTree (rows) {
	for (var i=0; i<rows; i++) {
	 var star='';
	  for (var j=0; j<=i; j++) {
	  star += '*';
	  }
	 console.log(star);
	}
}

drawTree(8);