import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; 
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Worker } from '@react-pdf-viewer/core'; 
import './styleNews.css';
import React , {useState } from 'react';
import embsFile from './embs.pdf';

export default function Pdf() {
  const [defaultPdfFile]=useState(embsFile);

  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <div className='pdfContainer' style={{
      border: '1px solid rgba(0, 0, 0, 0.3)',
      height: '650px',
  }}>
      {defaultPdfFile&&<><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
          <Viewer fileUrl={defaultPdfFile}
            plugins={[defaultLayoutPluginInstance]} />
      </Worker></>}
    </div>
    
  );
  
}