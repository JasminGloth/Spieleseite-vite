import waren from "../../data/Port Royale 3/waren.json";

export const PageBedarfsrechnerPR3 = () => {
  return /*html*/ `
<div class="PageBedarfsrechnerPR3">
	<h2 class="überschrift">Bedarfsrechner</h2>
		<div>
		<form action="">
		Bedarf für
			<input type="text" name="" placeholder="Anzahl" id="bewohneranzahl">
			<label for="bewohner">Bewohner</label>
		für
			<input type="text" name="" placeholder="volle Tage" id="tage">
		Tage
			<button class="btnProcessbdrPR3">berechnen</button>
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
                <img src="img/PR3/PR3Holz.png" alt="" id="hover-image">
                <span class="hover-text">Holz</span>
              </div>
            </td>
						<td class="bdrholz">0</td>
            <td class="pr3profitholz">0</td>
						<td><div class="image-container">
                <img src="img/PR3/PR3Metallwaren.png" alt="" id="hover-image">
                <span class="hover-text">Metallwaren</span>
              </div></td>
						<td class="bdrwerkzeug">0</td>
            <td class="pr3profitwerkzeug">0</td>
					</tr>
					<tr>
						<td><div class="image-container">
                <img src="img/PR3/PR3Ziegel.png" alt="" id="hover-image">
                <span class="hover-text">Ziegel</span>
              </div></td>
						<td class="bdrziegel">0</td>
            <td class="pr3profitziegel">0</td>
						<td><div class="image-container">
                <img src="img/PR3/PR3Farbstoffe.png" alt="" id="hover-image">
                <span class="hover-text">Farbstoffe</span>
              </div></td>
						<td class="bdrfärbemittel">0</td>
            <td class="pr3profitfärbemittel">0</td>
            <td>Profit</td>
            <td class="pr3profit">0</td>
					</tr>
					<tr>
						<td><div class="image-container">
                <img src="img/PR3/PR3Weizen.png" alt="" id="hover-image">
                <span class="hover-text">Weizen</span>
              </div></td>
						<td class="bdrweizen">0</td>
            <td class="pr3profitweizen">0</td>
						<td><div class="image-container">
                <img src="img/PR3/PR3Kaffee.png" alt="" id="hover-image">
                <span class="hover-text">Kaffee</span>
              </div></td>
						<td class="bdrkaffee">0</td>
            <td class="pr3profitkaffee">0</td>
					</tr>
					<tr>
						<td><div class="image-container">
                <img src="img/PR3/PR3Früchte.png" alt="" id="hover-image">
                <span class="hover-text">Früchte</span>
              </div></td>
						<td class="bdrfrüchte">0</td>
            <td class="pr3profitfrüchte">0</td>
						<td><div class="image-container">
                <img src="img/PR3/PR3Kakao.png" alt="" id="hover-image">
                <span class="hover-text">Kakao</span>
              </div></td>
						<td class="bdrkakao">0</td>
            <td class="pr3profitkakao">0</td>
            <td>Konvoigröße</td>
						<td class="bdrkonvoi">0</td>
					</tr>
					<tr>
						<td><div class="image-container">
                <img src="img/PR3/PR3Mais.png" alt="" id="hover-image">
                <span class="hover-text">Mais</span>
              </div></td>
						<td class="bdrmais">0</td>
            <td class="pr3profitmais">0</td>
						<td><div class="image-container">
                <img src="img/PR3/PR3Tabak.png" alt="" id="hover-image">
                <span class="hover-text">Tabak</span>
              </div></td>
						<td class="bdrtabak">0</td>
            <td class="pr3profittabak">0</td>
					</tr>
					<tr>
						<td><div class="image-container">
                <img src="img/PR3/PR3Zucker.png" alt="" id="hover-image">
                <span class="hover-text">Zucker</span>
              </div></td>
						<td class="bdrzucker">0</td>
            <td class="pr3profitzucker">0</td>
						<td><div class="image-container">
                <img src="img/PR3/PR3Fleisch.png" alt="" id="hover-image">
                <span class="hover-text">Fleisch</span>
              </div></td>
						<td class="bdrfleisch">0</td>
            <td class="pr3profitfleisch">0</td>
					</tr>
					<tr>
						<td><div class="image-container">
                <img src="img/PR3/PR3Hanf.png" alt="" id="hover-image">
                <span class="hover-text">Hanf</span>
              </div></td>
						<td class="bdrhanf">0</td>
            <td class="pr3profithanf">0</td>
						<td><div class="image-container">
                <img src="img/PR3/PR3Kleidung.png" alt="" id="hover-image">
                <span class="hover-text">Kleidung</span>
              </div></td>
						<td class="bdrkleidung">0</td>
            <td class="pr3profitkleidung">0</td>
					</tr>
					<tr>
						<td><div class="image-container">
                <img src="img/PR3/PR3Tuch.png" alt="" id="hover-image">
                <span class="hover-text">Tuch</span>
              </div></td>
						<td class="bdrtuch">0</td>
            <td class="pr3profittuch">0</td>
						<td><div class="image-container">
                <img src="img/PR3/PR3Seil.png" alt="" id="hover-image">
                <span class="hover-text">Seil</span>
              </div></td>
						<td class="bdrseil">0</td>
            <td class="pr3profitseil">0</td>
					</tr>
					<tr>
						<td><div class="image-container">
                <img src="img/PR3/PR3Metall.png" alt="" id="hover-image">
                <span class="hover-text">Metall</span>
              </div></td>
						<td class="bdrmetall">0</td>
            <td class="pr3profitmetall">0</td>
						<td><div class="image-container">
                <img src="img/PR3/PR3Rum.png" alt="" id="hover-image">
                <span class="hover-text">Rum</span>
              </div></td>
						<td class="bdrrum">0</td>
            <td class="pr3profitrum">0</td>
					</tr>
					<tr>
						<td><div class="image-container">
                <img src="img/PR3/PR3Baumwolle.png" alt="" id="hover-image">
                <span class="hover-text">Baumwolle</span>
              </div></td>
						<td class="bdrbaumwolle">0</td>
            <td class="pr3profitbaumwolle">0</td>
						<td><div class="image-container">
                <img src="img/PR3/PR3Backwaren.png" alt="" id="hover-image">
                <span class="hover-text">Backwaren</span>
              </div></td>
						<td class="bdrbackwaren">0</td>
            <td class="pr3profitbackwaren">0</td>
					</tr>
				</tbody>
			</table>   
		</section>
	</div>
		
</div>
`;
};

