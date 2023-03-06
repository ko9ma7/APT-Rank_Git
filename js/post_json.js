function post(aptName, log_date, short_name) {
  const url = "https://my-json-server.typicode.com/APT-Rank/jsonlog"

  fetch(url, {    
    method: "POST",
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify({
      'aptName': aptName,
      'region': short_name,
      'date': log_date,
    }),
  })
  .then((response) => response.json())
  .then((data) => console.log(data))
}