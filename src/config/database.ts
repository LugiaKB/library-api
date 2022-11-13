import { Dialect } from "sequelize";

export const DB_NAME = process.env.DB_NAME as string;
export const DB_USER = process.env.DB_USER as string;
export const { DB_HOST } = process.env;
export const DB_DIALECT = process.env.DB_DIALECT as Dialect;
export const { DB_PASSWORD } = process.env;
