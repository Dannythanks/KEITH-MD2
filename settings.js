/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUJIc1hETW5uUVlYbVM0d1ZRK0RkcHhUT21DUEMxTUQzWGpjR3pMcHozQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMjJnOForUW11RmdJbUxaNFdkRUg4blgrR1BqZXJtMXM1NzhKUm94YkJYRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFSzdsMWhnTlQ4VzQvSWtsS2lGSHBWbUF3elBBOUVqdkhVMkFsdEpYMEc4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzWmoxS0p3OFFwSWNIRUpIR09ZQjRBWXZXNTFrbDJJT2w4NHBIZlZvL2d3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlMamhneC9QZ3J5dnpmRWR0VThwbkE4UmE2NnA5QXNHOWo0REgzdDI3MkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRsc2cwNDZxZkF4QTFuR3NrSGM0V2RUeWVjb2pYN3dnZjVtSG4wOTZ0QnM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0hrcWRXQjhZVm9xKzU3ek03M3JCaVlIeldCL0J1MmxXQUF3aWwzR2ltRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibmhhRWdLRmZBamI5bXlkNWZweUJKUDVwMG5lYzZEVm1iYnRqek1saXMyWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikh3ZVhDRDVuSnhDY2t3TUR3dE1QVHZTMjRpOUxFUE1VUEVFWHR0S1JSdkpDNENYVUwrSE05Y3VUblc0RCt3cmxzNXg4RGtOYkhQbTNmeE80RkM2eURRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA3LCJhZHZTZWNyZXRLZXkiOiJmd0k5Ujdyd1V0cjZrSitYZjE2dE1Wa3FQZHVnRnRuZ1Zua3Z4dTFuejZJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJFazkwTGRtUFJ6QzJHeGpxbkJJSXJnIiwicGhvbmVJZCI6IjRmOTcyMmUxLTk4MTktNGRhOC1iM2M0LWFkNDNkZGM3NTdmZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDM0RWQjc2bitJNFRkalgzYk5rQkFvdnhZcFU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVy9HQ3ZaT084MWdqRklTVTJRbktUVktzSkNFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkVNTlFDWkNaIiwibWUiOnsiaWQiOiIyNTU2ODI0MTkxMTE6MjVAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0x1MnhQb0VFTFBYb0xvR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImMrZ0ZuYkJiR2FrRm9oaE01UDQ0NFJqbmtyajAwVkZUV3gza09uL0daMGM9IiwiYWNjb3VudFNpZ25hdHVyZSI6InNISHhoVVlwc0FTekVYcWI3RTF1elQ0SktmSTljb3hPZTBxaFJ6a3lSTk1CS1g3N1ZncHNuNW5Ib2liODZvTFFadldDQ1BUVDlQTGFHYTNKcmVQRUN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJRREVyWnhIMWxwcERqVmVlSVNFR2dPbVBkbG9EbnB3TG40WkpoaUV4UEU0WnpvbjZFck1FVVhCZHRKYW9PdEJrWDllWXNCSDZtVDkvYm5VdXZ5dmFDZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NTY4MjQxOTExMToyNUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYUG9CWjJ3V3htcEJhSVlUT1QrT09FWTU1SzQ5TkZSVTFzZDVEcC94bWRIIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMyNzgzMDQxfQ==';

const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "254";
const author = process.env.STICKER_AUTHOR || 'Keith';
const packname = process.env.PACKNAME || 'keith';
const dev = process.env.DEV || '254748387615';
const DevDreaded = dev.split(",");
const botname = process.env.BOTNAME || 'KEITH-MD';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';

const antitag = process.env.ANTITAG || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const autoread = process.env.AUTOREAD || 'true';
const autobio = process.env.AUTOBIO || 'false';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  autobio,
  mode,
  prefix,
  autolike,
  mycode,
  author,
  packname,
  dev,
  DevDreaded,
  gcpresence,
  antionce,
session,
antitag,
antidelete
};
