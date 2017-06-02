/*
Используя тег <table> и цикл for выведите таблицу умножения.
Сделайте задачу из пункта 1, но с использованием цикла while.
Примечание: Вам потребуется двойной цикл, то есть цикл в цикле:
for (var i = 1; i < 10; i++) {
  for (var j = 1; j < 10; j++) {
    var result = i * j;
  }
}
*/

//1


document.write("<table border='1px'>");

	for (var i = 1; i < 10; i++) {
		document.write("<tr style='height:20px;'>");
	  for (var j = 1; j < 10; j++) {
		  var result = i*j
		  document.write("<td style='width:20px;'>"+ result +"</td>");
	  }
	  document.write("</tr>");
	}

document.write("</table>");

document.write("<br>");

//2


document.write("<table border='1px'>");

	var i=0;
	while(i < 9){
		document.write("<tr style='height:20px;'>");
		i++;
		var j=1;
	  while(j < 10) {
		  var result = i*j;
		  document.write("<td style='width:20px;'>"+ result +"</td>");
		   j++;
	  }
	  document.write("</tr>");
	}

document.write("</table>");

	





	

