function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('__/model.json', modelReady);
}
function modelReady(){
  classifier.classify(gotResults);
}

/*Crear la función gotResults para identificar varios sonidos. Tiene dos parámetros: error y results*/
function gotResults(error, results)
{
  if (error) {
    /*Si hay un error usar el metodo .error e imprimirlo en la consola */
    console.error(error);
  } /*sino imprimir los resultados */
  else {
    console.log(results);
    /*Crear 3 variables random_number_r, random_number_g, random_number_b y usar la función de matematicas con metodo aleatorio para los colores de las etiquetas  */
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    /*Poner el resultado del indice 0 */
    document.getElementById("result_label").innerHTML = 'Escucho:  '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Presición:  '+ (results[0].confidence*100).toFixed(2)+" %";
    /*Poner estilo y color al texto */
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    /*Guardar las 4 imágenes en sus respectivas variables */
    img = document.getElementById("alien1") 
    img1 = document.getElementById("alien2")
    img2 = document.getElementById("alien3")
    img3 = document.getElementById("alien4")

    /*Si, el resultado es igual a aplausos traer el gif 'aliens-01.gif' ...*/
     if (results[0].label == "aplausos.gif") {
      img.src = "aliens-01.gif";
      img1.src = "aliens-02.png";
      img2.src = "aliens-03.png";
      img3.src = "aliens-04.png";
    
    /*Sino, si es la campana...*/
    }  else (results[0].label == "campana") {
      img.src = "aliens-01.png";
      img1.src = "aliens-02.gif";
      img2.src = "aliens-03.png";
      img3.src = "aliens-04.png";
      
      /*Sino si es los chasquidos ...*/
    }  else if (results[0].label == "chasquidos") {
      img.src = "aliens-01.png";
      img1.src = "aliens-02.png";
      img2.src = "aliens-03.gif";
      img3.src = "aliens-04.png";
    }
    /*Sino ...*/
      else{
      img.src = "aliens-01.png";
      img1.src = "aliens-02.png";
      img2.src = "aliens-03.png";
      img3.src = "aliens-04.gif";
    }
  }
}
