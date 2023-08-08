import schiffe from "../data/Port Royale 3/schiffe.json"

export const SchiffePR3 = () => {
    let tableHtml="";

    for(const schiffeItem of schiffe){
        tableHtml += `
        <figure class="image-container">
        <figcaption>${schiffeItem.name}</figcaption>
                <img src="${schiffeItem.bild}" alt="">
                
                <table class="hover-text">
                    <tbody>
                        <tr>
                            <td>Laderaum</td>
                            <td>${schiffeItem.laderaum}</td>
                        </tr>
                        <tr>
                            <td>Knoten</td>
                            <td>${schiffeItem.knoten}</td>
                        </tr>
                        <tr>
                            <td>Kaufpreis</td>
                            <td>${schiffeItem.kaufpreis}</td>
                        </tr>
                        <tr>
                            <td>Tägliche Kosten</td>
                            <td>${schiffeItem.täglichekosten}</td>
                        </tr>
                    </tbody>
                </table>
            </figure>
                        `;
    }

    return /*html*/ `
    <div>
        <h2>Schiffe</h2>
        <section>
            ${tableHtml}
        </section>
    </div>
    `;
}