function scheduleMeet(e) {
  var range = e.range;
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var col = range.getColumn();
  var row = range.getRow();

  if (col == 38) {
    if (e.value == 'FIXED') {
      var dataList = sheet.getRange(row, 1, 1, col).getValues();
      
      var emails = dataList[0][36].split(',');
      emails.push(dataList[0][4]);
      var emailsText = emails.toString();

      var title = dataList[0][33];
      var start = dataList[0][35];
      var duration = 30 * 60 * 1000; // Duration of the event in milliseconds (e.g., 30 minutes)
      var end = new Date(start.getTime() + duration);

      var description = dataList[0][34];

      // Replace with your actual Calendar ID
      var calendarId = 'YOUR_CALENDAR_ID@group.calendar.google.com';
      var calendar = CalendarApp.getCalendarById(calendarId);
      calendar.createEvent(title, start, end, {
        guests: emailsText,
        sendInvites: true,
        description: description
      });

      Logger.log("Event scheduled");
    }
  }
}
