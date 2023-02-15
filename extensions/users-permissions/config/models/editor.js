module.exports = {
  async afterCreate(event) {
    const { result } = event;
    try {
      await strapi.plugins["email"].services.email.send({
        to: "dev@zloc.ws",
        from: "dev@zloc.ws",
        subject: "New editor registered",
        text: `New editor registered: ${result}`,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
