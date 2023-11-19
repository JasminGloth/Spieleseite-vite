import waren from "../data/Patrizier 4/waren.json";

export const PreislisteP4 = () => {
  let tableHtml = "";

  for (const warenItem of waren) {
    tableHtml += `<tr>
						<td>${warenItem.ware}</td>
						<td>${warenItem.ankauf}</td>
						<td>${warenItem.verkauf}</td>
					</tr>`;
  }

  return /*html*/ `
  <div>
		<h2 class="überschrift">Preisliste normal</h2>
		<section class="preisliste">
			<table>
				<thead>
					<tr>
						<td>Ware</td>
						<td>Ankauf</td>
						<td>Verkauf</td>
					</tr>
				</thead>
				<tbody>
					${tableHtml}
					
				</tbody>
			</table>
		</section>
	</div>
  `;
};
