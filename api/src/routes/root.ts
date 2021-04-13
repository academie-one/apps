import {FastifyPluginAsync} from 'fastify';

const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/', async function (request, reply) {
    const sg = fastify.sg();

    const msg = {
      to: 'phobos@academie.one',
      from: 'team@academie.one', // Use the email address or domain you verified above
      subject: 'Sending with Twilio SendGrid is Fun',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };

    sg.send(msg).then(
      () => {
        console.log('success');
      },
      (error) => {
        console.error(error);
        if (error.response) {
          console.error(error.response.body);
        }
      },
    );
    console.log('2');

    return {root: true};
  });
};

export default root;
