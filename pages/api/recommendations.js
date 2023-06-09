const generateRecs = async ({
  addressString,
  eventString,
  foodString,
  priceString
}) => {
  try {
    const openAIResponse = await fetch(
      "https://api.openai.com/v1/engines/text-davinci-003/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          prompt: `what New York neighborhood is in the middle of these neighborhoods: ${addressString}? 
          Then give me a list of the 5 best restaurants in that neighborhood that would be a chosen by a food editor at the New York Times or Eater.
          The restaurant should be good for this type of event: ${eventString || 'any'}
          The restaurant should serve this type of food: ${foodString || 'any'}
          The restaurant should have a price point that is: ${priceString || 'any'}
          Format the response as a numbered list with each number on a new line containing: a) Restaurant name b) Restaurant address c) Restaurant neighborhood  
          d) Restaurant website e) if you can make reservations on Opentable or Resy`,
          max_tokens: 500,
          temperature: 0.5,
        }),
      }
    );
    
    const data = await openAIResponse.json();
    console.log(data);

    return data.choices[0].text;
    
  } catch (err) {
    console.error(err);
  }
};

const handler = async(req, res) => {
  const { addressString, eventString, foodString, priceString } = req.body;

  const restaurantRecs = await generateRecs({
    addressString,
    eventString,
    foodString,
    priceString
  });

  console.log(restaurantRecs);

  res.status(200).json({
    restaurantRecs
  });
}

export default handler;



//THIS ALSO WORKS
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// import { Configuration, OpenAIApi } from 'openai';

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY
// });

// const openai = new OpenAIApi(configuration);

// const handler = async (req, res) => {
//   const completion = await openai.createCompletion({
//     model: "text-davinci-003",
//     prompt: "what is the best restaurant in New York?",
//     max_tokens: 500,
//     temperature: 0,
//   });

//   const recommendations = completion.data.choices[0].text;
//   res.status(200).json({ recommendations })
// }

// export default handler;
