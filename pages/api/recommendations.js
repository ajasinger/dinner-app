// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

//async funtion to fetch data 
const fetchData = async () => {
  try {
    const response = await fetch('https://api.openai.com/va/completions', {
      method: 'POST',
//    headers: {
//      Authorization: `Bearer ${OPENAI_API_KEY}`,
//      "Content-Type": "application/json"
//    },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: "",
        //https://platform.openai.com/tokenizer
        max_tokens: 500,
        temperature: 1,
      })
    })
    if(response.ok) {
      const openAiResponse = await response.json();
    }
    throw new Error('Request failed');
  } catch(error) {
    console.log(error);
  }
};

//send response to front-end 
//const recommendations = 