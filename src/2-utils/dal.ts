import mysql from "mysql";
import appConfig from "./AppConfig";

function execute() {}

const connection = mysql.createPool({
  host: appConfig.host,
  user: appConfig.user,
  password: appConfig.password,
  database: appConfig.db,
});

connection.query(sql, (err, result) => {});
