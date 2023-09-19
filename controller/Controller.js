import Urlap from "../view/UrlapView.js";
import Megjelenit from "../view/MegjelenitView.js";
import Model from "../model/Model.js";
class Controller {
  constructor() {
    const szuloELEM = $(".tarolo");
    const szuloELEM2 = $(".ujadat");
    const MODEL = new Model();
    new Megjelenit(MODEL.getlist(), szuloELEM);
    new Urlap({ tevekenyseg: "", kirak: "" }, szuloELEM2);

    $(window).on("torles", (event) => {
      console.log(event.detail);
    });
    $(window).on("ujAdatHozzaAdas", (event) => {
      console.log(event.detail);
      MODEL.ujAdat(event.detail);
      szuloELEM.empty();
      new Megjelenit(MODEL.getlist(), szuloELEM);
    });
  }
}

export default Controller;
