function post(aptName, log_date, short_name) {
  const url = "https://www.aptrank.kr/log/db.json"

  fetch(url, {    
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Allows' : 'POST, PUT, DELELE'
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