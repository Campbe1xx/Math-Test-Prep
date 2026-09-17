const launch_options =
  process.env.MD_TO_PDF_NO_SANDBOX === '1'
    ? { args: ['--no-sandbox', '--disable-setuid-sandbox'] }
    : {};

module.exports = {
  document_title: 'Ontario Intermediate Mathematics ABQ Study Package',
  launch_options,
  pdf_options: {
    format: 'Letter',
    margin: '15mm',
    printBackground: true,
  },
};
