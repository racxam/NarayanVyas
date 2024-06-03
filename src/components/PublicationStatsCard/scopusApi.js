import axios from 'axios';

const API_KEY = 'your_scopus_api_key';
const BASE_URL = 'https://api.elsevier.com/content/author/author_id/';

export const fetchScopusStats = async (authorId) => {
    try {
        const response = await axios.get(`${BASE_URL}${authorId}`, {
            headers: {
                'X-ELS-APIKey': API_KEY,
                'Accept': 'application/json'  // Ensure you accept JSON response
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching Scopus data:', error);
        throw error;
    }
};
