const documentTitle = 'Ontario Intermediate Mathematics ABQ Study Package';
const launchOptions =
  process.env.MD_TO_PDF_NO_SANDBOX === '1'
    ? { args: ['--no-sandbox', '--disable-setuid-sandbox'] }
    : {};
const pdfOptions = {
  format: 'Letter',
  margin: '15mm',
  printBackground: true,
};

module.exports = {
  document_title: documentTitle,
  documentTitle,
  launch_options: launchOptions,
  launchOptions,
  pdf_options: pdfOptions,
  pdfOptions,
};
