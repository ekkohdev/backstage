const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');
const { bundle } = require('lightningcss');

const source = '../../packages/canon/src/css';
const destination = '../public';

const source1 = path.join(__dirname, `${source}/core.css`);
const destination1 = path.join(__dirname, `${destination}/core.css`);
const source2 = path.join(__dirname, `${source}/components.css`);
const destination2 = path.join(__dirname, `${destination}/components.css`);
const source3 = path.join(
  __dirname,
  `../../packages/canon/.storybook/themes/backstage.css`,
);
const destination3 = path.join(__dirname, `${destination}/backstage.css`);

// Function to bundle and copy the CSS file
const bundleAndCopyFile = async (source, destination) => {
  try {
    const result = await bundle({
      filename: source,
      minify: false,
    });

    fs.writeFileSync(destination, result.code);
    console.log('File bundled and copied successfully!');
  } catch (err) {
    console.error('Error bundling file:', err);
  }
};

// Watch the source file for changes
chokidar.watch(source1).on('change', () => {
  console.log('Detected change in core.css, bundling and copying...');
  bundleAndCopyFile(source1, destination1);
});

// Watch the components.css file for changes
chokidar.watch(source2).on('change', () => {
  console.log('Detected change in components.css, bundling and copying...');
  bundleAndCopyFile(source2, destination2);
});

// Watch the backstage.css file for changes
chokidar.watch(source3).on('change', () => {
  console.log('Detected change in backstage.css, bundling and copying...');
  bundleAndCopyFile(source3, destination3);
});

// Initial bundle and copy
bundleAndCopyFile(source1, destination1);
bundleAndCopyFile(source2, destination2);
bundleAndCopyFile(source3, destination3);
