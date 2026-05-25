/**
 * SacredReach — Google Apps Script form receiver
 * ────────────────────────────────────────────────
 * Deploy this as a Google Apps Script Web App so the static GitHub Pages site
 * can POST bookings, contact messages, and ad-page wishes directly into a Google Sheet.
 *
 * SETUP (one-time, ~5 minutes):
 *  1. Go to https://sheets.google.com — create a new sheet named "SacredReach".
 *  2. Add three tabs: "Bookings", "Contacts", and "Wishes".
 *
 *     Bookings headers (row 1):
 *       Submitted At | Type | Ref | Place | Ritual | Ritual Price |
 *       Name | Identifier | Family | WhatsApp | Date |
 *       Prasad Addon | Priority Video | Total | Locale | Latitude | Longitude
 *
 *     Contacts headers (row 1):
 *       Submitted At | Type | Ref | Name | Email | Phone |
 *       Country | Subject | Related Place | Message | Source | Locale | Latitude | Longitude
 *
 *     Wishes headers (row 1):
 *       Submitted At | Type | Religion | Name | WhatsApp | Wish | Latitude | Longitude | Locale
 *
 *  3. Go to Extensions → Apps Script.
 *  4. Paste this entire file, replacing any default code.
 *  5. Save (Ctrl+S), then click Deploy → New deployment.
 *     - Type: Web App
 *     - Execute as: Me
 *     - Who has access: Anyone  ← required so the static site can POST
 *  6. Copy the Web App URL (looks like https://script.google.com/macros/s/XXXX/exec).
 *  7. In GitHub → Settings → Secrets → Actions, add:
 *       NEXT_PUBLIC_SHEETS_URL = <that URL>
 *     Also add it to your local .env.local for development.
 *
 * Re-deploying after changes: Deploy → Manage deployments → pencil icon → New version.
 *
 * UPDATING LAT/LONG COLUMNS:
 *  After re-deploying, manually add "Latitude" and "Longitude" column headers
 *  to the existing Bookings and Contacts sheets. New rows will include the values;
 *  old rows without them will simply have empty cells.
 */

// ── CONFIG ─────────────────────────────────────────────────────────────────────
var SPREADSHEET_ID = ""; // Leave blank to use the sheet this script is bound to.
                          // Or paste the ID from the Sheet URL: /spreadsheets/d/<ID>/edit

var SHEET_BOOKINGS = "Bookings";
var SHEET_CONTACTS = "Contacts";
var SHEET_WISHES   = "Wishes";

// ── HELPERS ────────────────────────────────────────────────────────────────────
function getSheet(name) {
  var ss = SPREADSHEET_ID
    ? SpreadsheetApp.openById(SPREADSHEET_ID)
    : SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(name);
  if (!sheet) sheet = ss.insertSheet(name);
  return sheet;
}

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

// ── POST HANDLER ───────────────────────────────────────────────────────────────
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var now  = data.submittedAt || new Date().toISOString();

    if (data.type === "booking") {
      getSheet(SHEET_BOOKINGS).appendRow([
        now,
        "booking",
        data.bookingRef   || "",
        data.place        || "",
        data.ritual       || "",
        data.ritualPrice  || "",
        data.name         || "",
        data.identifier   || "",
        data.family       || "",
        data.whatsapp     || "",
        data.date         || "",
        data.prasadAddon  ? "Yes" : "No",
        data.priorityVideo? "Yes" : "No",
        data.total        || "",
        data.locale       || "",
        data.latitude     || "",
        data.longitude    || "",
      ]);

    } else if (data.type === "contact") {
      getSheet(SHEET_CONTACTS).appendRow([
        now,
        "contact",
        data.submissionRef || "",
        data.name          || "",
        data.email         || "",
        data.phone         || "",
        data.country       || "",
        data.subject       || "",
        data.relatedPlace  || "",
        data.message       || "",
        data.source        || "",
        data.locale        || "",
        data.latitude      || "",
        data.longitude     || "",
      ]);

    } else if (data.type === "wish") {
      getSheet(SHEET_WISHES).appendRow([
        now,
        "wish",
        data.religion  || "",
        data.name      || "",
        data.whatsapp  || "",
        data.wish      || "",
        data.latitude  || "",
        data.longitude || "",
        data.locale    || "",
      ]);

    } else {
      return jsonResponse({ success: false, error: "Unknown type: " + data.type });
    }

    return jsonResponse({ success: true });

  } catch (err) {
    return jsonResponse({ success: false, error: err.message });
  }
}

// ── GET HANDLER (health check) ─────────────────────────────────────────────────
function doGet() {
  return ContentService.createTextOutput("SacredReach Forms API — OK");
}
