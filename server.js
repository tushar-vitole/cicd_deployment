// server.js
const express = require('express');
const app = express();

// Define your API name and version
const apiInfo = {
  name: "Simple API",
  version: "1.0.0"
};

// Root route
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>${apiInfo.name}</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            text-align: center;
            margin-top: 100px;
          }
          .card {
            background: white;
            display: inline-block;
            padding: 30px 50px;
            border-radius: 12px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          }
          h1 { color: #333; }
          p { color: #666; }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>${apiInfo.name}</h1>
          <p>Version: <strong>${apiInfo.version}</strong></p>
        </div>
      </body>
    </html>
  `);
});

// Start server on port 3000
app.listen(3000, () => {
  console.log(`🚀 ${apiInfo.name} running at http://localhost:3000`);
});
