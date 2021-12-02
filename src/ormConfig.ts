import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

const config : PostgresConnectionOptions = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "postgres",
    entities: [Event],
    synchronize: true
  }

export default config;