import express from 'express';
import cors from 'cors';
import { OpenAI } from 'openai';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const port = 3000;

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.VITE_OPENAI_API_KEY || '',
});

// Middleware
app.use(cors());
app.use(express.json());

// Chat API endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message, conversationId } = req.body;

    // Create chat completion
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { 
          role: "system", 
          content: "You are a helpful customer support assistant. Your goal is to provide clear, accurate, and friendly responses to customer inquiries. Keep your responses concise but informative. If you don't know something, be honest about it." 
        },
        { role: "user", content: message }
      ],
    });

    // Send response
    res.json({
      response: chatCompletion.choices[0].message.content || 'Sorry, I could not generate a response.',
      conversationId
    });
  } catch (error) {
    console.error('Error in chat API:', error);
    res.status(500).json({ 
      error: 'Failed to generate response', 
      details: error instanceof Error ? error.message : 'Unknown error' 
    });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Local server running on http://localhost:${port}`);
});

export default app;
