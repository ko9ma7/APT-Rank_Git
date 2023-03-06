function post(aptName, log_date, short_name) {
  const url = "https://my-json-server.typicode.com/APT-Rank/jsonlog/posts/1"

  fetch(url, {    
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'aptName': aptName,
      'region': short_name,
      'date': log_date,
    }),
  })
  .then((response) => response.json())
  .then((data) => console.log(data))
}