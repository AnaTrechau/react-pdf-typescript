import { useState } from "react";
// import default react-pdf entry
import { Document, Page, pdfjs } from "react-pdf";
// import pdf worker as a url, see `next.config.js` and `pdf-worker.js`
import workerSrc from "../pdf-worker";

import MyDocument from './document'
import { BlobProvider } from '@react-pdf/renderer';

let newLocal = pdfjs.GlobalWorkerOptions.workerSrc;
newLocal = workerSrc

export default function PDFViewer(): JSX.Element {

    const [file, setFile] = useState("./sample.pdf");
    const [numPages, setNumPages] = useState(null);

    function onFileChange(event) {
        setFile(event.target.files[0]);
    }

    function onDocumentLoadSuccess({ numPages: nextNumPages }): void {
        setNumPages(nextNumPages);
    }

    return (

        // Retorno do pdf sample
        <div>
        <div>
            <label htmlFor="file">Load from file:</label>{" "}
            <input onChange={onFileChange} type="file" />
        </div>
        <div>
            <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from({ length: numPages }, (_, index) => (
                <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                    renderAnnotationLayer={false}
                    renderTextLayer={false}
                />
            ))}
            </Document>
        </div>
        </div>

        //Retorno PDF gerado pelo react-pdf
        // <BlobProvider document={<MyDocument/>}>
        //     {({ blob, url, loading }) => {
        //         return loading ? <div>Loading</div> : (
        //         <Document file={url}
        //         renderMode="canvas">
        //                 <Page pageNumber={1}
        //                 width={window.innerWidth}/>
        //         </Document>
        //         );
        //     }}
        // </BlobProvider>
    )
}
