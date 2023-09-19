class Urlap {
  #adat = {};
  constructor(adat, szuloELEM) {
    this.szuloELEM = szuloELEM;
    this.szuloELEM.html("<form >");
    this.formELEM = this.szuloELEM.children("form");
    this.#adat = adat;
    this.#urlapLetrehozasa();
    this.submitGomb = this.formELEM.children("div").children("#submit");
    this.submitGomb.on("click", (event) => {
      console.log("katt");
      event.preventDefault();
      this.#adatGyujt();
      this.#esemenyTrigger("ujAdatHozzaAdas");
    });
  }

  #urlapLetrehozasa() {
    let txt = "";
    for (const key in this.#adat) {
      txt += `<div class="form-group">
            <label for ="${key}"    >  ${this.#adat[key]}</label>
            <input type="text" class="form-control" id="${key}" name="${key}" value="${
        this.#adat[key]
      }">
            </div>`;
    }
    txt += `<div>
            <input type="submit" class="btn btn-primary" id="submit" value="Hozáad"></div>`;
    this.formELEM.html(txt);
  }
  #adatGyujt() {
    for (const key in this.#adat) {
      this.#adat[key] = $(`#${key}`).val();
    }
    console.log(this.#adat);
  }
  #esemenyTrigger(esemenynev) {
    const esemenyem = new CustomEvent(esemenynev, { detail: this.#adat });
    window.dispatchEvent(esemenyem);
  }
}

export default Urlap;
