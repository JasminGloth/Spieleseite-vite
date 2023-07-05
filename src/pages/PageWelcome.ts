import schiffe from "../data/schiffe.json";
import waffen from "../data/waffen.json";


// test comment from Edward

export const PageWelcome = () => {
  return /*html*/ `
<div class="page pageWelcome">
	<h1 class="errorMessage"></h1>
	<form action="">
		<label for="ship1">Schiff 1</label>
			<select id="ship1" name="ships">
				${schiffe.map((ship) => {
          return `<option value="${ship.name}">${ship.name}</option>`;
        })}    			
  			</select>
  		<label for="ship2">Schiff 2</label>
		    <select id="ship2" name="ships">
    				${schiffe.map((ship) => {
              return `<option value="${ship.name}">${ship.name}</option>`;
            })}
  			</select>
		<label for="ship3">Schiff 3</label>
		    <select id="ship3" name="ships">
    				${schiffe.map((ship) => {
              return `<option value="${ship.name}">${ship.name}</option>`;
            })}
  			</select>
		<button class="btnProcess">Auswerten</button>		
	</form>
	<section>
		<div class="card cardMatrosen">
			<h2>0</h2>
			<div class="title">Matrosen</div>
		</div>
		<div class="card cardSwords">
			<h2>0</h2>
			<div class="title">Säbel</div>
		</div>
		<div class="card cardFirearms">
			<h2>0</h2>
			<div class="title">Musketen</div>
		</div>
	</section>
</div>
`;
};

export const attachPageWelcomeEvents = () => {
  const btn = document.querySelector(".btnProcess");
  btn?.addEventListener("click", (e: Event) => {
    e.preventDefault();

    const schiff1Elem = document.querySelector<HTMLInputElement>("#ship1");
    const schiff2Elem = document.querySelector<HTMLInputElement>("#ship2");
    const schiff3Elem = document.querySelector<HTMLInputElement>("#ship3");

    const _matrosenElem = document.querySelector<HTMLInputElement>(
      "div.cardMatrosen h2"
    );
    const _swordsElem = document.querySelector<HTMLInputElement>(
      "div.cardSwords h2"
    );
    const _firearmsElem = document.querySelector<HTMLInputElement>(
      "div.cardFirearms h2"
    );

    const _men1 = schiffe.find((m) => m.name === schiff1Elem?.value)?.amount;
    const _men2 = schiffe.find((m) => m.name === schiff2Elem?.value)?.amount;
    const _men3 = schiffe.find((m) => m.name === schiff3Elem?.value)?.amount;

    if (_matrosenElem && _swordsElem && _firearmsElem && _men1 && _men2 && _men3) {
      const matrosenElem = _matrosenElem;
	  const swordsElem = _swordsElem;
	  const firearmsElem = _firearmsElem;

      const men1 = _men1;
      const men2 = _men2;
      const men3 = _men3;

      const totalMen = men1 + men2 + men3;
      const totalSwords = Math.round(totalMen * 0.7);
      const totalFirearms = totalMen * 0.3;

      matrosenElem.innerHTML = String(totalMen);
      swordsElem.innerHTML = String(totalSwords);
      firearmsElem.innerHTML = String(totalFirearms);
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
