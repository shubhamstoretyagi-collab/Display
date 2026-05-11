// Replace WEB_APP_URL in script.js after deploying this Apps Script as Web App.
// This file is a placeholder for Google Sheets integration.
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Data') ||
              SpreadsheetApp.getActiveSpreadsheet().insertSheet('Data');
  var data = JSON.parse(e.postData.contents);
  sheet.appendRow([new Date(), JSON.stringify(data)]);
  return ContentService.createTextOutput(JSON.stringify({success:true}))
    .setMimeType(ContentService.MimeType.JSON);
}
