module.exports = function(config) {
  if (!config.hosts && !config.host) { return null; }
  if (config.user && !config.password) { return null; }

  var optionsString = Object.keys(config.options || {}).map(function(key) {
      return encodeURIComponent(key) + '=' +
      encodeURIComponent(config.options[key]);
    }).join('&');

  var mongoUrl = 'mongodb://';

  if (config.user && config.password) {
    mongoUrl += encodeURIComponent(config.user) + ':' +
      encodeURIComponent(config.password) + '@';
  }

  if (config.hosts) {
    mongoUrl += config.hosts.join(',');
  } else if (config.host) {
    mongoUrl += config.host;
  }

  if (config.db) {
    mongoUrl += '/' + encodeURIComponent(config.db);
  }

  if (optionsString) {
    if (!config.db) { mongoUrl += '/'; }
    mongoUrl += '?' + optionsString;
  }

  return mongoUrl;
};
