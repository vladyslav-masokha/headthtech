import express from 'express'
import cors from 'cors'
import fetch from 'node-fetch'

const app = express();
app.use(cors());

const API_KEY = '04d691b0154dc51cfdd9ff6e5706d31f';

app.get('/api/cities', async (req, res) => {
  try {
    const response = await fetch('https://api.novaposhta.ua/v2.0/json/Address/', {
      headers: {
        'Content-Type': 'application/json',
        APIKey: API_KEY,
      },
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching cities:', error);
    res.status(500).json({ error: 'Failed to fetch cities' });
  }
});

app.get('/api/branches', async (req, res) => {
  try {
    const response = await fetch('https://api.novaposhta.ua/v2.0/json/', {
      headers: {
        'Content-Type': 'application/json',
        APIKey: API_KEY,
      }, 
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching branches:', error);
    res.status(500).json({ error: 'Failed to fetch branches' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});