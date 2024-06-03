import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Box, Table, TableBody, TableCell, TableRow } from '@mui/material';
import { Book, Article, LibraryBooks, Person, Star } from '@mui/icons-material';
import { fetchScopusStats } from './scopusApi';

const PublicationStatsCard = () => {
    const [stats, setStats] = useState([
        { icon: <Person style={{ color: 'orange' }} />, heading: 'h-index', text: 'Loading...' },
        { icon: <Person style={{ color: 'blue' }} />, heading: 'Coauthor Count', text: 'Loading...' },
        { icon: <LibraryBooks color="primary" />, heading: 'Citations Count', text: 'Loading...' },
        { icon: <Star style={{ color: 'purple' }} />, heading: 'ORCID', text: 'Loading...' },
        { icon: <Article color="secondary" />, heading: 'Document Count', text: 'Loading...' },
    ]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStats = async () => {
            console.log('Fetching Scopus stats...');
            setLoading(true);
            setError(null);

            try {
                const authorId = 'your_author_id';
                const data = await fetchScopusStats(authorId);

                console.log('Scopus data fetched:', data);

                // Process the data to extract the required statistics
                const hIndex = data['author-retrieval-response'][0]['h-index'];
                const coauthorCount = data['author-retrieval-response'][0]['coauthor-count'];
                const citationsCount = data['author-retrieval-response'][0]['coredata']['citation-count'];
                const orcid = data['author-retrieval-response'][0]['coredata']['orcid'];
                const documentCount = data['author-retrieval-response'][0]['coredata']['document-count'];

                // Update the stats with the fetched data
                setStats([
                    { icon: <Person style={{ color: 'orange' }} />, heading: 'h-index', text: hIndex },
                    { icon: <Person style={{ color: 'blue' }} />, heading: 'Coauthor Count', text: coauthorCount },
                    { icon: <LibraryBooks color="primary" />, heading: 'Citations Count', text: citationsCount },
                    { icon: <Star style={{ color: 'purple' }} />, heading: 'ORCID', text: orcid },
                    { icon: <Article color="secondary" />, heading: 'Document Count', text: documentCount },
                ]);

                setLoading(false);
            } catch (error) {
                console.error('Error fetching stats:', error);
                setError('Failed to fetch data from Scopus');
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    return (
        <Card sx={{
            borderRadius: '8px',
            border: '1px solid yellow',
            overflow: 'hidden',
            width: '100%',
            backgroundColor: 'transparent'
        }}>
            <Box sx={{
                backgroundColor: '#FFDC60',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center' // Center align the title
            }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    Publications and Stats
                </Typography>
            </Box>
            <CardContent>
                {loading ? (
                    <Typography>Loading...</Typography>
                ) : error ? (
                    <Typography color="error">{error}</Typography>
                ) : (
                    <Table>
                        <TableBody>
                            {stats.map((stat, index) => (
                                <TableRow key={index} sx={{ borderBottom: 'none' }}>
                                    <TableCell sx={{ borderBottom: 'none', padding: '5px 0', paddingRight: '10px' }}>
                                        {stat.icon}
                                    </TableCell>
                                    <TableCell sx={{ borderBottom: 'none', padding: '5px 0' }}>
                                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                            {stat.heading}:
                                        </Typography>
                                    </TableCell>
                                    <TableCell sx={{ borderBottom: 'none', padding: '5px 0' }}>
                                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                            {stat.text}
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                )}
            </CardContent>
        </Card>
    );
};

export default PublicationStatsCard;
