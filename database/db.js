require('dotenv').config();

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  mongoose.set("strictQuery", true);
  await mongoose.connect(`mongodb://localhost:27017/aula`);
}

module.exports = mongoose;