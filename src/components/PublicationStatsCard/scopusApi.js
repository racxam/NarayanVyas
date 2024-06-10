import axios from 'axios';

const API_KEY = '5e97bbb460f8db3ab05343e0ddf391ed';
const AUTHOR_BASE_URL = 'https://api.elsevier.com/content/author/author_id/';
const DOCUMENT_BASE_URL = 'https://api.elsevier.com/content/search/scopus';
const CITATION_COUNT_URL = 'https://api.elsevier.com/content/abstract/citation-count';

// Axios instance with retry logic
const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(null, async (error) => {
    const { config, response } = error;
    if (response && response.status === 429) {
        const retryAfter = response.headers['retry-after'];
        const delay = retryAfter ? parseInt(retryAfter, 10) * 1000 : 1000; // default to 1 second if not specified
        await new Promise((resolve) => setTimeout(resolve, delay));
        return axiosInstance(config);
    }
    return Promise.reject(error);
});

// Function to fetch Scopus stats for an author
export const fetchScopusStats = async (authorId) => {
    try {
        console.log('Fetching Scopus stats for author ID:', authorId);
        const response = await axiosInstance.get(`${AUTHOR_BASE_URL}${authorId}`, {
            headers: {
                'X-ELS-APIKey': API_KEY,
                'Accept': 'application/json'
            },
            params: {
                view: 'ENHANCED'
            }
        });
        console.log('Fetched Scopus stats:', response.data);
        return response.data;
    } catch (error) {
        console.log(error);
        console.error('Error fetching Scopus stats:', error);
        throw error;
    }
};

// Function to fetch Scopus citation count for a document
export const fetchScopusCitationCount = async (documentId) => {
    try {
        console.log('Fetching Scopus citation count for document ID:', documentId);
        const response = await axiosInstance.get(`${DOCUMENT_BASE_URL}`, {
            headers: {
                'X-ELS-APIKey': API_KEY,
                'Accept': 'application/json'
            },
            params: {
                query: `DOI(${documentId})` // Adjust this based on the type of document ID you are using
            }
        });
        console.log('Fetched Scopus citation count:', response.data);

        // Extract citation count from the response
        const entry = response.data['search-results'].entry[0];
        const citationCount = entry['citedby-count'];

        return citationCount;
    } catch (error) {
        console.error('Error fetching Scopus citation count:', error);
        throw error;
    }
};

// Function to fetch Scopus citation count image for a document
export const fetchScopusCitationImage = async (documentId) => {
    try {
        console.log('Fetching citation image for document ID:', documentId);
        const response = await axiosInstance.get(`${CITATION_COUNT_URL}`, {
            headers: {
                'X-ELS-APIKey': API_KEY,
                'Accept': 'image/jpeg'
            },
            params: {
                doi: documentId,
                httpAccept: 'image/jpeg'
            },
            responseType: 'arraybuffer'
        });

        console.log('Citation image response:', response);

        // Convert the response data to a base64 encoded string
        const blob = new Blob([response.data], { type: 'image/jpeg' });
        const imageSrc = await new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });

        console.log('Image source:', imageSrc);
        return imageSrc;
    } catch (error) {
        console.error('Error fetching Scopus citation image:', error);
        throw error;
    }
};
