import Web3 from "web3";
import fs from "fs";

const rawData = fs.readFileSync("./src/assets/contracts/kleros-liquid.json");
const KlerosLiquid = JSON.parse(rawData);

const web3 = new Web3("https://mainnet.infura.io/v3/54fb3d87cd07464591ad2be29a1db32f")


const klerosLiquid = new web3.eth.Contract(KlerosLiquid.abi, "0x988b3a538b618c7a603e1c11ab82cd16dbe28069"); // KLEROS_LIQUID_ADDRESS

async function getMaxDrawTime() {
	try {
		const maxDrawingTime = await klerosLiquid.methods.maxDrawingTime().call();
		console.log("maxTime:", maxDrawingTime);
	} catch(err) {
		console.error("Error:", err);
	}
}


getMaxDrawTime();

