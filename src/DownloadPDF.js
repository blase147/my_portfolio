import pdfFile from './resume.pdf';
// import './components/Homepage/homePage.scss';

const DownloadPDF = () => {
  const handleDownload = () => {
    window.location.href = pdfFile;
  };

  return (
    <div className="res-mail">
      <button className="my-resume" type="button" onClick={handleDownload}>Get My Resume</button>
      <button className="mailto" type="button">
        <a href="mailto:solarmails2gmail.com" target="_blank" rel="noreferrer">
          solarmails2@gmail.com
        </a>
      </button>

    </div>
  );
};

export default DownloadPDF;
