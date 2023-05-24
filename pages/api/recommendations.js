// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

const handler = async (req, res) => {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "what is the best restaurant in New York?",
    //https://platform.openai.com/tokenizer
    max_tokens: 500,
    temperature: 0,
  });

  const recommendations = completion.data.choices[0].text;
  res.status(200).json({ recommendations })
}

export default handler;