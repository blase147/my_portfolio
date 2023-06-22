import pdfFile from './resume.pdf';
// import './components/Homepage/homePage.scss';

const DownloadPDF = () => {
  const handleDownload = () => {
    window.location.href = pdfFile;
  };

  return (
    <button className="my-resume" type="button" onClick={handleDownload}>Get My Resume</button>
  );
};

export default DownloadPDF;
