import React from 'react'

//Using HTML | DOM Anchor Object
// This approach use HTML DOM Anchor element to link a file adderess along with the anchor tag and download file using link.download with custom file name.

// Example: Here link the anchor tag to the pdf address / URL and use link.download to to save the file in local storage.

const ResumeDownloadButton = () => {


    const downloadResume = () => {
        const resumeUrl = '/hamzamuhammedCv.pdf'; 
        console.log(resumeUrl)
        const downloadLink = document.createElement('a');
        downloadLink.href = resumeUrl;
        downloadLink.download = 'hamzamuhammedCv.pdf'; 
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      };
  return (
    <button className="w-48 hover:bg-white bg-blue-100 text-blue-900 p-4 font-bold rounded-b-lg rounded-s-lg" onClick={downloadResume}>Download Resume  </button>
  )
}

export default ResumeDownloadButton