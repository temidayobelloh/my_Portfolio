

const DownloadcvButton = () => {
    const cvFile ='https://drive.google.com/file/d/1pRmvsvH0wiKJUJUChTMqHIlUFbK0DBZP/view?usp=sharing';
    const fileName ="Temidayo Bello CV";
    //const cvFile = `${process.env.PUBLIC_URL}/Temidayo Bello Hajarah.pdf`;
    //const link = document.createElement('a');
    //link.href = cvFile;
    //link.download = 'TemidayoBelloCV'; //specify the name that i want the downloaded CV to have
    //document.body.appendChild(link);
    //link.click();
    //document.body.removeChild(link);

  return (
    <div>
    <a href={cvFile} download ={fileName} >
    <button className='homePage-button' onClick={DownloadcvButton}>Download CV</button>
    </a>
      
    </div>
  )
}

export default DownloadcvButton;
