let template = (rest_id) => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Lorem YelpSum</title>
      <link rel="stylesheet" href="/proxy-styles.css" />
    </head>
    <body>
      <div id="top-shelf">
          <div id="header"></div>
          <div id="gallery"></div>
      </div>
      
      <div id="bottom-shelf">
        <div id="reviews"></div>
        <div id="sidebar"></div>
      </div>
      <script src="http://127.0.0.1:3001/bundle.js"></script>
      <script src="http://127.0.0.1:3003/bundle.js"></script>
      <script src="http://127.0.0.1:5002/bundle.js"></script>
      <script src="http://127.0.0.1:3005/bundle.js"></script>
      <script>
      ReactDOM.render(
        React.createElement(Header, {restaurantId: ${rest_id}}, null),
        document.getElementById('header')
      );
      ReactDOM.render(
        React.createElement(Reviews, {restaurantId: ${rest_id}}, null),
        document.getElementById('reviews')
      );
        ReactDOM.render(
          React.createElement(Gallery, {restaurantId: ${rest_id}}, null),
          document.getElementById('gallery')
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