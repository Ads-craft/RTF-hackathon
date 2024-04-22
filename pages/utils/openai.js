export const sendMsgToAI = async () => {
  const API_URL = "https://api.openai.com/v1/chat/completions";
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      prompt: `generate a post for my tiktok account about anything`,
      temperature: 0,
      max_tokens: 3000,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0,
    }),
  };
  try {
    const response = await (await fetch(API_URL, requestOptions)).json();
    if (response.error) {
      throw new Error(response.error.message);
    }
    console.log(response);
    return response?.choices[0]?.text;
  } catch (error) {
    console.log(error);
  }
};
