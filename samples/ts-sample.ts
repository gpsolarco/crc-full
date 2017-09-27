import {CRC} from '../src/crc'

var crc = new CRC(16, "CRC16", 0x8005, 0x0000, 0x0000, false, false);

var computed_crc = crc.compute(Buffer.from("Hello world!", "ascii"))

console.log("Hello wolrd!: ", computed_crc);