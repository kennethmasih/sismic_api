import algosdk from "algosdk";
const algodToken = "a".repeat(64);
const server: string = "http://localhost";
const port: string = "4001";
const mnemonic: string = "seven inner dynamic example notable appear mango become nurse winter tribe slush fancy inside noise learn flight pass symptom pause pole stove utility absorb index";
export function getClient(): algosdk.Algodv2 {
let client = new algosdk.Algodv2(algodToken, server, port);
return client;
}
export function getAccount(): algosdk.Account {
let account = algosdk.mnemonicToSecretKey(mnemonic);
return account;
}