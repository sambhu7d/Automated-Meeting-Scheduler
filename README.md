 Project Title: Automated Meeting Scheduler

 Project Overview:
This project involves developing an automated script that integrates Google Sheets with Google Calendar to schedule meetings. The script is triggered when a specific cell in a spreadsheet is updated, indicating that a meeting needs to be scheduled. It then retrieves the necessary details from the spreadsheet, creates a calendar event, and sends invites to the listed participants.

 Features:
1. Spreadsheet Trigger: Activates based on updates in a specific column of a Google Sheet.
2. Dynamic Event Creation: Gathers meeting details (like title, start time, duration, description) from the spreadsheet and creates a calendar event.
3. Email Invitation: Automatically sends calendar invites to a list of email addresses extracted from the spreadsheet.
4. Customizable Event Duration: Allows setting the meeting duration within the script.

 Technologies Used:
- Google Apps Script: For scripting the integration between Google Sheets and Google Calendar.
- Google Sheets: To store and retrieve meeting information.
- Google Calendar: For creating and managing calendar events.

 Functional Description:
- The script listens for changes in a specific column of a Google Sheet.
- When a 'FIXED' value is entered into the designated column, the script reads the meeting details from the same row.
- It then creates a new event in the specified Google Calendar with these details and sends email invites to the participants listed in the spreadsheet.

 Use Cases:
- Corporate Meeting Scheduling: Useful for businesses to automate the scheduling of meetings based on project timelines or task completions.
- Event Management: Helpful for event coordinators in scheduling meetings or events and sending out invites automatically.
- Educational Institutions: Can be used by schools or colleges for scheduling committee meetings or parent-teacher conferences.

 Future Enhancements:
1. Error Handling and Validation: Implement checks to handle errors in data retrieval or event creation.
2. Customizable Email Content: Allow customization of the email invite content within the script.
3. User Interface for Schedule Management: Create a GUI for non-technical users to manage scheduling without directly interacting with the script.
4. Integration with Additional Services: Expand functionality to integrate with other calendar services or communication tools.

 Project Status:
- The script is currently operational with basic functionalities for meeting scheduling. Continuous improvements and feature additions are planned for future updates.
