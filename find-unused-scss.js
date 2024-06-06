const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Step 1: List all SCSS files in the src folder and its subfolders
const srcFolder = path.join(__dirname, 'src');
const scssFiles = glob.sync(`${srcFolder}/**/*.scss`).map(filePath => path.relative(__dirname, filePath));

// Step 2: Search for SCSS file references in the project files
const codeFileExtensions = ['js', 'jsx', 'ts', 'tsx', 'html'];

const getAllCodeFiles = (dir) => {
    return glob.sync(`${dir}/**/*.{${codeFileExtensions.join(',')}}`);
};

const codeFiles = getAllCodeFiles(srcFolder);

const usedScssFiles = new Set();

codeFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    scssFiles.forEach(scssFile => {
        const relativePath = path.relative(path.dirname(file), scssFile);
        if (content.includes(scssFile) || content.includes(relativePath)) {
            usedScssFiles.add(scssFile);
        }
    });
});

// Step 3: Compare the lists
const unusedScssFiles = scssFiles.filter(scssFile => !usedScssFiles.has(scssFile));

console.log('Unused SCSS files:');
console.log(unusedScssFiles);

// Optional: Delete unused SCSS files (uncomment the following lines if you want to delete them)
// unusedScssFiles.forEach(scssFile => {
//     fs.unlinkSync(path.join(__dirname, scssFile));
//     console.log(`Deleted: ${scssFile}`);
// });
