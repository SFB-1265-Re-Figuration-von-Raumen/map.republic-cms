module.exports = {
  async afterCreate(event) {
    const { result } = event;
    try {
      await strapi.plugins["email"].services.email.send({
        to: "dev@zloc.ws",
        from: "dev@zloc.ws",
        subject: "New admin registered",
        text: `New admin registered: ${result}`,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
