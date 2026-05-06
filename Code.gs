function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

function submitCrime(data) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    sheet.appendRow([
      data.name,
      data.crime,
      data.location,
      data.description,
      new Date()
    ]);

    return "SUCCESS";
  } catch (e) {
    return "ERROR: " + e;
  }
}
