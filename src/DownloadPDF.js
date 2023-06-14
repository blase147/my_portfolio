import pdfFile from './resume.pdf';

const DownloadPDF = () => {
  const handleDownload = () => {
    window.location.href = pdfFile;
  };

  return (
    <div>
      <h2>Download PDF</h2>
      <button type="button" onClick={handleDownload}>Download</button>
    </div>
  );
};

export default DownloadPDF;
