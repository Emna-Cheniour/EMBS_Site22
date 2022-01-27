import Viewer, { Worker } from '@phuocng/react-pdf-viewer';
import React from 'react';
 
import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';
export default function Charity() {
  return (
    <div>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.4.456/build/pdf.worker.min.js">
              <div style={{ height: '750px' }}>
                <Viewer fileUrl="C:\Users\lenovo\EMBS_Site2022\EMBS_2022\src\components\newsletter2\EMBS-NEWSLETTER.pdf" />
              </div>
            </Worker>
     
    </div>
  );
}