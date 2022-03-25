const generate = (secret) => {
  return btoa(secret);
}

module.exports = {
  generate
};