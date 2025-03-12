import OpenAI from 'openai';
const openAiApiKey = process.env.REACT_APP_OPENAI_API_KEY;
const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: openAiApiKey,
	dangerouslyAllowBrowser: true,
});


export default async function AskOpenAI(prompt) {
	try {
		const completion = await openai.chat.completions.create({
			model: 'openai/gpt-4o',
			messages: [
				{
					role: 'user',
					content: prompt,
				},
			],
		});
	
		console.log(completion.choices[0].message.content);
		return completion.choices[0].message.content;
	}	catch (e) {
		console.log('error')
	}
}
