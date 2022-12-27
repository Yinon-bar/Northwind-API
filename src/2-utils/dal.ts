import mysql from "mysql";
import appConfig from "./AppConfig";

const connection = mysql.createPool({
  host: appConfig.host,
  user: appConfig.user,
  password: appConfig.password,
  database: appConfig.db,
});

function execute(sql: string): Promise<any> {
  return new Promise((resolve, reject) => {
    connection.query(sql, (error, result) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(result);
    });
  });
}

export default {
  execute,
};
