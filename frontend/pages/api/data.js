import { GoogleSpreadsheet } from "google-spreadsheet";

// Replace this with your credentials
import creds from "/Users/zoe/Dropbox (MIT)/classes-spring-23/UROP/healthcare_webapp/keys/healthcare-webapp-387816-d6c1c0bab59a.json";

// If you're storing your service account credentials in environment variables
// const creds = {
//   client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
//   private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
// };

export default async function handler(req, res) {
  try {
    const doc = new GoogleSpreadsheet(
      "1_sK03p983Lcwn-B5_M1xyCzBeKEFUFtzV126REN58NM"
    );
    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo();

    const ecosystem_sheet = doc.sheetsByIndex[0];
    const startup_sheet = doc.sheetsByIndex[1];

    console.log("ecosystem_sheet");
    console.log(ecosystem_sheet);

    const ecosystem_rows = await ecosystem_sheet.getRows();
    const startup_rows = await startup_sheet.getRows();

    console.log("ecosystem_rows");
    console.log(ecosystem_rows);

    const ecosystem_data = ecosystem_rows.map((row) => row._rawData);
    const startup_data = startup_rows.map((row) => row._rawData);

    console.log("ecosystem_data");
    console.log(ecosystem_data);

    const data = {
      ecosystems: ecosystem_data,
      startups: startup_data,
    };

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
}
