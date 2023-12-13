import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize(
  "ArticleDB",
  "sa",
  `${process.env.DB_USER_PASSWORD}`,
  {
    host: "localhost",
    dialect: "mssql",
  }
);

export default sequelize;