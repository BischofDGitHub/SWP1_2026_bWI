const QuoteSchema = new mongoose.Schema({
  content: { type: String, required: true },
  submitter: { type: String, required: true },
});
