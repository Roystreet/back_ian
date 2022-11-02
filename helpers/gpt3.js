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
    temperature: 0.6,
  });
  return completion.data.choices[0].text;
};
