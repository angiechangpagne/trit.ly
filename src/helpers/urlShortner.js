const crypto = require('crypto');

module.exports = {
  generateShortUrl: (longURL, startIndex, endIndex) => {
    const hash = crpto.createHash('md5').update(longURL).digest('base64').replace(/\//g, '_')
      .replace(/\+/g, '-');
    return hash.substring(startIndex, endIndex + 1);
  },
};