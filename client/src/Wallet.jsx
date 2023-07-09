import server from "./server";
import { secp256k1 } from 'ethereum-cryptography/secp256k1.js';
import { toHex } from "ethereum-cryptography/utils.js";

function Wallet({ address, setAddress, balance, setBalance, privateKey}) {
  async function onChange(evt) {
    const privateKey = evt.target.value;
    // setPrivateKey(privateKey);
    address = toHex(secp256k1.getPublicKey(privateKey))

    setAddress(address);
    if (address) {
      const {
        data: { balance },
      } = await server.get(`balance/${address}`);
      setBalance(balance);
    } else {
      setBalance(0);
    }
  }

  return (
    <div className="container wallet">
      <h1>Your Wallet</h1>

      <label>
        Private Key
        {/* <input placeholder="Type an address, for example: 0x1" value={address} onChange={onChange}></input> */}
        <input placeholder="Type in your private key" value={privateKey} onChange={onChange}></input>
      </label>

      <div className="balance">Balance: {balance}</div>
    </div>
  );
}

export default Wallet;
