import waren from "../../data/Patrizier 4/waren.json";

export const PageBedarfsrechnerP4 = () => {
  return /*html*/ `
    <div class="BedarfsrechnerP4">
        <h2 class="ueberschrift">Bedarfsrechner</h2>
        <div>
            <form action="">
                Bedarf für
                <input type="text" name="" placeholder="Anzahl" id="bewohneranzahl">
                <label for="bewohner">Bewohner</label>
                für
                <input type="text" name="" placeholder="volle Tage" id="tage">
                Tage
                <button class="btnberechnenP4">berechnen</button>
                <input type="reset">
            </form>
            <section class="bedarfsrechner">
                <table>
                    <thead>
                        <tr>
                            <td>Ware</td>
                            <td>Anzahl</td>
                            <td>Gewinn</td>
                            <td>Ware</td>
                            <td>Anzahl</td>
                            <td>Gewinn</td>
                            <td>Gesamt</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                              <div class="image-container">
                                <img src="img/P4/Holz.png" alt="" id="hover-image">
                                <span class="hover-text">Holz</span>
                              </div>
                            </td>  
                            <td class="bedarfHolz">0</td>
                            <td class="gewinnHolz">0</td>
                            <td>
                              <div class="image-container">
                                <img src="img/P4/Tuch.png" alt="" id="hover-image">
                                <span class="hover-text">Tuch</span>
                              </div>
                            </td>
                            <td class="bedarfTuch">0</td>
                            <td class="gewinnTuch">0</td>
                            <td>Konvoigröße</td>
                            <td class="konvoi">0</td>
                        </tr>
                        <tr>
                            <td>
                              <div class="image-container">
                                <img src="img/P4/Ziegel.png" alt="" id="hover-image">
                                <span class="hover-text">Ziegel</span>
                              </div>
                            </td>
                            <td class="bedarfZiegel">0</td>
                            <td class="gewinnZiegel">0</td>
                            <td>
                              <div class="image-container">
                                <img src="img/P4/Bier.png" alt="" id="hover-image">
                                <span class="hover-text">Bier</span>
                              </div>
                            </td>
                            <td class="bedarfBier">0</td>
                            <td class="gewinnBier">0</td>
                            <td>Profit</td>
                            <td class="allprofit">0</td>
                        </tr>
                        <tr>
                            <td>
                              <div class="image-container">
                                <img src="img/P4/Getreide.png" alt="" id="hover-image">
                                <span class="hover-text">Getreide</span>
                              </div>
                            </td>
                            <td class="bedarfGetreide">0</td>
                            <td class="gewinnGetreide">0</td>
                            <td>
                              <div class="image-container">
                                <img src="img/P4/Stockfisch.png" alt="" id="hover-image">
                                <span class="hover-text">Stockfisch</span>
                              </div>
                            </td>
                            <td class="bedarfStockfisch">0</td>
                            <td class="gewinnStockfisch">0</td>
                        </tr>
                        <tr>
                            <td>
                              <div class="image-container">
                                <img src="img/P4/Hanf.png" alt="" id="hover-image">
                                <span class="hover-text">Hanf</span>
                              </div>
                            </td>
                            <td class="bedarfHanf">0</td>
                            <td class="gewinnHanf">0</td>
                            <td>
                              <div class="image-container">
                                <img src="img/P4/Kleidung.png" alt="" id="hover-image">
                                <span class="hover-text">Kleidung</span>
                              </div>
                            </td>
                            <td class="bedarfKleidung">0</td>
                            <td class="gewinnKleidung">0</td>
                        </tr>
                        <tr>
                            <td>
                              <div class="image-container">
                                <img src="img/P4/.Wollepng" alt="" id="hover-image">
                                <span class="hover-text">Wolle</span>
                              </div>
                            </td>
                            <td class="bedarfWolle">0</td>
                            <td class="gewinnWolle">0</td>
                            <td>
                              <div class="image-container">
                                <img src="img/P4/Käse.png" alt="" id="hover-image">
                                <span class="hover-text">Käse</span>
                              </div>
                            </td>
                            <td class="bedarfKäse">0</td>
                            <td class="gewinnKäse">0</td>
                        </tr>
                        <tr>
                            <td>
                              <div class="image-container">
                                <img src="img/P4/Rohmetalle.png" alt="" id="hover-image">
                                <span class="hover-text">Rohmetalle</span>
                              </div>
                            </td>
                            <td class="bedarfRohmetalle">0</td>
                            <td class="gewinnRohmetalle">0</td>
                            <td>
                              <div class="image-container">
                                <img src="img/P4/Pech.png" alt="" id="hover-image">
                                <span class="hover-text">Pech</span>
                              </div>
                            </td>
                            <td class="bedarfPech">0</td>
                            <td class="gewinnPech">0</td>
                        </tr>
                        <tr>
                            <td>
                              <div class="image-container">
                                <img src="img/P4/Honig.png" alt="" id="hover-image">
                                <span class="hover-text">Honig</span>
                              </div>
                            </td>
                            <td class="bedarfHonig">0</td>
                            <td class="gewinnHonig">0</td>
                            <td>
                              <div class="image-container">
                                <img src="img/P4/Felle.png" alt="" id="hover-image">
                                <span class="hover-text">Felle</span>
                              </div>
                            </td>
                            <td class="bedarfFelle">0</td>
                            <td class="gewinnFelle">0</td>
                        </tr>
                        <tr>
                            <td>
                              <div class="image-container">
                                <img src="img/P4/Salz.png" alt="" id="hover-image">
                                <span class="hover-text">Salz</span>
                              </div>
                            </td>
                            <td class="bedarfSalz">0</td>
                            <td class="gewinnSalz">0</td>
                            <td>
                              <div class="image-container">
                                <img src="img/P4/Fleisch.png" alt="" id="hover-image">
                                <span class="hover-text">Fleisch</span>
                              </div>
                            </td>
                            <td class="bedarfFleisch">0</td>
                            <td class="gewinnFleisch">0</td>
                        </tr>
                        <tr>
                            <td>
                              <div class="image-container">
                                <img src="img/P4/Metallwaren.png" alt="" id="hover-image">
                                <span class="hover-text">Metallwaren</span>
                              </div>
                            </td>
                            <td class="bedarfMetallwaren">0</td>
                            <td class="gewinnMetallwaren">0</td>
                            <td>
                              <div class="image-container">
                                <img src="img/P4/Wein.png" alt="" id="hover-image">
                                <span class="hover-text">Wein</span>
                              </div>
                            </td>
                            <td class="bedarfWein">0</td>
                            <td class="gewinnWein">0</td>
                        </tr>
                        <tr>
                            <td>
                              <div class="image-container">
                                <img src="img/P4/Met.png" alt="" id="hover-image">
                                <span class="hover-text">Met</span>
                              </div>
                            </td>
                            <td class="bedarfMet">0</td>
                            <td class="gewinnMet">0</td>
                            <td>
                              <div class="image-container">
                                <img src="img/P4/Gewürze.png" alt="" id="hover-image">
                                <span class="hover-text">Gewürze</span>
                              </div>
                            </td>
                            <td class="bedarfGewürze">0</td>
                            <td class="gewinnGewürze">0</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>

    </div>
    
 `;
};

