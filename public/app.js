import { JSModule } from "https://www.unpkg.com/zkwasm?module";

const mod = await JSModule.fromPath("./zk.js");
const { proof, result } = await mod.call("add", [1, 2]);
console.log(proof, result);
