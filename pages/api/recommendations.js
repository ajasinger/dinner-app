// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}


//chatGPT prompt 
// const completion = await openai.createCompletion({
//   model: "text-davinci-003",
//   prompt: 
//   `Create an inspiring motivational quote based on the following topic. \n
//   Topic:${prompt}\n
//   Motivational quote:`,
//   max_tokens: 500, 
//   temperature: 1,
//   presence_penalty: 0,
//   frequency_penalty: 0
// });

// fetch("https://api.openai.com/va/completions", {
//   method: "POST",
//   headers: {
//     Authorization: `Bearer ${OPENAI_API_KEY}`,
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify({
//     model: "text-davinci-003",
//     prompt: "",
//     //https://platform.openai.com/tokenizer
//     max_tokens: 500,
//     temperature: 1,
//     //n - how many responses to give 
//   })
// })

//send response to front-end 
//const recommendations = 