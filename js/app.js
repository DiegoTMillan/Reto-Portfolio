window.addEventListener("load", () => {
  //here is declared differents targets
  let list = document.body.querySelector(".list-group");
//   console.log(list.firstElementChild.firstElementChild);
  let curiosidad = document.body.querySelector(".curiosidad");
//   console.log(curiosidad);
  let cita = document.body.querySelector(".cita");
  let referencia = document.body.querySelector(".referencia");
  // console.log(cita)

  //here is the events. Objetive: change sentences in target
  //item1
  list.firstElementChild.addEventListener("click", () => {
    list.firstElementChild.nextElementSibling.classList.remove("bgBlack");
    list.firstElementChild.nextElementSibling.classList.add("item1");
    list.firstElementChild.nextElementSibling.nextElementSibling.classList.remove(
      "bgBlack"
    );
    list.firstElementChild.nextElementSibling.nextElementSibling.classList.add(
      "item1"
    );
    list.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove(
      "bgBlack"
    );
    list.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.classList.add(
      "item1"
    );
    list.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove(
      "bgBlack"
    );
    list.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.add(
      "item1"
    );
    list.firstElementChild.classList.remove("item1");
    list.firstElementChild.classList.add("bgBlack");
    curiosidad.innerHTML =
      "Me encantan todo lo relacionado con la biología, la astronomía o la física. No soy ducho en la materia pero me encanta seguir a los mejores divulgadores. Os dejo una curiosidad que cuando la vi, me dejó ojiplático.";
    cita.innerHTML =
      "«¿Por qué se ha puesto de moda que las parejas se tatuen la ecuación de Dirac? Ni más ni menos explica el entrelazamiento cuántico. Dicho de otro modo, cuando dos partículas interactúan el tiempo suficiente, aunque luego las separen galaxias estarán de algún modo conectadas. Cuando una determine su estado, la otra lo hará también. Desde luego es por eso que se la considera la ecuación más romántica de la física»";
    referencia.innerHTML = "-   (i∂ + m) ψ = 0";
  });
  //item2
  list.firstElementChild.nextElementSibling.addEventListener("click", () => {
    list.firstElementChild.classList.remove("bgBlack");
    list.firstElementChild.classList.add("item1");
    list.firstElementChild.nextElementSibling.classList.remove("item1");
    list.firstElementChild.nextElementSibling.classList.add("bgBlack");
    list.firstElementChild.nextElementSibling.nextElementSibling.classList.remove(
      "bgBlack"
    );
    list.firstElementChild.nextElementSibling.nextElementSibling.classList.add(
      "item1"
    );
    list.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove(
      "bgBlack"
    );
    list.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.classList.add(
      "item1"
    );
    list.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove(
      "bgBlack"
    );
    list.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.add(
      "item1"
    );
    curiosidad.innerHTML =
      "Amo la lectura, me permite viajar en el tiempo y en el espacio. Abrir mi mente y sacarla de la rutina del día a día. Para mí comprar libros no es gastar dinero, es una necesidad como comer o respirar.";
    cita.innerHTML = "«Un hogar sin libros es como un cuerpo sin alma»";
    referencia.innerHTML = "-   Marco Tulio Cicerón";
  });
  //item3
  list.firstElementChild.nextElementSibling.nextElementSibling.addEventListener(
    "click",
    () => {
      list.firstElementChild.classList.remove("bgBlack");
      list.firstElementChild.classList.add("item1");
      list.firstElementChild.nextElementSibling.classList.remove("bgBlack");
      list.firstElementChild.nextElementSibling.classList.add("item1");
      list.firstElementChild.nextElementSibling.nextElementSibling.classList.remove(
        "item1"
      );
      list.firstElementChild.nextElementSibling.nextElementSibling.classList.add(
        "bgBlack"
      );
      list.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove(
        "bgBlack"
      );
      list.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.classList.add(
        "item1"
      );
      list.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove(
        "bgBlack"
      );
      list.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.add(
        "item1"
      );
      curiosidad.innerHTML =
        "Desde muy joven he practicado muchos deportes: fútbol, baloncesto, volleyball... Eso sí nunca como profesional. Aunque si que estuve 10 años como árbitro por la federación andaluza de baloncesto";
      cita.innerHTML =
        "«Los obstáculos no tienen que frenarte. Si te encuentras con una pared, no das la vuelta y abandonas. Encuentras la manera de subir a ella, pasar a través de ella o rodearla.»";
      referencia.innerHTML = "-   Michael Jordan";
    }
  );
  //item4
  list.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.addEventListener(
    "click",
    () => {
      list.firstElementChild.classList.remove("bgBlack");
      list.firstElementChild.classList.add("item1");
      list.firstElementChild.nextElementSibling.classList.remove("bgBlack");
      list.firstElementChild.nextElementSibling.classList.add("item1");
      list.firstElementChild.nextElementSibling.nextElementSibling.classList.remove(
        "bgBlack"
      );
      list.firstElementChild.nextElementSibling.nextElementSibling.classList.add(
        "item1"
      );
      list.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove(
        "item1"
      );
      list.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.classList.add(
        "bgBlack"
      );
      list.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove(
        "bgBlack"
      );
      list.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.add(
        "item1"
      );
      curiosidad.innerHTML =
        "Si ha habido una saga de videojuegos a la que le he echado horas ha sido a Civilization. Los juegos de estrategia y gestión tienen algo que me invita a superar los retos que me proponen";
      cita.innerHTML =
        "«Hay que inyectarse de fantasía cada día para no morir de realidad»";
      referencia.innerHTML = "-   Ray Bradbury";
    }
  );
  //item5
  list.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.addEventListener(
    "click",
    () => {
      list.firstElementChild.classList.remove("bgBlack");
      list.firstElementChild.classList.add("item1");
      list.firstElementChild.nextElementSibling.classList.remove("bgBlack");
      list.firstElementChild.nextElementSibling.classList.add("item1");
      list.firstElementChild.nextElementSibling.nextElementSibling.classList.remove(
        "bgBlack"
      );
      list.firstElementChild.nextElementSibling.nextElementSibling.classList.add(
        "item1"
      );
      list.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove(
        "bgBlack"
      );
      list.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.classList.add(
        "item1"
      );
      list.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove(
        "item1"
      );
      list.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.add(
        "bgBlack"
      );
      curiosidad.innerHTML =
        "Como habrás notado desde que entraste en esta página, los juegos de mesa son mi pasión. Que puede haber mejor que compartir buenos momentos rodeado de la gente que quieres sin máquinas de por medio";
      cita.innerHTML =
        "«No dejamos de jugar porque nos volvamos viejos, nos volvemos viejos porque dejamos de jugar»";
      referencia.innerHTML = "-   Benjamin Franklin";
    }
  );
});
