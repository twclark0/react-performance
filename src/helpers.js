// Capitalize
export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Format price
export function formatPrice(number) {
  const fnumber = parseFloat(number);
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(fnumber);
}

// Get wind direction
export function windDirection(degree) {
  const sectors = ["n", "ne", "e", "se", "s", "sw", "w", "nw"];

  degree += 22.5;

  if (degree < 0) {
    degree = 360 - (Math.abs(degree) % 360);
  } else {
    degree = degree % 360;
  }

  const which = parseInt(degree / 45, 10);
  return sectors[which];
}

// Get stocks data
export async function getStocks(symbols) {
  let stocks = undefined;
  try {
    const stocks_call = await fetch(
      `//www.alphavantage.co/query?function=BATCH_STOCK_QUOTES&symbols=${symbols},&apikey=${process.env.REACT_APP_STOCKS_API_KEY}`
    )
      .then((res) => {
        if (res.ok) {
          return res;
        } else {
          throw Error(`Request rejected with status ${res.status}`);
        }
      })
      .catch(console.error);

    if (stocks_call !== undefined) {
      stocks = await stocks_call.json();
    }

    return stocks;
  } catch (e) {
    return "";
  }
}
