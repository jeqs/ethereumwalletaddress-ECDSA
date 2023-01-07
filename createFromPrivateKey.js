// privateKeyToPublicKey
const privateKeyToPublicKey = require("ethereum-private-key-to-public-key");

// publicKeyToAddress
const publicKeyToAddress = require("ethereum-public-key-to-address");


// llave privada aleateoria entre 1 y 2^256-1
const clavePrivadaDecimal = 99609413211026217191848487601459650900609461714685306780198554267270848908445n;

// convierte numero a hexadecimal
const clavePrivadaHexadecimal= clavePrivadaDecimal.toString(16);

// buffer del valor hexa
const bufferClavePrivadaHexadecimal = Buffer.from(
   clavePrivadaHexadecimal,
  "hex"
);

// convertir una clave privada hexa en la clave pública.
const publicKey = privateKeyToPublicKey(bufferClavePrivadaHexadecimal).toString("hex");

// buffer de la clave publica
const bufferPublicKey = Buffer.from(publicKey, "hex");
const ethereumAddress = publicKeyToAddress(bufferPublicKey);

console.log(ethereumAddress);