export const attachPageBedarfsrechnerPR3Events = () => {
  const btn = document.querySelector(".btnProcessbdrPR3");
  btn?.addEventListener("click", (e: Event) => {
    e.preventDefault();

    const _bewohneranzahlElem =
      document.querySelector<HTMLInputElement>("#bewohneranzahl");

    const _tageElem = document.querySelector<HTMLInputElement>("#tage");

    const _bdrkonvoiElem =
      document.querySelector<HTMLInputElement>(".bdrkonvoi");

    const _pr3profitElem =
      document.querySelector<HTMLInputElement>(".pr3profit");
      
    // Holz
    const _bdrholzElem = document.querySelector<HTMLInputElement>(".bdrholz");
    const _bdholz = waren.find((m) => m.name === "Holz")?.bd;
    const _pr3profitholzElem =
      document.querySelector<HTMLInputElement>(".pr3profitholz");
    const _pr3profitholz = waren.find((m) => m.name === "Holz")?.verkauf;

    // Ziegel
    const _bdrziegelElem =
      document.querySelector<HTMLInputElement>(".bdrziegel");
    const _bdziegel = waren.find((m) => m.name === "Ziegel")?.bd;
    const _pr3profitziegelElem =
      document.querySelector<HTMLInputElement>(".pr3profitziegel");
    const _pr3profitziegel = waren.find((m) => m.name === "Ziegel")?.verkauf;

    // Weizen
    const _bdrweizenElem =
      document.querySelector<HTMLInputElement>(".bdrweizen");
    const _bdweizen = waren.find((m) => m.name === "Weizen")?.bd;
    const _pr3profitweizenElem =
      document.querySelector<HTMLInputElement>(".pr3profitweizen");
    const _pr3profitweizen = waren.find((m) => m.name === "Weizen")?.verkauf;

    // Früchte
    const _bdrfrüchteElem = document.querySelector<HTMLInputElement>(".bdrfrüchte");
    const _bdfrüchte = waren.find((m) => m.name === "Früchte")?.bd;
    const _pr3profitfrüchteElem =
      document.querySelector<HTMLInputElement>(".pr3profitfrüchte");
    const _pr3profitfrüchte = waren.find((m) => m.name === "Früchte")?.verkauf;

    // Mais
    const _bdrmaisElem = document.querySelector<HTMLInputElement>(".bdrmais");
    const _bdmais = waren.find((m) => m.name === "Mais")?.bd;
    const _pr3profitmaisElem =
      document.querySelector<HTMLInputElement>(".pr3profitmais");
    const _pr3profitmais = waren.find((m) => m.name === "Mais")?.verkauf;

    // Zucker
    const _bdrzuckerElem =
      document.querySelector<HTMLInputElement>(".bdrzucker");
    const _bdzucker = waren.find((m) => m.name === "Zucker")?.bd;
    const _pr3profitzuckerElem =
      document.querySelector<HTMLInputElement>(".pr3profitzucker");
    const _pr3profitzucker = waren.find((m) => m.name === "Zucker")?.verkauf;

    // Hanf
    const _bdrhanfElem = document.querySelector<HTMLInputElement>(".bdrhanf");
    const _bdhanf = waren.find((m) => m.name === "Hanf")?.bd;
    const _pr3profithanfElem =
      document.querySelector<HTMLInputElement>(".pr3profithanf");
    const _pr3profithanf = waren.find((m) => m.name === "Hanf")?.verkauf;

    // Tuch
    const _bdrtuchElem = document.querySelector<HTMLInputElement>(".bdrtuch");
    const _bdtuch = waren.find((m) => m.name === "Tuch")?.bd;
    const _pr3profittuchElem =
      document.querySelector<HTMLInputElement>(".pr3profittuch");
    const _pr3profittuch = waren.find((m) => m.name === "Tuch")?.verkauf;

    // Metall
    const _bdrmetallElem =
      document.querySelector<HTMLInputElement>(".bdrmetall");
    const _bdmetall = waren.find((m) => m.name === "Metall")?.bd;
    const _pr3profitmetallElem =
      document.querySelector<HTMLInputElement>(".pr3profitmetall");
    const _pr3profitmetall = waren.find((m) => m.name === "Metall")?.verkauf;

    // Baumwolle
    const _bdrbaumwolleElem =
      document.querySelector<HTMLInputElement>(".bdrbaumwolle");
    const _bdbaumwolle = waren.find((m) => m.name === "Baumwolle")?.bd;
    const _pr3profitbaumwolleElem = document.querySelector<HTMLInputElement>(
      ".pr3profitbaumwolle"
    );
    const _pr3profitbaumwolle = waren.find(
      (m) => m.name === "Baumwolle"
    )?.verkauf;

    // Werkzeug
    const _bdrwerkzeugElem =
      document.querySelector<HTMLInputElement>(".bdrwerkzeug");
    const _bdwerkzeug = waren.find((m) => m.name === "Werkzeug")?.bd;
    const _pr3profitwerkzeugElem =
      document.querySelector<HTMLInputElement>(".pr3profitwerkzeug");
    const _pr3profitwerkzeug = waren.find(
      (m) => m.name === "Werkzeug"
    )?.verkauf;

    // Färbemittel
    const _bdrfärbemittelElem =
      document.querySelector<HTMLInputElement>(".bdrfärbemittel");
    const _bdfärbemittel = waren.find((m) => m.name === "Färbemittel")?.bd;
    const _pr3profitfärbemittelElem = document.querySelector<HTMLInputElement>(
      ".pr3profitfärbemittel"
    );
    const _pr3profitfärbemittel = waren.find(
      (m) => m.name === "Färbemittel"
    )?.verkauf;

    // Kaffee
    const _bdrkaffeeElem =
      document.querySelector<HTMLInputElement>(".bdrkaffee");
    const _bdkaffee = waren.find((m) => m.name === "Kaffee")?.bd;
    const _pr3profitkaffeeElem =
      document.querySelector<HTMLInputElement>(".pr3profitkaffee");
    const _pr3profitkaffee = waren.find((m) => m.name === "Kaffee")?.verkauf;

    // Kakao
    const _bdrkakaoElem = document.querySelector<HTMLInputElement>(".bdrkakao");
    const _bdkakao = waren.find((m) => m.name === "Kakao")?.bd;
    const _pr3profitkakaoElem =
      document.querySelector<HTMLInputElement>(".pr3profitkakao");
    const _pr3profitkakao = waren.find((m) => m.name === "Kakao")?.verkauf;

    // Tabak
    const _bdrtabakElem = document.querySelector<HTMLInputElement>(".bdrtabak");
    const _bdtabak = waren.find((m) => m.name === "Tabak")?.bd;
    const _pr3profittabakElem =
      document.querySelector<HTMLInputElement>(".pr3profittabak");
    const _pr3profittabak = waren.find((m) => m.name === "Tabak")?.verkauf;

    // Fleisch
    const _bdrfleischElem =
      document.querySelector<HTMLInputElement>(".bdrfleisch");
    const _bdfleisch = waren.find((m) => m.name === "Fleisch")?.bd;
    const _pr3profitfleischElem =
      document.querySelector<HTMLInputElement>(".pr3profitfleisch");
    const _pr3profitfleisch = waren.find((m) => m.name === "Fleisch")?.verkauf;

    // Kleidung
    const _bdrkleidungElem =
      document.querySelector<HTMLInputElement>(".bdrkleidung");
    const _bdkleidung = waren.find((m) => m.name === "Kleidung")?.bd;
    const _pr3profitkleidungElem =
      document.querySelector<HTMLInputElement>(".pr3profitkleidung");
    const _pr3profitkleidung = waren.find(
      (m) => m.name === "Kleidung"
    )?.verkauf;

    // Seil
    const _bdrseilElem = document.querySelector<HTMLInputElement>(".bdrseil");
    const _bdseil = waren.find((m) => m.name === "Seil")?.bd;
    const _pr3profitseilElem =
      document.querySelector<HTMLInputElement>(".pr3profitseil");
    const _pr3profitseil = waren.find((m) => m.name === "Seil")?.verkauf;

    // Rum
    const _bdrrumElem = document.querySelector<HTMLInputElement>(".bdrrum");
    const _bdrum = waren.find((m) => m.name === "Rum")?.bd;
    const _pr3profitrumElem =
      document.querySelector<HTMLInputElement>(".pr3profitrum");
    const _pr3profitrum = waren.find((m) => m.name === "Rum")?.verkauf;

    // Backwaren
    const _bdrbackwarenElem =
      document.querySelector<HTMLInputElement>(".bdrbackwaren");
    const _bdbackwaren = waren.find((m) => m.name === "Backwaren")?.bd;
    const _pr3profitbackwarenElem = document.querySelector<HTMLInputElement>(
      ".pr3profitbackwaren"
    );
    const _pr3profitbackwaren = waren.find(
      (m) => m.name === "Backwaren"
    )?.verkauf;

    if (
      _bewohneranzahlElem &&
      _tageElem &&
      _bdrkonvoiElem &&
      _pr3profitElem &&
      _bdrholzElem &&
      _bdholz &&
      _bdrziegelElem &&
      _bdziegel &&
      _bdrweizenElem &&
      _bdweizen &&
      _bdrfrüchteElem &&
      _bdfrüchte &&
      _bdrmaisElem &&
      _bdmais &&
      _bdrzuckerElem &&
      _bdzucker &&
      _bdrhanfElem &&
      _bdhanf &&
      _bdrtuchElem &&
      _bdtuch &&
      _bdrmetallElem &&
      _bdmetall &&
      _bdrbaumwolleElem &&
      _bdbaumwolle &&
      _bdrwerkzeugElem &&
      _bdwerkzeug &&
      _bdrfärbemittelElem &&
      _bdfärbemittel &&
      _bdrkaffeeElem &&
      _bdkaffee &&
      _bdrkakaoElem &&
      _bdkakao &&
      _bdrtabakElem &&
      _bdtabak &&
      _bdrfleischElem &&
      _bdfleisch &&
      _bdrkleidungElem &&
      _bdkleidung &&
      _bdrseilElem &&
      _bdseil &&
      _bdrrumElem &&
      _bdrum &&
      _bdrbackwarenElem &&
      _bdbackwaren &&
      _pr3profitholzElem &&
      _pr3profitholz &&
      _pr3profitziegelElem &&
      _pr3profitziegel &&
      _pr3profitweizenElem &&
      _pr3profitweizen &&
      _pr3profitfrüchteElem &&
      _pr3profitfrüchte &&
      _pr3profitmaisElem &&
      _pr3profitmais &&
      _pr3profitzuckerElem &&
      _pr3profitzucker &&
      _pr3profithanfElem &&
      _pr3profithanf &&
      _pr3profittuchElem &&
      _pr3profittuch &&
      _pr3profitmetallElem &&
      _pr3profitmetall &&
      _pr3profitbaumwolleElem &&
      _pr3profitbaumwolle &&
      _pr3profitwerkzeugElem &&
      _pr3profitwerkzeug &&
      _pr3profitfärbemittelElem &&
      _pr3profitfärbemittel &&
      _pr3profitkaffeeElem &&
      _pr3profitkaffee &&
      _pr3profitkakaoElem &&
      _pr3profitkakao &&
      _pr3profittabakElem &&
      _pr3profittabak &&
      _pr3profitfleischElem &&
      _pr3profitfleisch &&
      _pr3profitkleidungElem &&
      _pr3profitkleidung &&
      _pr3profitseilElem &&
      _pr3profitseil &&
      _pr3profitrumElem &&
      _pr3profitrum &&
      _pr3profitbackwarenElem &&
      _pr3profitbackwaren
    ) {
      const bewohneranzahlElem = _bewohneranzahlElem;
      const tageElem = _tageElem;

      // Holz
      const bdrholzElem = _bdrholzElem;
      const bdholz = _bdholz;
      bdrholzElem.innerHTML = String(
        Math.round(
          Number(bewohneranzahlElem.value) * bdholz * Number(tageElem.value)
        )
      );
      const pr3profitholzElem = _pr3profitholzElem;
      const pr3profitholz = _pr3profitholz;
      pr3profitholzElem.innerHTML = String(
        Math.round(Number(bdrholzElem.innerHTML) * pr3profitholz)
      );

      // Ziegel
      const bdrziegelElem = _bdrziegelElem;
      const bdziegel = _bdziegel;
      bdrziegelElem.innerHTML = String(
        Math.round(
          Number(bewohneranzahlElem.value) * bdziegel * Number(tageElem.value)
        )
      );
      const pr3profitziegelElem = _pr3profitziegelElem;
      const pr3profitziegel = _pr3profitziegel;
      pr3profitziegelElem.innerHTML = String(
        Math.round(Number(bdrziegelElem.innerHTML) * pr3profitziegel)
      );

      // Weizen
      const bdrweizenElem = _bdrweizenElem;
      const bdweizen = _bdweizen;
      bdrweizenElem.innerHTML = String(
        Math.round(
          Number(bewohneranzahlElem.value) * bdweizen * Number(tageElem.value)
        )
      );
      const pr3profitweizenElem = _pr3profitweizenElem;
      const pr3profitweizen = _pr3profitweizen;
      pr3profitweizenElem.innerHTML = String(
        Math.round(Number(bdrweizenElem.innerHTML) * pr3profitweizen)
      );

      // Früchte
      const bdrfrüchteElem = _bdrfrüchteElem;
      const bdfrüchte = _bdfrüchte;
      bdrfrüchteElem.innerHTML = String(
        Math.round(
          Number(bewohneranzahlElem.value) * bdfrüchte * Number(tageElem.value)
        )
      );
      const pr3profitfrüchteElem = _pr3profitfrüchteElem;
      const pr3profitfrüchte = _pr3profitfrüchte;
      pr3profitfrüchteElem.innerHTML = String(
        Math.round(Number(bdrfrüchteElem.innerHTML) * pr3profitfrüchte)
      );

      // Mais
      const bdrmaisElem = _bdrmaisElem;
      const bdmais = _bdmais;
      bdrmaisElem.innerHTML = String(
        Math.round(
          Number(bewohneranzahlElem.value) * bdmais * Number(tageElem.value)
        )
      );
      const pr3profitmaisElem = _pr3profitmaisElem;
      const pr3profitmais = _pr3profitmais;
      pr3profitmaisElem.innerHTML = String(
        Math.round(Number(bdrmaisElem.innerHTML) * pr3profitmais)
      );

      // Zucker
      const bdrzuckerElem = _bdrzuckerElem;
      const bdzucker = _bdzucker;
      bdrzuckerElem.innerHTML = String(
        Math.round(
          Number(bewohneranzahlElem.value) * bdzucker * Number(tageElem.value)
        )
      );
      const pr3profitzuckerElem = _pr3profitzuckerElem;
      const pr3profitzucker = _pr3profitzucker;
      pr3profitzuckerElem.innerHTML = String(
        Math.round(Number(bdrzuckerElem.innerHTML) * pr3profitzucker)
      );

      // Hanf
      const bdrhanfElem = _bdrhanfElem;
      const bdhanf = _bdhanf;
      bdrhanfElem.innerHTML = String(
        Math.round(
          Number(bewohneranzahlElem.value) * bdhanf * Number(tageElem.value)
        )
      );
      const pr3profithanfElem = _pr3profithanfElem;
      const pr3profithanf = _pr3profithanf;
      pr3profithanfElem.innerHTML = String(
        Math.round(Number(bdrhanfElem.innerHTML) * pr3profithanf)
      );

      // Tuch
      const bdrtuchElem = _bdrtuchElem;
      const bdtuch = _bdtuch;
      bdrtuchElem.innerHTML = String(
        Math.round(
          Number(bewohneranzahlElem.value) * bdtuch * Number(tageElem.value)
        )
      );
      const pr3profittuchElem = _pr3profittuchElem;
      const pr3profittuch = _pr3profittuch;
      pr3profittuchElem.innerHTML = String(
        Math.round(Number(bdrtuchElem.innerHTML) * pr3profittuch)
      );

      // Metall
      const bdrmetallElem = _bdrmetallElem;
      const bdmetall = _bdmetall;
      bdrmetallElem.innerHTML = String(
        Math.round(
          Number(bewohneranzahlElem.value) * bdmetall * Number(tageElem.value)
        )
      );
      const pr3profitmetallElem = _pr3profitmetallElem;
      const pr3profitmetall = _pr3profitmetall;
      pr3profitmetallElem.innerHTML = String(
        Math.round(Number(bdrmetallElem.innerHTML) * pr3profitmetall)
      );

      // Baumwolle
      const bdrbaumwolleElem = _bdrbaumwolleElem;
      const bdbaumwolle = _bdbaumwolle;
      bdrbaumwolleElem.innerHTML = String(
        Math.round(
          Number(bewohneranzahlElem.value) *
            bdbaumwolle *
            Number(tageElem.value)
        )
      );
      const pr3profitbaumwolleElem = _pr3profitbaumwolleElem;
      const pr3profitbaumwolle = _pr3profitbaumwolle;
      pr3profitbaumwolleElem.innerHTML = String(
        Math.round(Number(bdrbaumwolleElem.innerHTML) * pr3profitbaumwolle)
      );

      // Werkzeug
      const bdrwerkzeugElem = _bdrwerkzeugElem;
      const bdwerkzeug = _bdwerkzeug;
      bdrwerkzeugElem.innerHTML = String(
        Math.round(
          Number(bewohneranzahlElem.value) * bdwerkzeug * Number(tageElem.value)
        )
      );
      const pr3profitwerkzeugElem = _pr3profitwerkzeugElem;
      const pr3profitwerkzeug = _pr3profitwerkzeug;
      pr3profitwerkzeugElem.innerHTML = String(
        Math.round(Number(bdrwerkzeugElem.innerHTML) * pr3profitwerkzeug)
      );

      // Färbemittel
      const bdrfärbemittelElem = _bdrfärbemittelElem;
      const bdfärbemittel = _bdfärbemittel;
      bdrfärbemittelElem.innerHTML = String(
        Math.round(
          Number(bewohneranzahlElem.value) *
            bdfärbemittel *
            Number(tageElem.value)
        )
      );
      const pr3profitfärbemittelElem = _pr3profitfärbemittelElem;
      const pr3profitfärbemittel = _pr3profitfärbemittel;
      pr3profitfärbemittelElem.innerHTML = String(
        Math.round(Number(bdrfärbemittelElem.innerHTML) * pr3profitfärbemittel)
      );

      // Kaffee
      const bdrkaffeeElem = _bdrkaffeeElem;
      const bdkaffee = _bdkaffee;
      bdrkaffeeElem.innerHTML = String(
        Math.round(
          Number(bewohneranzahlElem.value) * bdkaffee * Number(tageElem.value)
        )
      );
      const pr3profitkaffeeElem = _pr3profitkaffeeElem;
      const pr3profitkaffee = _pr3profitkaffee;
      pr3profitkaffeeElem.innerHTML = String(
        Math.round(Number(bdrkaffeeElem.innerHTML) * pr3profitkaffee)
      );

      // Kakao
      const bdrkakaoElem = _bdrkakaoElem;
      const bdkakao = _bdkakao;
      bdrkakaoElem.innerHTML = String(
        Math.round(
          Number(bewohneranzahlElem.value) * bdkakao * Number(tageElem.value)
        )
      );
      const pr3profitkakaoElem = _pr3profitkakaoElem;
      const pr3profitkakao = _pr3profitkakao;
      pr3profitkakaoElem.innerHTML = String(
        Math.round(Number(bdrkakaoElem.innerHTML) * pr3profitkakao)
      );

      // Tabak
      const bdrtabakElem = _bdrtabakElem;
      const bdtabak = _bdtabak;
      bdrtabakElem.innerHTML = String(
        Math.round(
          Number(bewohneranzahlElem.value) * bdtabak * Number(tageElem.value)
        )
      );
      const pr3profittabakElem = _pr3profittabakElem;
      const pr3profittabak = _pr3profittabak;
      pr3profittabakElem.innerHTML = String(
        Math.round(Number(bdrtabakElem.innerHTML) * pr3profittabak)
      );

      // Fleisch
      const bdrfleischElem = _bdrfleischElem;
      const bdfleisch = _bdfleisch;
      bdrfleischElem.innerHTML = String(
        Math.round(
          Number(bewohneranzahlElem.value) * bdfleisch * Number(tageElem.value)
        )
      );
      const pr3profitfleischElem = _pr3profitfleischElem;
      const pr3profitfleisch = _pr3profitfleisch;
      pr3profitfleischElem.innerHTML = String(
        Math.round(Number(bdrfleischElem.innerHTML) * pr3profitfleisch)
      );

      // Kleidung
      const bdrkleidungElem = _bdrkleidungElem;
      const bdkleidung = _bdkleidung;
      bdrkleidungElem.innerHTML = String(
        Math.round(
          Number(bewohneranzahlElem.value) * bdkleidung * Number(tageElem.value)
        )
      );
      const pr3profitkleidungElem = _pr3profitkleidungElem;
      const pr3profitkleidung = _pr3profitkleidung;
      pr3profitkleidungElem.innerHTML = String(
        Math.round(Number(bdrkleidungElem.innerHTML) * pr3profitkleidung)
      );

      // Seil
      const bdrseilElem = _bdrseilElem;
      const bdseil = _bdseil;
      bdrseilElem.innerHTML = String(
        Math.round(
          Number(bewohneranzahlElem.value) * bdseil * Number(tageElem.value)
        )
      );
      const pr3profitseilElem = _pr3profitseilElem;
      const pr3profitseil = _pr3profitseil;
      pr3profitseilElem.innerHTML = String(
        Math.round(Number(bdrseilElem.innerHTML) * pr3profitseil)
      );

      // Rum
      const bdrrumElem = _bdrrumElem;
      const bdrum = _bdrum;
      bdrrumElem.innerHTML = String(
        Math.round(
          Number(bewohneranzahlElem.value) * bdrum * Number(tageElem.value)
        )
      );
      const pr3profitrumElem = _pr3profitrumElem;
      const pr3profitrum = _pr3profitrum;
      pr3profitrumElem.innerHTML = String(
        Math.round(Number(bdrrumElem.innerHTML) * pr3profitrum)
      );

      // Backwaren
      const bdrbackwarenElem = _bdrbackwarenElem;
      const bdbackwaren = _bdbackwaren;
      bdrbackwarenElem.innerHTML = String(
        Math.round(
          Number(bewohneranzahlElem.value) *
            bdbackwaren *
            Number(tageElem.value)
        )
      );
      const pr3profitbackwarenElem = _pr3profitbackwarenElem;
      const pr3profitbackwaren = _pr3profitbackwaren;
      pr3profitbackwarenElem.innerHTML = String(
        Math.round(Number(bdrbackwarenElem.innerHTML) * pr3profitbackwaren)
      );

      // Konvoi
      const bdrkonvoiElem = _bdrkonvoiElem;
      bdrkonvoiElem.innerHTML = String(
        Number(bdrholzElem.innerHTML) +
          Number(bdrziegelElem.innerHTML) +
          Number(bdrweizenElem.innerHTML) +
          Number(bdrfrüchteElem.innerHTML) +
          Number(bdrmaisElem.innerHTML) +
          Number(bdrzuckerElem.innerHTML) +
          Number(bdrhanfElem.innerHTML) +
          Number(bdrtuchElem.innerHTML) +
          Number(bdrmetallElem.innerHTML) +
          Number(bdrbaumwolleElem.innerHTML) +
          Number(bdrwerkzeugElem.innerHTML) +
          Number(bdrfärbemittelElem.innerHTML) +
          Number(bdrkaffeeElem.innerHTML) +
          Number(bdrkakaoElem.innerHTML) +
          Number(bdrtabakElem.innerHTML) +
          Number(bdrfleischElem.innerHTML) +
          Number(bdrkleidungElem.innerHTML) +
          Number(bdrseilElem.innerHTML) +
          Number(bdrrumElem.innerHTML) +
          Number(bdrbackwarenElem.innerHTML)
      );

      // Profit
      const pr3profitElem = _pr3profitElem;
      pr3profitElem.innerHTML = String(
        Number(pr3profitholzElem.innerHTML) +
          Number(pr3profitziegelElem.innerHTML) +
          Number(pr3profitweizenElem.innerHTML) +
          Number(pr3profitfrüchteElem.innerHTML) +
          Number(pr3profitmaisElem.innerHTML) +
          Number(pr3profitzuckerElem.innerHTML) +
          Number(pr3profithanfElem.innerHTML) +
          Number(pr3profittuchElem.innerHTML) +
          Number(pr3profitmetallElem.innerHTML) +
          Number(pr3profitbaumwolleElem.innerHTML) +
          Number(pr3profitwerkzeugElem.innerHTML) +
          Number(pr3profitfärbemittelElem.innerHTML) +
          Number(pr3profitkaffeeElem.innerHTML) +
          Number(pr3profitkakaoElem.innerHTML) +
          Number(pr3profittabakElem.innerHTML) +
          Number(pr3profitfleischElem.innerHTML) +
          Number(pr3profitkleidungElem.innerHTML) +
          Number(pr3profitseilElem.innerHTML) +
          Number(pr3profitrumElem.innerHTML) +
          Number(pr3profitbackwarenElem.innerHTML)
      );
    } else {
      const _errorMessageElem =
        document.querySelector<HTMLInputElement>(".errorMessage");

      if (_errorMessageElem) {
        const errorMessageElem = _errorMessageElem;
        errorMessageElem.innerHTML = "There was an error on the site.";
      }
    }
  });
};
