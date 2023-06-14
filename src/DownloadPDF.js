import pdfFile from './resume.pdf';

const DownloadPDF = () => {
  const handleDownload = () => {
    window.location.href = pdfFile;
  };

  return (
    <div>
      <button type="button" onClick={handleDownload}>Get My Resume</button>
    </div>
  );
};

export default DownloadPDF;
