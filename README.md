# PDF Merger Web App

**pdfmerger** is a straightforward web application designed to merge multiple PDF files seamlessly. The application features a user-friendly interface created with HTML, CSS, and Bootstrap, and leverages EJS (Embedded JavaScript) for dynamic template rendering. The backend, powered by Node.js and Express, uses the PDF-merger-js library for efficient PDF merging.

## Features:

- **User-Friendly Interface:** The web interface, built with HTML, CSS, and Bootstrap, offers an intuitive user experience.

- **Dynamic Rendering with EJS:** EJS facilitates server-side rendering, enabling dynamic content generation based on user interactions.

- **PDF Merging with pdf-merger-js:** The backend efficiently merges PDF files using the pdf-merger-js library, ensuring a seamless process.

- **Node.js and Express Backend:** The application's robust server architecture is built on Node.js and Express.

- **File Uploads and Handling:** Users can upload multiple PDF files through a file input form, and the application intelligently handles file processing and merging.

## Getting Started:

To run the PDF Merger locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/pdfmerger.git
   ```

2. Install dependencies:

   ```bash
   cd pdfmerger
   npm install
   ```

3. Start the application:

   ```bash
   npm start
   ```

   Visit `http://localhost:3000` in your web browser.

## Dependencies:

- Express
- EJS
- Multer
- pdf-merger-js
- Other dependencies: cookie-parser, debug, http-errors, morgan

## Usage:

1. Access the application at `http://localhost:3000`.
2. Upload multiple PDF files using the file input form.
3. Navigate to `/merge`, where the merged PDF will be displayed.


## License:

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Feel free to explore the code and enhance the functionality of the PDF Merger! If you encounter any issues or have suggestions, please open an issue or submit a pull request. Happy merging!