export const attachPageBedarfsrechnerP4Events = () => {
  const btn = document.querySelector(".btnberechnenP4");
  btn?.addEventListener("click", (e: Event) => {
    e.preventDefault();

    const _bewohneranzahlElem =
      document.querySelector<HTMLInputElement>("#bewohneranzahl");

    const _tageElem = document.querySelector<HTMLInputElement>("#tage");

    const _konvoiElem = document.querySelector<HTMLInputElement>(".konvoi");

    const _allprofitElem =
      document.querySelector<HTMLInputElement>(".allprofit");

    // Holz
    const _bedarfHolzElem =
      document.querySelector<HTMLInputElement>(".bedarfHolz");
    const _bedarfHolz = waren.find((m) => m.ware === "Holz")?.bedarf;
    const _gewinnHolzElem =
      document.querySelector<HTMLInputElement>(".gewinnHolz");
    const _gewinnHolz = waren.find((m) => m.ware === "Holz")?.verkauf;

    // Ziegel
    const _bedarfZiegelElem =
      document.querySelector<HTMLInputElement>(".bedarfZiegel");
    const _bedarfZiegel = waren.find((m) => m.ware === "Ziegel")?.bedarf;
    const _gewinnZiegelElem =
      document.querySelector<HTMLInputElement>(".gewinnZiegel");
    const _gewinnZiegel = waren.find((m) => m.ware === "Ziegel")?.verkauf;

    // Getreide
    const _bedarfGetreideElem =
      document.querySelector<HTMLInputElement>(".bedarfGetreide");
    const _bedarfGetreide = waren.find((m) => m.ware === "Getreide")?.bedarf;
    const _gewinnGetreideElem =
      document.querySelector<HTMLInputElement>(".gewinnGetreide");
    const _gewinnGetreide = waren.find((m) => m.ware === "Getreide")?.verkauf;

    // Hanf
    const _bedarfHanfElem =
      document.querySelector<HTMLInputElement>(".bedarfHanf");
    const _bedarfHanf = waren.find((m) => m.ware === "Hanf")?.bedarf;
    const _gewinnHanfElem =
      document.querySelector<HTMLInputElement>(".gewinnHanf");
    const _gewinnHanf = waren.find((m) => m.ware === "Hanf")?.verkauf;

    // Wolle
    const _bedarfWolleElem =
      document.querySelector<HTMLInputElement>(".bedarfWolle");
    const _bedarfWolle = waren.find((m) => m.ware === "Wolle")?.bedarf;
    const _gewinnWolleElem =
      document.querySelector<HTMLInputElement>(".gewinnWolle");
    const _gewinnWolle = waren.find((m) => m.ware === "Wolle")?.verkauf;

    // Rohmetalle
    const _bedarfRohmetalleElem =
      document.querySelector<HTMLInputElement>(".bedarfRohmetalle");
    const _bedarfRohmetalle = waren.find(
      (m) => m.ware === "Rohmetalle"
    )?.bedarf;
    const _gewinnRohmetalleElem =
      document.querySelector<HTMLInputElement>(".gewinnRohmetalle");
    const _gewinnRohmetalle = waren.find(
      (m) => m.ware === "Rohmetalle"
    )?.verkauf;

    // Honig
    const _bedarfHonigElem =
      document.querySelector<HTMLInputElement>(".bedarfHonig");
    const _bedarfHonig = waren.find((m) => m.ware === "Honig")?.bedarf;
    const _gewinnHonigElem =
      document.querySelector<HTMLInputElement>(".gewinnHonig");
    const _gewinnHonig = waren.find((m) => m.ware === "Honig")?.verkauf;

    // Salz
    const _bedarfSalzElem =
      document.querySelector<HTMLInputElement>(".bedarfSalz");
    const _bedarfSalz = waren.find((m) => m.ware === "Salz")?.bedarf;
    const _gewinnSalzElem =
      document.querySelector<HTMLInputElement>(".gewinnSalz");
    const _gewinnSalz = waren.find((m) => m.ware === "Salz")?.verkauf;

    // Metallwaren
    const _bedarfMetallwarenElem =
      document.querySelector<HTMLInputElement>(".bedarfMetallwaren");
    const _bedarfMetallwaren = waren.find(
      (m) => m.ware === "Metallwaren"
    )?.bedarf;
    const _gewinnMetallwarenElem =
      document.querySelector<HTMLInputElement>(".gewinnMetallwaren");
    const _gewinnMetallwaren = waren.find(
      (m) => m.ware === "Metallwaren"
    )?.verkauf;

    // Met
    const _bedarfMetElem =
      document.querySelector<HTMLInputElement>(".bedarfMet");
    const _bedarfMet = waren.find((m) => m.ware === "Met")?.bedarf;
    const _gewinnMetElem =
      document.querySelector<HTMLInputElement>(".gewinnMet");
    const _gewinnMet = waren.find((m) => m.ware === "Met")?.verkauf;

    // Tuch
    const _bedarfTuchElem =
      document.querySelector<HTMLInputElement>(".bedarfTuch");
    const _bedarfTuch = waren.find((m) => m.ware === "Tuch")?.bedarf;
    const _gewinnTuchElem =
      document.querySelector<HTMLInputElement>(".gewinnTuch");
    const _gewinnTuch = waren.find((m) => m.ware === "Tuch")?.verkauf;

    // Bier
    const _bedarfBierElem =
      document.querySelector<HTMLInputElement>(".bedarfBier");
    const _bedarfBier = waren.find((m) => m.ware === "Bier")?.bedarf;
    const _gewinnBierElem =
      document.querySelector<HTMLInputElement>(".gewinnBier");
    const _gewinnBier = waren.find((m) => m.ware === "Bier")?.verkauf;

    // Stockfisch
    const _bedarfStockfischElem =
      document.querySelector<HTMLInputElement>(".bedarfStockfisch");
    const _bedarfStockfisch = waren.find(
      (m) => m.ware === "Stockfisch"
    )?.bedarf;
    const _gewinnStockfischElem =
      document.querySelector<HTMLInputElement>(".gewinnStockfisch");
    const _gewinnStockfisch = waren.find(
      (m) => m.ware === "Stockfisch"
    )?.verkauf;

    // Kleidung
    const _bedarfKleidungElem =
      document.querySelector<HTMLInputElement>(".bedarfKleidung");
    const _bedarfKleidung = waren.find((m) => m.ware === "Kleidung")?.bedarf;
    const _gewinnKleidungElem =
      document.querySelector<HTMLInputElement>(".gewinnKleidung");
    const _gewinnKleidung = waren.find((m) => m.ware === "Kleidung")?.verkauf;

    // Käse
    const _bedarfKäseElem =
      document.querySelector<HTMLInputElement>(".bedarfKäse");
    const _bedarfKäse = waren.find((m) => m.ware === "Käse")?.bedarf;
    const _gewinnKäseElem =
      document.querySelector<HTMLInputElement>(".gewinnKäse");
    const _gewinnKäse = waren.find((m) => m.ware === "Käse")?.verkauf;

    // Pech
    const _bedarfPechElem =
      document.querySelector<HTMLInputElement>(".bedarfPech");
    const _bedarfPech = waren.find((m) => m.ware === "Pech")?.bedarf;
    const _gewinnPechElem =
      document.querySelector<HTMLInputElement>(".gewinnPech");
    const _gewinnPech = waren.find((m) => m.ware === "Pech")?.verkauf;

    // Felle
    const _bedarfFelleElem =
      document.querySelector<HTMLInputElement>(".bedarfFelle");
    const _bedarfFelle = waren.find((m) => m.ware === "Felle")?.bedarf;
    const _gewinnFelleElem =
      document.querySelector<HTMLInputElement>(".gewinnFelle");
    const _gewinnFelle = waren.find((m) => m.ware === "Felle")?.verkauf;

    // Fleisch
    const _bedarfFleischElem =
      document.querySelector<HTMLInputElement>(".bedarfFleisch");
    const _bedarfFleisch = waren.find((m) => m.ware === "Fleisch")?.bedarf;
    const _gewinnFleischElem =
      document.querySelector<HTMLInputElement>(".gewinnFleisch");
    const _gewinnFleisch = waren.find((m) => m.ware === "Fleisch")?.verkauf;

    // Wein
    const _bedarfWeinElem =
      document.querySelector<HTMLInputElement>(".bedarfWein");
    const _bedarfWein = waren.find((m) => m.ware === "Wein")?.bedarf;
    const _gewinnWeinElem =
      document.querySelector<HTMLInputElement>(".gewinnWein");
    const _gewinnWein = waren.find((m) => m.ware === "Wein")?.verkauf;

    // Gewürze
    const _bedarfGewürzeElem =
      document.querySelector<HTMLInputElement>(".bedarfGewürze");
    const _bedarfGewürze = waren.find((m) => m.ware === "Gewürze")?.bedarf;
    const _gewinnGewürzeElem =
      document.querySelector<HTMLInputElement>(".gewinnGewürze");
    const _gewinnGewürze = waren.find((m) => m.ware === "Gewürze")?.verkauf;

    if (
      _bewohneranzahlElem &&
      _tageElem &&
      _konvoiElem &&
      _allprofitElem &&
      _bedarfHolzElem &&
      _bedarfHolz &&
      _gewinnHolzElem &&
      _gewinnHolz &&
      _bedarfZiegelElem &&
      _bedarfZiegel &&
      _gewinnZiegelElem &&
      _gewinnZiegel &&
      _bedarfGetreideElem &&
      _bedarfGetreide &&
      _gewinnGetreideElem &&
      _gewinnGetreide &&
      _bedarfHanfElem &&
      _bedarfHanf &&
      _gewinnHanfElem &&
      _gewinnHanf &&
      _bedarfWolleElem &&
      _bedarfWolle &&
      _gewinnWolleElem &&
      _gewinnWolle &&
      _bedarfRohmetalleElem &&
      _bedarfRohmetalle &&
      _gewinnRohmetalleElem &&
      _gewinnRohmetalle &&
      _bedarfHonigElem &&
      _bedarfHonig &&
      _gewinnHonigElem &&
      _gewinnHonig &&
      _bedarfSalzElem &&
      _bedarfSalz &&
      _gewinnSalzElem &&
      _gewinnSalz &&
      _bedarfMetallwarenElem &&
      _bedarfMetallwaren &&
      _gewinnMetallwarenElem &&
      _gewinnMetallwaren &&
      _bedarfMetElem &&
      _bedarfMet &&
      _gewinnMetElem &&
      _gewinnMet &&
      _bedarfTuchElem &&
      _bedarfTuch &&
      _gewinnTuchElem &&
      _gewinnTuch &&
      _bedarfBierElem &&
      _bedarfBier &&
      _gewinnBierElem &&
      _gewinnBier &&
      _bedarfStockfischElem &&
      _bedarfStockfisch &&
      _gewinnStockfischElem &&
      _gewinnStockfisch &&
      _bedarfKleidungElem &&
      _bedarfKleidung &&
      _gewinnKleidungElem &&
      _gewinnKleidung &&
      _bedarfKäseElem &&
      _bedarfKäse &&
      _gewinnKäseElem &&
      _gewinnKäse &&
      _bedarfPechElem &&
      _bedarfPech &&
      _gewinnPechElem &&
      _gewinnPech &&
      _bedarfFelleElem &&
      _bedarfFelle &&
      _gewinnFelleElem &&
      _gewinnFelle &&
      _bedarfFleischElem &&
      _bedarfFleisch &&
      _gewinnFleischElem &&
      _gewinnFleisch &&
      _bedarfWeinElem &&
      _bedarfWein &&
      _gewinnWeinElem &&
      _gewinnWein &&
      _bedarfGewürzeElem &&
      _bedarfGewürze &&
      _gewinnGewürzeElem &&
      _gewinnGewürze
    ) {
      const bewohneranzahlElem = _bewohneranzahlElem;
      const tageElem = _tageElem;

      // Holz
      const bedarfHolzElem = _bedarfHolzElem;
      const bedarfHolz = _bedarfHolz;
      bedarfHolzElem.innerHTML = String(
        Math.round(
          Number(bewohneranzahlElem.value) * bedarfHolz * Number(tageElem.value)
        )
      );
      const gewinnHolzElem = _gewinnHolzElem;
      const gewinnHolz = _gewinnHolz;
      gewinnHolzElem.innerHTML = String(
        Math.round(Number(bedarfHolzElem.innerHTML) * gewinnHolz)
      );

      // Ziegel
      const bedarfZiegelElem = _bedarfZiegelElem;
      const bedarfZiegel = _bedarfZiegel;
      bedarfZiegelElem.innerHTML = String(
        Math.round(
          Number(bewohneranzahlElem.value) *
            bedarfZiegel *
            Number(tageElem.value)
        )
      );
      const gewinnZiegelElem = _gewinnZiegelElem;
      const gewinnZiegel = _gewinnZiegel;
      gewinnZiegelElem.innerHTML = String(
        Math.round(Number(bedarfZiegelElem.innerHTML) * gewinnZiegel)
      );

      // Getreide
      const bedarfGetreideElem = _bedarfGetreideElem;
      const bedarfGetreide = _bedarfGetreide;
      bedarfGetreideElem.innerHTML = String(
        Math.round(
          Number(bewohneranzahlElem.value) *
            bedarfGetreide *
            Number(tageElem.value)
        )
      );
      const gewinnGetreideElem = _gewinnGetreideElem;
      const gewinnGetreide = _gewinnGetreide;
      gewinnGetreideElem.innerHTML = String(
        Math.round(Number(bedarfGetreideElem.innerHTML) * gewinnGetreide)
      );

      // Hanf
      const bedarfHanfElem = _bedarfHanfElem;
      const bedarfHanf = _bedarfHanf;
      bedarfHanfElem.innerHTML = String(
        Math.round(
          Number(bewohneranzahlElem.value) * bedarfHanf * Number(tageElem.value)
        )
      );
      const gewinnHanfElem = _gewinnHanfElem;
      const gewinnHanf = _gewinnHanf;
      gewinnHanfElem.innerHTML = String(
        Math.round(Number(bedarfHanfElem.innerHTML) * gewinnHanf)
      );

      // Wolle
      const bedarfWolleElem = _bedarfWolleElem;
      const bedarfWolle = _bedarfWolle;
      bedarfWolleElem.innerHTML = String(
        Math.round(
          Number(bewohneranzahlElem.value) *
            bedarfWolle *
            Number(tageElem.value)
        )
      );
      const gewinnWolleElem = _gewinnWolleElem;
      const gewinnWolle = _gewinnWolle;
      gewinnWolleElem.innerHTML = String(
        Math.round(Number(bedarfWolleElem.innerHTML) * gewinnWolle)
      );

      // Rohmetalle
      const bedarfRohmetalleElem = _bedarfRohmetalleElem;
      const bedarfRohmetalle = _bedarfRohmetalle;
      bedarfRohmetalleElem.innerHTML = String(
        Math.round(
          Number(bewohneranzahlElem.value) *
            bedarfRohmetalle *
            Number(tageElem.value)
        )
      );
      const gewinnRohmetalleElem = _gewinnRohmetalleElem;
      const gewinnRohmetalle = _gewinnRohmetalle;
      gewinnRohmetalleElem.innerHTML = String(
        Math.round(Number(bedarfRohmetalleElem.innerHTML) * gewinnRohmetalle)
      );

      // Honig
      const bedarfHonigElem = _bedarfHonigElem;
      const bedarfHonig = _bedarfHonig;
      bedarfHonigElem.innerHTML = String(
        Math.round(
          Number(bewohneranzahlElem.value) *
            bedarfHonig *
            Number(tageElem.value)
        )
      );
      const gewinnHonigElem = _gewinnHonigElem;
      const gewinnHonig = _gewinnHonig;
      gewinnHonigElem.innerHTML = String(
        Math.round(Number(bedarfHonigElem.innerHTML) * gewinnHonig)
      );

      // Salz
      const bedarfSalzElem = _bedarfSalzElem;
      const bedarfSalz = _bedarfSalz;
      bedarfSalzElem.innerHTML = String(
        Math.round(
          Number(bewohneranzahlElem.value) * bedarfSalz * Number(tageElem.value)
        )
      );
      const gewinnSalzElem = _gewinnSalzElem;
      const gewinnSalz = _gewinnSalz;
      gewinnSalzElem.innerHTML = String(
        Math.round(Number(bedarfSalzElem.innerHTML) * gewinnSalz)
      );

      // Metallwaren
      const bedarfMetallwarenElem = _bedarfMetallwarenElem;
      const bedarfMetallwaren = _bedarfMetallwaren;
      bedarfMetallwarenElem.innerHTML = String(
        Math.round(
          Number(bewohneranzahlElem.value) *
            bedarfMetallwaren *
            Number(tageElem.value)
        )
      );
      const gewinnMetallwarenElem = _gewinnMetallwarenElem;
      const gewinnMetallwaren = _gewinnMetallwaren;
      gewinnMetallwarenElem.innerHTML = String(
        Math.round(Number(bedarfMetallwarenElem.innerHTML) * gewinnMetallwaren)
      );

      // Met
      const bedarfMetElem = _bedarfMetElem;
      const bedarfMet = _bedarfMet;
      bedarfMetElem.innerHTML = String(
        Math.round(
          Number(bewohneranzahlElem.value) * bedarfMet * Number(tageElem.value)
        )
      );
      const gewinnMetElem = _gewinnMetElem;
      const gewinnMet = _gewinnMet;
      gewinnMetElem.innerHTML = String(
        Math.round(Number(bedarfMetElem.innerHTML) * gewinnMet)
      );

      // Tuch
      const bedarfTuchElem = _bedarfTuchElem;
      const bedarfTuch = _bedarfTuch;
      bedarfTuchElem.innerHTML = String(
        Math.round(
          Number(bewohneranzahlElem.value) * bedarfTuch * Number(tageElem.value)
        )
      );
      const gewinnTuchElem = _gewinnTuchElem;
      const gewinnTuch = _gewinnTuch;
      gewinnTuchElem.innerHTML = String(
        Math.round(Number(bedarfTuchElem.innerHTML) * gewinnTuch)
      );

      // Bier
      const bedarfBierElem = _bedarfBierElem;
      const bedarfBier = _bedarfBier;
      bedarfBierElem.innerHTML = String(
        Math.round(
          Number(bewohneranzahlElem.value) * bedarfBier * Number(tageElem.value)
        )
      );
      const gewinnBierElem = _gewinnBierElem;
      const gewinnBier = _gewinnBier;
      gewinnBierElem.innerHTML = String(
        Math.round(Number(bedarfBierElem.innerHTML) * gewinnBier)
      );

      // Stockfisch
      const bedarfStockfischElem = _bedarfStockfischElem;
      const bedarfStockfisch = _bedarfStockfisch;
      bedarfStockfischElem.innerHTML = String(
        Math.round(
          Number(bewohneranzahlElem.value) *
            bedarfStockfisch *
            Number(tageElem.value)
        )
      );
      const gewinnStockfischElem = _gewinnStockfischElem;
      const gewinnStockfisch = _gewinnStockfisch;
      gewinnStockfischElem.innerHTML = String(
        Math.round(Number(bedarfStockfischElem.innerHTML) * gewinnStockfisch)
      );

      // Kleidung
      const bedarfKleidungElem = _bedarfKleidungElem;
      const bedarfKleidung = _bedarfKleidung;
      bedarfKleidungElem.innerHTML = String(
        Math.round(
          Number(bewohneranzahlElem.value) *
            bedarfKleidung *
            Number(tageElem.value)
        )
      );
      const gewinnKleidungElem = _gewinnKleidungElem;
      const gewinnKleidung = _gewinnKleidung;
      gewinnKleidungElem.innerHTML = String(
        Math.round(Number(bedarfKleidungElem.innerHTML) * gewinnKleidung)
      );

      // Käse
      const bedarfKäseElem = _bedarfKäseElem;
      const bedarfKäse = _bedarfKäse;
      bedarfKäseElem.innerHTML = String(
        Math.round(
          Number(bewohneranzahlElem.value) * bedarfKäse * Number(tageElem.value)
        )
      );
      const gewinnKäseElem = _gewinnKäseElem;
      const gewinnKäse = _gewinnKäse;
      gewinnKäseElem.innerHTML = String(
        Math.round(Number(bedarfKäseElem.innerHTML) * gewinnKäse)
      );

      // Pech
      const bedarfPechElem = _bedarfPechElem;
      const bedarfPech = _bedarfPech;
      bedarfPechElem.innerHTML = String(
        Math.round(
          Number(bewohneranzahlElem.value) * bedarfPech * Number(tageElem.value)
        )
      );
      const gewinnPechElem = _gewinnPechElem;
      const gewinnPech = _gewinnPech;
      gewinnPechElem.innerHTML = String(
        Math.round(Number(bedarfPechElem.innerHTML) * gewinnPech)
      );

      // Felle
      const bedarfFelleElem = _bedarfFelleElem;
      const bedarfFelle = _bedarfFelle;
      bedarfFelleElem.innerHTML = String(
        Math.round(
          Number(bewohneranzahlElem.value) *
            bedarfFelle *
            Number(tageElem.value)
        )
      );
      const gewinnFelleElem = _gewinnFelleElem;
      const gewinnFelle = _gewinnFelle;
      gewinnFelleElem.innerHTML = String(
        Math.round(Number(bedarfFelleElem.innerHTML) * gewinnFelle)
      );

      // Fleisch
      const bedarfFleischElem = _bedarfFleischElem;
      const bedarfFleisch = _bedarfFleisch;
      bedarfFleischElem.innerHTML = String(
        Math.round(
          Number(bewohneranzahlElem.value) *
            bedarfFleisch *
            Number(tageElem.value)
        )
      );
      const gewinnFleischElem = _gewinnFleischElem;
      const gewinnFleisch = _gewinnFleisch;
      gewinnFleischElem.innerHTML = String(
        Math.round(Number(bedarfFleischElem.innerHTML) * gewinnFleisch)
      );

      // Wein
      const bedarfWeinElem = _bedarfWeinElem;
      const bedarfWein = _bedarfWein;
      bedarfWeinElem.innerHTML = String(
        Math.round(
          Number(bewohneranzahlElem.value) * bedarfWein * Number(tageElem.value)
        )
      );
      const gewinnWeinElem = _gewinnWeinElem;
      const gewinnWein = _gewinnWein;
      gewinnWeinElem.innerHTML = String(
        Math.round(Number(bedarfWeinElem.innerHTML) * gewinnWein)
      );

      // Gewürze
      const bedarfGewürzeElem = _bedarfGewürzeElem;
      const bedarfGewürze = _bedarfGewürze;
      bedarfGewürzeElem.innerHTML = String(
        Math.round(
          Number(bewohneranzahlElem.value) *
            bedarfGewürze *
            Number(tageElem.value)
        )
      );
      const gewinnGewürzeElem = _gewinnGewürzeElem;
      const gewinnGewürze = _gewinnGewürze;
      gewinnGewürzeElem.innerHTML = String(
        Math.round(Number(bedarfGewürzeElem.innerHTML) * gewinnGewürze)
      );

      // Konvoi
      const konvoiElem = _konvoiElem;
      konvoiElem.innerHTML = String(
        Number(bedarfHolzElem.innerHTML) +
          Number(bedarfZiegelElem.innerHTML) +
          Number(bedarfGetreideElem.innerHTML) +
          Number(bedarfHanfElem.innerHTML) +
          Number(bedarfWolleElem.innerHTML) +
          Number(bedarfRohmetalleElem.innerHTML) +
          Number(bedarfHonigElem.innerHTML) +
          Number(bedarfSalzElem.innerHTML) +
          Number(bedarfMetallwarenElem.innerHTML) +
          Number(bedarfMetElem.innerHTML) +
          Number(bedarfTuchElem.innerHTML) +
          Number(bedarfBierElem.innerHTML) +
          Number(bedarfStockfischElem.innerHTML) +
          Number(bedarfKleidungElem.innerHTML) +
          Number(bedarfKäseElem.innerHTML) +
          Number(bedarfPechElem.innerHTML) +
          Number(bedarfFelleElem.innerHTML) +
          Number(bedarfFleischElem.innerHTML) +
          Number(bedarfWeinElem.innerHTML) +
          Number(bedarfGewürzeElem.innerHTML)
      );

      // Profit
      const allprofitElem = _allprofitElem;
      allprofitElem.innerHTML = String(
        Number(gewinnHolzElem.innerHTML) +
          Number(gewinnZiegelElem.innerHTML) +
          Number(gewinnGetreideElem.innerHTML) +
          Number(gewinnHanfElem.innerHTML) +
          Number(gewinnWolleElem.innerHTML) +
          Number(gewinnRohmetalleElem.innerHTML) +
          Number(gewinnHonigElem.innerHTML) +
          Number(gewinnSalzElem.innerHTML) +
          Number(gewinnMetallwarenElem.innerHTML) +
          Number(gewinnMetElem.innerHTML) +
          Number(gewinnTuchElem.innerHTML) +
          Number(gewinnBierElem.innerHTML) +
          Number(gewinnStockfischElem.innerHTML) +
          Number(gewinnKleidungElem.innerHTML) +
          Number(gewinnKäseElem.innerHTML) +
          Number(gewinnPechElem.innerHTML) +
          Number(gewinnFelleElem.innerHTML) +
          Number(gewinnFleischElem.innerHTML) +
          Number(gewinnWeinElem.innerHTML) +
          Number(gewinnGewürzeElem.innerHTML)
      );
    }
  });
};
