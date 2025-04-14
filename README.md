# Create Simli App with ElevenLabs Integration

This project demonstrates how to create a visual avatar using Simli with ElevenLabs voice integration.

## Setup Instructions

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file in the root directory with the following variables:
   ```
   NEXT_PUBLIC_SIMLI_API_KEY=your_simli_api_key
   ELEVENLABS_API_KEY=your_elevenlabs_api_key
   DEEPGRAM_API_KEY=your_deepgram_api_key
   OPENAI_API_KEY=your_openai_api_key
   ```

4. Get your API keys:
   - [Simli API Key](https://simli.ai/)
   - [ElevenLabs API Key](https://elevenlabs.io/)
   - [Deepgram API Key](https://deepgram.com/)
   - [OpenAI API Key](https://platform.openai.com/)

5. Create an ElevenLabs agent:
   - Go to [ElevenLabs Agents](https://elevenlabs.io/agents)
   - Create a new agent or use an existing one
   - Copy the agent ID

6. Update the agent ID in `app/page.tsx`:
   ```typescript
   const avatar: avatarSettings = {
     elevenlabs_agentid: "YOUR_ELEVENLABS_AGENT_ID", // Replace with your agent ID
     simli_faceid: "ac0679f3-fee3-41e0-be9e-05d3549a3d3f",
   };
   ```

7. Run the development server:
   ```
   npm run dev
   ```

8. Open [http://localhost:3000](http://localhost:3000) in your browser

## Troubleshooting

If you encounter a 404 error when trying to get the ElevenLabs signed URL:
1. Make sure your ElevenLabs API key is correct
2. Verify that the agent ID exists in your ElevenLabs account
3. Check that the agent is properly configured in the ElevenLabs dashboard

## Learn More

- [Simli Documentation](https://docs.simli.ai/)
- [ElevenLabs Documentation](https://docs.elevenlabs.io/)
- [Next.js Documentation](https://nextjs.org/docs)

## Characters
You can swap out the character by finding one that you like in the [docs](https://docs.simli.com/introduction), or [create your own](https://app.simli.com/) 

![alt text](media/image.png) ![alt text](media/image-4.png) ![alt text](media/image-2.png) ![alt text](media/image-3.png) ![alt text](media/image-5.png) ![alt text](media/image-6.png)

## Deploy on Vercel
An easy way to deploy your avatar interaction to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme). 
