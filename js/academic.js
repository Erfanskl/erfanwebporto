/**
 * ====================================================================
 * ACADEMIC COURSEWORK REPOSITORY — SCRIPT
 * Informatics • Universitas Ahmad Dahlan
 * ====================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Lucide Icons
  if (typeof lucide !== "undefined" && lucide.createIcons) {
    lucide.createIcons();
  }

  // 2. Dynamic Year Update
  const academicYear = document.getElementById("academicYear");
  if (academicYear) {
    academicYear.textContent = new Date().getFullYear();
  }

  // 3. Render Coursework Folders dynamically from js/assignments.js
  const container = document.getElementById("courseworkFoldersContainer");
  const folders = Array.isArray(window.courseworkFolders) ? window.courseworkFolders : [];

  if (container && folders.length > 0) {
    container.innerHTML = folders.map((folder) => {
      const submissionsHtml = folder.submissions.map((sub) => {
        const driveUrl = sub.driveUrl || "https://drive.google.com/";

        return `
          <div class="submission-file-card">
            <div class="file-info-group">
              <div class="file-icon-box">
                <i data-lucide="file-text" style="width: 22px; height: 22px;"></i>
              </div>
              <div class="file-text-content">
                <h3 class="file-title">${sub.title || "Assignment Submission"}</h3>
              </div>
            </div>

            <!-- Direct Google Drive Redirect Button -->
            <a 
              href="${driveUrl}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="drive-redirect-btn"
            >
              <i data-lucide="external-link" style="width: 16px; height: 16px;"></i>
              <span>Open</span>
            </a>
          </div>
        `;
      }).join("");

      return `
        <div class="course-folder-card">
          <!-- Folder Top Bar -->
          <div class="folder-top-bar">
            <div class="folder-identity">
              <div class="folder-big-icon">
                <i data-lucide="folder" style="width: 24px; height: 24px;"></i>
              </div>
              <div class="folder-names">
                <span class="folder-dir-name">${folder.folderName}</span>
              </div>
            </div>

            <div class="folder-meta-badges">
              <span class="f-badge code">${folder.submissions.length} Submissions</span>
            </div>
          </div>

          <!-- Folder Submissions -->
          <div class="folder-contents-container">
            ${submissionsHtml}
          </div>
        </div>
      `;
    }).join("");

    // Re-create icons for dynamically generated elements
    if (typeof lucide !== "undefined" && lucide.createIcons) {
      lucide.createIcons();
    }
  }
});
