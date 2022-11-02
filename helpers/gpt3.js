const { Configuration, OpenAIApi } = require("openai");
console.log(process.env.API_KEY);
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

module.exports = async (prompt) => {
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: prompt,
    temperature: 0.7,
    max_tokens: 150,
  });
  return completion.data.choices[0].text;
};
