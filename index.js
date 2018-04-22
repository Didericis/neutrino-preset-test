const airbnb = require('@neutrinojs/airbnb');
const reactComponents = require('@neutrinojs/react-components');
const mocha = require('@neutrinojs/mocha');

module.exports = (neutrino) => {
  neutrino.use(airbnb);
  neutrino.use(mocha);
  neutrino.use(reactComponents, {
    style: { extract: { plugin: { filename: '[name].css' } } }
  });
};
