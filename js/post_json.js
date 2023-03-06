function post(aptName, log_date, short_name) {
  const url = "https://www.aptrank.kr/log/"

  fetch(url, {
    method: "POST",
    header:{
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      aptName: aptName,
      region: short_name,
      date: log_date,
    }),
  })
  .then((response) => response.json())
  .then((data) => console.log(data))
}