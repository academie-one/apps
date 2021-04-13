import fp from 'fastify-plugin';
import * as SendGrid from '@sendgrid/mail';

export interface SupportPluginOptions {
  // Specify Support plugin options here
}

// The use of fastify-plugin is required to be able
// to export the decorators to the outer scope
export default fp<SupportPluginOptions>(async (fastify, opts) => {
  fastify.decorate('sg', () => {
    if (process.env.SENDGRID_API_KEY) {
      SendGrid.setApiKey(process.env.SENDGRID_API_KEY);
    } else {
      console.log('sendgrid api key is not found');
    }

    return SendGrid;
  });
});

// When using .decorate you have to specify added properties for Typescript
declare module 'fastify' {
  export interface FastifyInstance {
    sg(): SendGrid.MailService;
  }
}
