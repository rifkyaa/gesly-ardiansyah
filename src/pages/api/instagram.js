export default async function handler(req, res) {
    const { INSTAGRAM_ACCESS_TOKEN } = process.env;
  
    try {
      const response = await fetch(
        `https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink&access_token=${INSTAGRAM_ACCESS_TOKEN}&limit=3`
      );
  
      if (!response.ok) {
        return res.status(response.status).json({
          error: 'Failed to fetch data from Instagram API',
        });
      }
  
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      console.error('Error fetching Instagram data:', error);
      res.status(500).json({
        error: 'Internal Server Error',
      });
    }
  }
  