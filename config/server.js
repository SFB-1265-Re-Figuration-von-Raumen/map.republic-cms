module.exports = ({ env }) => ({
  host: env("HOST"),
  port: env.int("PORT"),
  url: env("BACKEND_URL_LOCAL"),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
