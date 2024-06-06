const fs = require('fs');
const path = require('path');

// Function to get directory structure
const getDirectoryStructure = (dir, prefix = '', exclude = []) => {
    let result = `${prefix}${path.basename(dir)}\n`;
    const items = fs.readdirSync(dir);

    items.forEach((item, index) => {
        const itemPath = path.join(dir, item);
        const isLastItem = index === items.length - 1;
        const newPrefix = isLastItem ? `${prefix}└── ` : `${prefix}├── `;
        const subPrefix = isLastItem ? `${prefix}    ` : `${prefix}│   `;

        if (exclude.includes(item)) {
            return;
        }

        result += `${newPrefix}${item}\n`;

        if (fs.statSync(itemPath).isDirectory()) {
            result += getDirectoryStructure(itemPath, subPrefix, exclude);
        }
    });

    return result;
};

// Main function to save directory structure to a text file
const main = () => {
    const dirPath = __dirname; // Root directory of your project
    const outputFile = path.join(__dirname, 'directory_structure.txt');
    const exclude = ['.git', 'node_modules', 'dist', 'build']; // Directories to exclude

    try {
        const structure = getDirectoryStructure(dirPath, '', exclude);
        fs.writeFileSync(outputFile, structure);
        console.log(`Directory structure saved to ${outputFile}`);
    } catch (error) {
        console.error('Error:', error);
    }
};

main();
