class AppConfig {
  public host = "localhost";
  public user = "root";
  public password = "";
  public db = "northwind";

  public port = 3001;
}

const appConfig = new AppConfig();

export default appConfig;
