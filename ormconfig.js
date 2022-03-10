module.exports = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_INTER_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [process.env.TYPEORM_ENTITIES],
  migrations: [process.env.TYPEORM_MIGRATIONS],
  cli: {
    migrationsDir: process.env.TYPEORM_CLI_MIGRATIONS,
  },
  migrationsTransactionMode: process.env.TYPEORM_MIGRATIONS_MODE,
  logging: process.env.TYPEORM_LOGGING === 'true',
  synchronize: false,
};
