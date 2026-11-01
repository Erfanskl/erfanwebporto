/**
 * ====================================================================
 * ACADEMIC COURSEWORK & FOLDER REPOSITORY DATA
 * Informatics • Universitas Ahmad Dahlan
 * ====================================================================
 * 
 * HOW TO UPDATE GOOGLE DRIVE SUBMISSION LINK:
 * --------------------------------------------------------------------
 * 1. Upload your coursework file or folder to your Google Drive.
 * 2. Right-click the file/folder in Google Drive -> Click "Share" ->
 *    Change access to "Anyone with the link can view".
 * 3. Copy the link.
 * 4. Paste the URL into the `driveUrl` field below for each assignment.
 * ====================================================================
 */

const courseworkFolders = [
  {
    folderId: "folder-english-prof",
    folderName: "ENGLISH PROFESSIONAL",
    submissions: [
      {
        id: "assignment-01",
        title: "Assignment 01",
        driveUrl: "https://drive.google.com/"
      },
      {
        id: "assignment-02",
        title: "Assignment 02",
        driveUrl: "https://drive.google.com/"
      },
      {
        id: "assignment-03",
        title: "Assignment 03",
        driveUrl: "https://drive.google.com/"
      },
      {
        id: "assignment-04",
        title: "Assignment 04",
        driveUrl: "https://drive.google.com/"
      },
      {
        id: "assignment-05",
        title: "Assignment 05",
        driveUrl: "https://drive.google.com/"
      }
    ]
  }
];

// Export to window scope for client-side rendering
if (typeof window !== "undefined") {
  window.courseworkFolders = courseworkFolders;
}
