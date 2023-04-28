const crypto = require('crypto');

 
export class Lib {
  
    randomInt(min:number, max:number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
 generateRandHexEncodedNamespaceID() {
    const nID = crypto.randomBytes(4);
    return nID.toString("hex");
  }
  
   generateRandMessage() {
    const lenMsg = this.randomInt(0, 100);
    const msg = crypto.randomBytes(lenMsg);
    return msg.toString("hex");
  }
  
}
