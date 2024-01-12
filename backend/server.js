const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const sequelize = require("./configuration/db.config");
const userRoutes = require("./src/routers/userRoutes");
const authRoutes = require("./src/routers/authRoutes");
const attendanceRoutes = require("./src/routers/attendanceRoutes");
const cors = require("cors");
const socketRoutes = require("./src/routers/socketRoutes");
const path = require("path");
const morgan = require("morgan");
const app = express();
require("dotenv").config();
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const fs = require("fs");
const swaggerUiWatcher = require("swagger-ui-watcher");
const chokidar = require("chokidar");
const http = require("http");

const port = 5000;

app.use(cors());
app.use(morgan("common"));

app.use(bodyParser.json());
app.use(cookieParser());

app.use("/api/users", userRoutes);
app.use("/api/users", authRoutes);
app.use("/api/users", attendanceRoutes);

sequelize
  .sync()
  .then(() => {
    console.log("Database is synced");
  })
  .catch((err) => {
    console.error("Database sync failed:", err);
  });

const apiRoutesPath = path.join(__dirname, "routers");

const loadRoutes = (app, routesPath) => {
  fs.readdirSync(routesPath).forEach((file) => {
    const filePath = path.join(routesPath, file);
    const route = require(filePath);
    app.use("/api/users", route);
  });
};

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Library API",
      version: "1.0.0",
      description: "A simple Express Library API",
      termsOfService: "http://example.com/terms/",
      contact: {
        name: "API Support",
        url: "http://www.example.com/support",
        email: "support@example.com",
      },
    },
    servers: [
      {
        url: `http://localhost:${port}`,
        description: "My API Documentation",
      },
    ],
  },
  apis: [path.join(apiRoutesPath, "*.js")],
};const specs = swaggerJsdoc(options);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

// Serve Swagger UI with YAML support
const swaggerUiPath = "/swagger-ui";
app.use(
  swaggerUiPath,
  swaggerUi.serve,
  swaggerUi.setup(null, { swaggerUrl: "/swagger.yml" })
);

// Watcher for YAML file changes using chokidar
const yamlPath = path.resolve(__dirname, "swagger.yml");
const watcher = chokidar.watch(yamlPath);

// Refresh Swagger UI when YAML file changes
watcher.on("change", () => {
  console.log("YAML file changed. Reloading Swagger UI.");
  // You may need to enhance this to reload Swagger UI in the client-side (e.g., WebSocket)
});

// Serve the actual YAML file
app.get("/swagger.yml", (req, res) => {
  const fileContents = fs.readFileSync(yamlPath, "utf8");
  res.header("Content-Type", "application/yaml");
  res.send(fileContents);
});


app.listen(port, () => {
  console.log(`\x1b[33mServer is running on port ${port}\x1b[0m`);
});
;
