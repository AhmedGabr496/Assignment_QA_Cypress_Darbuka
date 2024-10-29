// Import required dependencies
const { merge } = require('mochawesome-merge')        // For merging multiple JSON reports
const generator = require('mochawesome-report-generator')  // For generating HTML reports
const path = require('path')                          // For handling file paths

async function generateReport() {
    // Define paths for input and output directories
    const reportDir = path.join(__dirname, '../cypress/reports/mocha')  // Directory containing JSON reports
    const outputDir = path.join(__dirname, '../cypress/reports')        // Directory for final HTML report
    
    // Merge all json reports into a single JSON file
    // The /*.json pattern will match all JSON files in the reportDir
    const jsonReport = await merge({
        files: [reportDir + '/*.json'],
    })
    
    // Generate a  HTML report from the genrated JSON
    await generator.create(jsonReport, {
        reportDir: outputDir,           // Where to save the HTML report
        reportTitle: 'Darbuka Test Report',  // Title displayed on the report
        reportPageTitle: 'Test Results',     // Browser tab title
        charts: true,                   // Include test result charts
        embeddedScreenshots: true,      // Include any test failure screenshots in the HTML
        inlineAssets: true,             // Add assets (CSS/JS) in HTML for portable report
    })
}

// Execute the report generation
generateReport() 