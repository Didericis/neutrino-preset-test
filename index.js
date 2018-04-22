const airbnb = require('@neutrinojs/airbnb');
const reactComponents = require('@neutrinojs/react-components');
const mocha = require('@neutrinojs/mocha');
const styleLoader = require('@neutrinojs/style-loader');

module.exports = (neutrino) => {
  neutrino.use(airbnb);
  neutrino.use(mocha);
  neutrino.use(reactComponents)
  neutrino.use(styleLoader, { 
    extractId: 'extract', 
    extract: { plugin: { filename: '[name].css' } } 
  });
};
