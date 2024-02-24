const PDFMerger = require('pdf-merger-js');

var merger = new PDFMerger();

const mergeFunc=async (p1,p2) => {
  merger.add(p1);  //merge all pages. parameter is the path to file and filename.
  merger.add(p2);  //merge all pages. parameter is the path to file and filename.
  let d=new Date().getTime()

  await merger.save(`../pdfmerger/public/${d}.pdf`); //save under given name and reset the internal document
  return d
}

module.exports=mergeFunc
// const PDFMerger = require('pdf-merger-js');
// // import PDFMerger from 'pdf-merger-js';

// var merger = new PDFMerger();

// const mergeFunc=async (p1,p2) => {
//   await merger.add(p1,p2);  //merge all pages. parameter is the path to file and filename.


//   // Set metadata
//   await merger.setMetadata({
//     producer: "pdf-merger-js based script",
//     author: "Fardin Khan",
//     creator: "Fardin Khan",
//     title: "Fardin Khan"
//   });

//   await merger.save('merged.pdf'); //save under given name and reset the internal document
  
//   // Export the merged PDF as a nodejs Buffer
//   // const mergedPdfBuffer = await merger.saveAsBuffer();
//   // fs.writeSync('merged.pdf', mergedPdfBuffer);
// }

// module.exports=mergeFunc;