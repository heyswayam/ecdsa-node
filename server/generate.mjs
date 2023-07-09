import { secp256k1 } from 'ethereum-cryptography/secp256k1.js';
import { toHex } from "ethereum-cryptography/utils.js";

  const privateKey = secp256k1.utils.randomPrivateKey()  
  const getPublicKey = secp256k1.getPublicKey(privateKey)

console.log("privateKey : " + toHex(privateKey));
console.log("publicKey : " + toHex(getPublicKey));

// privateKey :7ea02c573be71ed8e2b4b124f581ac89e3304fbcfd888d32dac7c6d27aa999ae
// publicKey :03492cbb50174c31b45fa8d863c6ba47a42cfc5a8d9c86d588fbbd302ba776f243

// privateKey : cee2f2278c2fffa3c9f94f242c57062660f890754808451d5bc033a6bb6cf8cf
// publicKey : 021c7eb3f55be24e303244e8a9e9af8ee7509d42158fed270c9a582890315817c7