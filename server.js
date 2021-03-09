const http = require('http');
const dayjs = require('dayjs');

const server = http.createServer(function (request, response) {


  let marsPerseverance = dayjs('2021-02-18');

  let now = dayjs();
  let days = now.diff(marsPerseverance, 'days');
  const message = `On ${now.format('YYYY-MM-DD')}, ${days} days have passed since Perseverance landed on Mars.`;

  response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  response.end(`<h1>Hello World!!</h1> <p>By the way, ${message}</p>`);
});


//seconds
const date1 = dayjs("2019-14-05");
const date2 = dayjs("2018-06-25");

let df1 = date1.diff(date2);

console.log(df1);

// months
let df2 = date1.diff(date2, "month");

console.log(df2);

server.listen(8080, function () {
  console.log('listening on port 8080.');

});