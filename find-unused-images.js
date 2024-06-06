const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Step 1: List all images in the assets/img folder and its subfolders
const assetsFolder = path.join(__dirname, 'src', 'assets', 'img');
const imageExtensions = ['png', 'jpg', 'jpeg', 'gif', 'svg'];

const getAllImages = (dir) => {
    return glob.sync(`${dir}/**/*.{${imageExtensions.join(',')}}`);
};

const allImages = getAllImages(assetsFolder).map(imagePath => path.relative(__dirname, imagePath));

// Step 2: Search for image references in the project files
const projectFolder = path.join(__dirname, 'src');
const codeFileExtensions = ['js', 'jsx', 'ts', 'tsx', 'html'];

const getAllCodeFiles = (dir) => {
    return glob.sync(`${dir}/**/*.{${codeFileExtensions.join(',')}}`);
};

const codeFiles = getAllCodeFiles(projectFolder);

const usedImages = new Set();

codeFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    allImages.forEach(image => {
        if (content.includes(path.relative(projectFolder, image))) {
            usedImages.add(image);
        }
    });
});

// Step 3: Compare the lists
const unusedImages = allImages.filter(image => !usedImages.has(image));

console.log('Unused images:');
console.log(unusedImages);

// Optional: Delete unused images (uncomment the following lines if you want to delete them)
// unusedImages.forEach(image => {
//     fs.unlinkSync(path.join(__dirname, image));
//     console.log(`Deleted: ${image}`);
// });
