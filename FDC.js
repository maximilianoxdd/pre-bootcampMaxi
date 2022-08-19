function muestraInformaciónContacto() {
    var auntContactInfo = ["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345];
    console.log(auntContactInfo);
}
//console.log imprime ["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345]//
/*
diagrama T 
variables            valores   
auntcontactyinfo     ["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345]
*/



function muestraListaDeCompras() {
    var produce = ["manzanas", "naranjas"];
    var frozen = ["brócoli", "helado"];
    frozen.push("croqueta de papa");
    console.log(frozen);
}
//console.log imprime ["brócoli", "helado", "croqueta de papa"]//
/*
diagrama T
variable         valor 
produce          ["manzanas", "naranjas"]
frozen           ["brócoli", "helado"]
 frozen           ["brócoli", "helado", "croqueta de papa"]
 */


var movieLibrary = ["Bambi", "E.T.", "Toy Story"];
movieLibrary.push("Zoro");
movieLibrary[1] = "Beetlejuice";
console.log(movieLibrary);

//console.log imprime [bambi,beetlejuice,toy story,zoro]//
/*
digrama T 
variable        valor
movielibrary     ["Bambi", "E.T.", "Toy Story"]
movielibrary      ["Bambi", "E.T.", "Toy Story", "zoro"]
movielibrary      ["Bambi", "beetlejuice", "Toy Story", "zoro"]
