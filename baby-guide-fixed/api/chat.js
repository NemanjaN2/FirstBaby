// This file should be saved as: api/chat.js
// Vercel automatically handles this as a serverless function

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: 'Question is required' });
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY, // Set this in Vercel dashboard
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        messages: [
          {
            role: 'user',
            content: `You are a caring, knowledgeable pediatric resource for new parents. Answer this question about babies in a warm, reassuring way. Be concise but thorough. If it's a medical concern, remind them to consult their pediatrician for personalized advice.

Question: ${question}

Provide a helpful, calming response that addresses their concern.`
          }
        ]
      })
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error?.message || 'API request failed');
    }

    const aiResponse = data.content.find(item => item.type === 'text')?.text || 
                       'Sorry, I couldn\'t generate a response.';

    res.status(200).json({ response: aiResponse });
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ 
      error: 'I\'m having trouble connecting right now. Please try again in a moment.' 
    });
  }
}
