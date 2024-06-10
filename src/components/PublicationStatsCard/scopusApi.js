import axios from 'axios';

const API_KEY = '5e97bbb460f8db3ab05343e0ddf391ed';
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
