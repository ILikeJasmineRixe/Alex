// ok so i dont want to deal with all this rn because im so so confused.
// UPDATE: for now gonna use the varInt lib instead.

function encodeVarInt(value) {
  const bytes = [];
  value = value >>> 0; // craxy fax; the >>> (unsigned righr shift) operator turns js integers into 32bit instead of 64bit????

}

function decodeVarInt() {
}

module.exports = { encodeVarInt, decodeVarInt };