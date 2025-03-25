const mongoose = require("mongoose");

// Definiere das Schema
const QuoteSchema = new mongoose.Schema({
  content: { type: String, required: true },
  submitter: { type: String, required: true },
});

// Erstelle das Modell
const Quote = mongoose.model("Quote", QuoteSchema);

// Exportiere das Modell
module.exports = Quote;
