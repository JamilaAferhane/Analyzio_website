const express = require('express');
const multer = require('multer'); 
const { spawn } = require('child_process'); //the function spawn from child_process is for running Python scripts
const path = require('path');
const cors = require('cors');
const app = express();

app.use(cors());

const storage = multer.diskStorage({
  destination: 'uploads/', // Set the destination directory
  filename: (req, file, callback) => {
    callback(null, file.originalname); // Use the original filename for the title extraction
  },
});

const analyze = multer({ storage });

app.post('/analyze', analyze.single('pdf'), async(req, res) => {
  console.log('Received upload request')
  console.log('File uploaded:', req.file);
  // res.status(200).send('File uploaded successfully');

  const pdfpath = req.file.path;

  //Generating title of the recieved file
  const pythonTitleProcess = spawn('python', [
    path.join(__dirname, './Algos/SemanticAnalysis/titleBridge.py'),
    pdfpath,
  ]);
  let title = ''
  pythonTitleProcess.stdout.on('data', (data) => {
    title = data.toString();
    console.log(title)
  });

  // Generating keywords 
  const pythonKeywordsProcess = spawn('python', [
    path.join(__dirname, './Algos/SemanticAnalysis/Keywords.py'),
    pdfpath,
  ]);
  let keywords = []
  pythonKeywordsProcess.stdout.on('data', (data)=>{
    keywords = data.toString().split(',');
    console.log(keywords)
  });
  
  // Generating summary of the recieved file
  const pythonProcess = spawn('python', [
    path.join(__dirname, './Algos/SemanticAnalysis/bridge.py'),
    pdfpath,
  ]);

  let generatedSummary = '';
  pythonProcess.stdout.on('data', (data) => {
    generatedSummary += data.toString();
    console.log('Generated Summary:', generatedSummary)
  });

  pythonProcess.on('close', (code) => {
    if (code === 0){
        res.json({ title, keywords, generatedSummary});
        console.log('Summary successfully sent')
    } else {
        console.error('Error generating summary')
        res.status(500).json({ error: 'Error generating summary'})
    }
  });

});


const PORT = 3001; // Choose a suitable port number
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
