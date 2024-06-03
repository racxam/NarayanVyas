import axios from 'axios';

const API_KEY = '6dd68cc0a9b5300686e59849b38d56d9';
const BASE_URL = 'https://api.elsevier.com/content/author/author_id/';

export const fetchScopusStats = async (authorId) => {
    try {
        const response = await axios.get(`${BASE_URL}${authorId}`, {
            headers: {
                'X-ELS-APIKey': API_KEY,
                'Accept': 'application/json'
            },
            params: {
                view: 'ENHANCED'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching Scopus data:', error);
        throw error;
    }
};
