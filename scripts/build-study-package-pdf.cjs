const path = require('node:path');
const { mdToPdf } = require('md-to-pdf');

const repoRoot = path.resolve(__dirname, '..');
const useNoSandbox = process.argv.includes('--no-sandbox');

const config = {
  basedir: repoRoot,
  dest: path.join(repoRoot, 'Ontario-Intermediate-Math-ABQ-Study-Package.pdf'),
  document_title: 'Ontario Intermediate Mathematics ABQ Study Package',
  pdf_options: {
    format: 'Letter',
    margin: '15mm',
    printBackground: true,
  },
};

if (useNoSandbox) {
  config.launch_options = {
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  };
}

mdToPdf(
  { path: path.join(repoRoot, 'Ontario-Intermediate-Math-ABQ-Study-Package.md') },
  config,
)
  .then((output) => {
    if (!output) {
      process.exitCode = 1;
    }
  })
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
