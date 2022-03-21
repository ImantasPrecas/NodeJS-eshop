const sum = require("./math/sum.js");

/*
Uztuotis:

-perskaityti visu produktu failus
-susideti visus produktus i viena masyva
-isspausdinti produktu lentele, kuri atrodo taip:

"Univermagas" pardavime turi:
-----------------------------
1) Preke pavadinimas: [kaina] [valiuta]; parduota: [kiekis]; likutis: [kiekis];
2) Preke pavadinimas: [kaina] [valiuta]; parduota: [kiekis]; likutis: [kiekis];
3) Preke pavadinimas: [kaina] [valiuta]; parduota: [kiekis]; likutis: [kiekis];
-----------------------------
Parduotuves suvestine:
- turimu prekiu sandelyje: [total kiekis]
- parduotu prekiu: [total kiekis]
- suprekiauta suma: [total pinigu] [valiuta]
- galimu pardavimu: [total pinigu] [valiuta]
- maksimali galima parduotuves apyvarta: [total pinigu] [valiuta]


*/

const rez = sum(5, 7);
console.log(rez);
