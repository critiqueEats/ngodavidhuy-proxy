let template = (rest_id) => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Lorem YelpSum</title>
      <link href="main.css" rel="stylesheet">
    </head>
    <body>
      <div id="header"></div>
      <div id="gallery"></div>
      <div id="reviews"></div>
      <div id="sidebar"></div>
      <script type="text/javascript" src="localhost:3001/bundle.js"></script>
      <script type="text/javascript" src="localhost:3003/bundle.js"></script>
      <script type="text/javascript" src="localhost:5002/bundle.js"></script>
      <script type="text/javascript" src="localhost:3005/bundle.js"></script>
      <script>
        ReactDOM.render(
          React.createElement(Header, {restaurantId: ${rest_id}}, null),
          document.getElementById('header')
        );
        ReactDOM.render(
          React.createElement(Gallery, {restaurantId: ${rest_id}}, null),
          document.getElementById('gallery')
        );
        ReactDOM.render(
          React.createElement(Reviews, {restaurantId: ${rest_id}}, null),
          document.getElementById('reviews')
        );
        ReactDOM.render(
          React.createElement(Sidebar, {restaurantId: ${rest_id}}, null),
          document.getElementById('sidebar')
        );
      </script>
    </body>
  </html>`;
}

module.exports = template;