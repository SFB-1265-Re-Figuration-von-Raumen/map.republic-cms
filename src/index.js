"use strict";

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {
    strapi.db.lifecycles.subscribe({
      models: ["admin::user"],
      async afterCreate({ result }) {
        const { registrationToken } = result;
        if (!registrationToken) return;

        try {
          await strapi.plugins["email"].services.email.send({
            to: `${result.email}`,
            from: "dev@zloc.ws",
            subject: "New user registered",
            text: `Hi ${result.firstname},
            <br />
            welcome to map republic!
            <br />
            please follow this link to activate your account: ${process.env.BACKEND_URL}admin/auth/register?registrationToken=
            ${result.registrationToken}
            `,
          });
          console.log(result);
        } catch (err) {
          console.log(err);
        }
      },
    });
  },
};
