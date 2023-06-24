var crypto  = require('crypto')
// Define the function that will create the one-way hash
function oneWayHash(message) {
  const encoder = new TextEncoder();

  // Use the SHA-256 algorithm to create the hash
  return crypto.createHmac('sha256', "secret")
  .update(message)
  .digest('hex');

}

// Test the function
const message = "Hello, world!";
const hash = oneWayHash(message)
console.log(hash)

module.exports = {
  oneWayHash
}