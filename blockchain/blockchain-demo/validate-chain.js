const { isValidChain } = require("./blockchain-helpers.js")

if (isValidChain()) {
    console.log('Chain is valid');
} else {
    console.log('Chain is not valid');
}
