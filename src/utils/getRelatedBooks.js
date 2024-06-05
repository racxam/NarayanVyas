import booksData from '../data/booksData';
import callForChaptersData from '../data/callForChaptersBooksData';

const getRelatedItems = (currentItemId, isCFC, maxItems = 3) => {
    const itemsData = isCFC ? callForChaptersData : booksData;
    const currentItem = itemsData.find(item => item.id === currentItemId);
    if (!currentItem) return [];

    const { categories = [], publisher } = currentItem;

    // Filter items by same categories
    const itemsByCategory = itemsData.filter(item =>
        item.id !== currentItemId && item.categories && item.categories.some(cat => categories.includes(cat))
    );

    // If enough items are found by category
    if (itemsByCategory.length >= maxItems) {
        return itemsByCategory.slice(0, maxItems);
    }

    // Add items by same publisher
    const itemsByPublisher = itemsData.filter(item =>
        item.id !== currentItemId && item.publisher === publisher && !itemsByCategory.includes(item)
    );

    const combinedItems = [...itemsByCategory, ...itemsByPublisher];

    // If enough items are found by category and publisher
    if (combinedItems.length >= maxItems) {
        return combinedItems.slice(0, maxItems);
    }

    // Add remaining items
    const remainingItems = itemsData.filter(item =>
        item.id !== currentItemId && !combinedItems.includes(item)
    );

    return [...combinedItems, ...remainingItems].slice(0, maxItems);
};

export default getRelatedItems;
