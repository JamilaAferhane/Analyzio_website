import React, {useState} from 'react';
import axios from 'axios';
import './SemanticAnalyzer.css';
import { parse } from 'uuid';

axios.defaults.baseURL = 'http://localhost:3001'; 

const SemanticAnalyzer = () => {
  const [pdfContent, setPdfContent] = useState('');
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [generatedTitle, setTitle ] = useState('');
  const [generatedKeywords, setKeywords] = useState([]);
  const [generatedSummary, setGeneratedSummary] = useState('');

  // upload button logic
  const handleUpload = async (event) => {
    const file = event.target.files[0];
    setSelectedPdf(file);

    const reader = new FileReader();

    reader.onload = async (e) => {
      const pdfData = new Uint8Array(e.target.result);
      
      const pdfjs = await import('pdfjs-dist/build/pdf');
      const pdfjsWorker = await import('pdfjs-dist/build/pdf.worker.entry');

      pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

      try {
        const loadingTask = pdfjs.getDocument({ data: pdfData });
        const pdf = await loadingTask.promise;

        let textContent = '';
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const pageText = await page.getTextContent();
          textContent += pageText.items.map(item => item.str).join(' ');
        }

        setPdfContent(textContent);
      } catch (error) {
        console.error('Error loading PDF:', error);
      }
    };

    reader.readAsArrayBuffer(file);
  };

  // Analyze button logic
  const handleAnalyze = async () => {
    if (!selectedPdf) {
      console.error('No pdf selected');
      return;
    }

    const formData = new FormData();
    formData.append('pdf', selectedPdf);
    
    try {
      const response = await axios.post('/analyze', formData);
      const { title, keywords, summary } = response.data;
      const parsedKeywords = keywords
      ? keywords.replace(/'|\[|\]/g,'')
      : [];

      setTitle(title);
      setKeywords(parsedKeywords);
      setGeneratedSummary(summary);
      console.log('Summary:', summary);
    } catch(error){
      console.error('Error sending Pdf to server:', error);
    }
  };

  return (
    <section className='sa-section'>
      <div className='flexCenter paddings innerWidth sa-wrapper'>
        <div className="  flexColStart">
                <span className='title'>Semantic Analyzer</span>
                <span className='primaryText' >Analyze your documents easily and rapidly</span>
        </div>
        <div className='sa-container'>

            <div className='flexStart firstrow'>
                <h1 className='saTitle'>Semantic Analyzer</h1>
                <div className='languageBottons'>
                <button className=' enBotton'>English</button>
                <button className=' frBotton'>French</button>
                </div>
                <div className='flexStart summarylength'>
                <h3 className='summaryLengthTitle'>Summary Length</h3>
                <input type="range" id="range" min={3} max={10}/>
                </div>
              </div>

              <div className=' blocks'>
                  <div className='block_1'>
                    {pdfContent}
                  </div>
                  <div className='block_2'>
                    <p className="titre">Title:</p>
                    <p className="result titlere">{generatedTitle}</p>
                    <p className="titre">Keywords:</p>
                    <p className="result keywordsre"> {generatedKeywords}</p>
                    <p className='titre'>Summary:</p>
                    <p className='result'> {generatedSummary}</p>
                  </div>
              </div>
              
              <div className='b-container'>
                  <input type="file" id="upload" hidden onChange={handleUpload}/>
                  <label for="upload">Upload PDF</label>
                  <button className='bouton analyze' onClick={handleAnalyze}>Analyze</button>
                  <button className='bouton download'>Download</button>
              </div>

      </div>
      </div>
    </section>
  )
}

export default SemanticAnalyzer
