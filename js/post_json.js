function post(aptName, log_date, short_name) {
  const url = "https://github.com/APT-Rank/log/db"

  fetch(url, {    
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify({
      "aptName": aptName,
      "region": short_name,
      "date": log_date,
    }),
  })
  .then((response) => response.json())
  .then((data) => console.log(data))
}