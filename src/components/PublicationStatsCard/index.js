import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Box, Table, TableBody, TableCell, TableRow, Link } from '@mui/material';
import { Article, LibraryBooks, Person, Star } from '@mui/icons-material';
import { fetchScopusStats } from './scopusApi';
import Globals from '../../Globals';

// Scopus Page 

const PublicationStatsCard = () => {
    const [stats, setStats] = useState([
        { icon: <Star style={{ color: '#FFDC60' }} />, heading: 'Author ID', text: Globals.scopusUsername, link: 'https://www.scopus.com/authid/detail.uri?authorId=57221967474' },
        { icon: <Person style={{ color: '#FFDC60' }} />, heading: 'h-index', text: 'Loading...' },
        { icon: <Person style={{ color: '#FFDC60' }} />, heading: 'Coauthors', text: 'Loading...' },
        { icon: <LibraryBooks style={{ color: '#FFDC60' }} />, heading: 'Citations', text: 'Loading...' },
        { icon: <Article style={{ color: '#FFDC60' }} />, heading: 'Documents', text: 'Loading...' },
    ]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStats = async () => {
            console.log('Fetching Scopus stats...');
            setLoading(true);
            setError(null);

            try {
                const authorId = Globals.scopusUsername;
                const data = await fetchScopusStats(authorId);

                console.log('Scopus data fetched:', data);

                const hIndex = data['author-retrieval-response'][0]['h-index'];
                const coauthorCount = data['author-retrieval-response'][0]['coauthor-count'];
                const citationsCount = data['author-retrieval-response'][0]['coredata']['citation-count'];
                const documentCount = data['author-retrieval-response'][0]['coredata']['document-count'];

                setStats([
                    { icon: <Star style={{ color: '#FFDC60' }} />, heading: 'Author ID', text: '57221967474', link: 'https://www.scopus.com/authid/detail.uri?authorId=57221967474' },
                    { icon: <Person style={{ color: '#FFDC60' }} />, heading: 'h-index', text: hIndex },
                    { icon: <Article style={{ color: '#FFDC60' }} />, heading: 'Documents', text: documentCount },
                    { icon: <LibraryBooks style={{ color: '#FFDC60' }} />, heading: 'Citations', text: citationsCount },
                    { icon: <Person style={{ color: '#FFDC60' }} />, heading: 'Co-Authors', text: coauthorCount },
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
                justifyContent: 'center'

                // Center align the title
            }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
                    Scopus Stats
                </Typography>
            </Box>
            <CardContent>
                {loading ? (
                    <Typography
                        sx={{ fontSize: "1.5rem" }}
                    >Loading...</Typography>
                ) : error ? (
                    <Typography
                        sx={{ fontSize: "1.5rem" }}
                        color="error">{error}</Typography>
                ) : (
                    <Table>
                        <TableBody>
                            {stats.map((stat, index) => (
                                <TableRow key={index} sx={{ borderBottom: 'none' }}>
                                    <TableCell sx={{ borderBottom: 'none', padding: '2px', paddingRight: '10px', width: '40px' }}>
                                        {stat.icon}
                                    </TableCell>
                                    <TableCell sx={{ borderBottom: 'none', padding: '2px' }}>
                                        <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: "1.5rem" }}>
                                            {stat.heading}:
                                        </Typography>
                                    </TableCell>
                                    <TableCell sx={{ borderBottom: 'none', padding: '2px' }}>
                                        {stat.link ? (
                                            <Link href={stat.link} target="_blank" rel="noopener noreferrer" sx={{ fontWeight: 'bold', fontSize: "1.5rem", color: 'white', '&:hover': { color: '#FFDC60' } }}>
                                                {stat.text}
                                            </Link>
                                        ) : (
                                            <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: "1.5rem" }}>
                                                {stat.text}
                                            </Typography>
                                        )}
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
