// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

const handler = async (req, res) => {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `what New York neighborhood is the center of these: ${addressString}?
    Tell me the 5 best restaurants in hat neightborhoodt that would be a chosen by a food editor at the New York Times or Eater.
    The restaurant should be good for this type of event: ${eventString}
    The restaurant should serve this type of food: ${foodString}
    The restaurant should have a price point that is: ${priceString}
    Format the response as a numbered list containing: a) Restaurant name b) Restaurant address c) Restaurant neighborhood  d) Restaurant website e) if you can make reservations on Opentable or Resy
    `,
    //https://platform.openai.com/tokenizer
    max_tokens: 500,
    temperature: 0,
  });

  const recommendations = completion.data.choices[0].text;
  res.status(200).json({ recommendations })
}

export default handler;