window.onload = function() {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excusa").innerHTML = generarexcusa();
  });
 };
 let generarexcusa = () => {
     let sujeto = ["El perro", "La anciana", "Un mayordomo", "Un extraterrestre", "Una vaca loca", "Un escarabajo"];
     let accion = ["se comio", "se llevo", "rompio", "escondio", "lanzo", "exploto"];
     let objeto = ["mis zapatos", "los deberes", "mi calendario", "mi coche", "mi casa", "una nave espacial"];
     let cuando = ["esta mañana", "durante la cena", "en mitad del viaje", "mientras dormia", "por la tarde", "en el atardecer"];
     let arrayDeExcusas = [sujeto, accion, objeto, cuando];
     let excusa = arrayDeExcusas.map(arr => {
       let randomIndex = Math.floor(Math.random() * arr.length);
       return arr[randomIndex];
     });
     return excusa.join(" ");
 };
