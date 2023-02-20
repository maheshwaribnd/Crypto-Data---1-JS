
let storeTable = document.getElementById("table").style = " text-align:center; margin:auto; background: #111; height:580px; width:950px; color:white;"


async function CoinWeb() {
    let url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
    let response = await fetch(url)
    let result = await response.json()
    console.log(result);

    result.map((item) => {
        table.innerHTML += `
        <tr class="row">
            <td><img class="img" src=${item?.image}/></td>
            <td>${item?.name}</td>
            <td style="text-transform: uppercase;">${item?.symbol}</td>
            <td>$${item?.current_price}</td>
            <td>${item?.price_change_percentage_24h}%</td>
            <td>$${item?.market_cap}</td>
        </tr>
       `
    })
}

CoinWeb();
