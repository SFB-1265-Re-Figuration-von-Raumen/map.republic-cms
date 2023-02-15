module.exports = {
  async afterCreate(event) {
    const { result } = event;
    try {
      await strapi.plugins["email"].services.email.send({
        to: "dev@zloc.ws",
        from: "dev@zloc.ws",
        subject: "New icon created",
        text: `New icon created: ${result.name}`,
        html: `New icon created: ${result.name}`,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
