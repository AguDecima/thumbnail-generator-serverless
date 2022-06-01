module.exports = async ({ options, resolveVariable }) => {
    const stage = await resolveVariable('sls:stage');
    const configByEnvironment = require(`./${stage}.js`);
    return configByEnvironment || {};
  };
  