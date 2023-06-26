import schiffe from "../data/schiffe.json";
import waffen from "../data/waffen.json";

export const PageWelcome = () => {
  return /*html*/ `
<div class="page pageWelcome">
	<form action="">
		<label for="ship1">Schiff 1</label>
			<select id="ships1" name="ships">
				${schiffe.map((ship) => {
          		return `<option value="${ship.name}">${ship.name}</option>`;})}    			
  			</select>
  		<label for="ship2">Schiff 2</label>
		    <select id="ships2" name="ships">
    				${schiffe.map((ship) => {
              		return `<option value="${ship.name}">${ship.name}</option>`;})}
  			</select>
		<label for="ship3">Schiff 3</label>
		    <select id="ships3" name="ships">
    				${schiffe.map((ship) => {
              		return `<option value="${ship.name}">${ship.name}</option>`; })}
  			</select>
		<button class="btnProcess">Auswerten</button>	
	</form>
</div>
`;
};

export const attachPageWelcomeEvents = () => {
	const btn = document.querySelector('.btnProcess');
	btn?.addEventListener('click', (e: Event) => {
		e.preventDefault();
		
		// const schiff1 = document.querySelector<HTMLInputElement>('#ship1');
		// console.log(schiff1.value);
		
		console.log('button pressed');
	});
}
