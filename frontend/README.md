This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started


Note: use react-leaflet 1.9.1

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Example data:

```
var data = [
  {
    "Ecosystem Level": "Massachusetts Institute of Technology",
    "Entity Type": "Program, Conference",
    Facebook: "",
    "Founding Year": "",
    Image:
      "https://cbi.mit.edu/wp-content/uploads/2020/12/MITCBI-Logo_300x85.png",
    "Innovation Pipeline Stage                                                                        ":
      "Mentorship|Funding",
    Instagram: "",
    Label: "BioManufacturing Consortium @ MIT-CBI",
    LinkedIn: "",
    Location: "400 Main Street, Cambridge, MA 02142",
    "MIT Pillars                ": "Innovation",
    "Node Size": "2",
    "Stakeholder Type                                                                        ":
      "Academia",
    Tags: "Massachusetts Institute of Technology|Biotech - Pharma|Mentorship|Funding|Academia",
    Twitter: "",
    Type: "Program, Conference",
    "Verticals                        ": "Biotech - Pharma",
    Website:
      "https://cbi.mit.edu/programs/biomanufacturing-at-mit-cbi/collaboration/bioman/",
  },
  {
    "Ecosystem Level": "MIT School of Humanities, Arts, and Social Sciences",
    "Entity Type": "Program, Conference",
    Facebook: "",
    "Founding Year": "",
    Image: "",
    "Innovation Pipeline Stage                                                                        ":
      "",
    Instagram: "",
    Label:
      "Doctoral Program in History, Anthropology, Science, Technology, and Society\n(HASTS)",
    LinkedIn: "",
    Location: "77 Massachusetts Avenue, Cambridge, MA 02139",
    "MIT Pillars                ": "",
    "Node Size": "1",
    "Stakeholder Type                                                                        ":
      "Academia",
    Tags: "MIT School of Humanities, Arts, and Social Sciences|Academia",
    Twitter: "",
    Type: "Program, Conference",
    "Verticals                        ": "",
    Website: "\nhttps://web.mit.edu/hasts/",
  },
  {
    "Ecosystem Level": "Massachusetts Institute of Technology",
    "Entity Type": "Student Club",
    Facebook: "https://www.facebook.com/HackMIT",
    "Founding Year": "2013",
    Image:
      "https://pbs.twimg.com/profile_images/1407181831439589376/58gbJK_N_400x400.jpg",
    "Innovation Pipeline Stage                                                                        ":
      "Ideation|Funding",
    Instagram: "https://www.instagram.com/hackmit/",
    Label: "HackMIT",
    LinkedIn: "https://www.linkedin.com/company/hackmit-20/",
    Location: "77 Massachusetts Avenue, Cambridge, MA 02139",
    "MIT Pillars                ": "Innovation|Education",
    "Node Size": "3",
    "Stakeholder Type                                                                        ":
      "Academia",
    Tags: "Massachusetts Institute of Technology|AI - Digital Health|Medical Devices - Med Tech|Ideation|Funding|Academia",
    Twitter: "https://twitter.com/hackmit",
    Type: "Student Club",
    "Verticals                        ":
      "AI - Digital Health|Medical Devices - Med Tech",
    Website: "https://hackmit.org",
  },
  {
    "Ecosystem Level": "Massachusetts Institute of Technology",
    "Entity Type": "Program, Conference",
    Facebook: "https://www.facebook.com/groups/2418196159/",
    "Founding Year": "1970",
    Image:
      "https://pbs.twimg.com/profile_images/357301122/Red_HST_Logo_400x400.jpg",
    "Innovation Pipeline Stage                                                                        ":
      "Ideation|Customer Discovery|Prototype Development|Testing & Validation|Mentorship",
    Instagram: "",
    Label: "Harvard-MIT Health Sciences and Technology (HST)",
    LinkedIn: "",
    Location: "45 Carleton Street, Cambridge, MA 02142",
    "MIT Pillars                ": "Innovation|Education|Research",
    "Node Size": "3",
    "Stakeholder Type                                                                        ":
      "Academia",
    Tags: "Massachusetts Institute of Technology|AI - Digital Health|Medical Devices - Med Tech|Biotech - Pharma|Ideation|Customer Discovery|Prototype Development|Testing & Validation|Mentorship|Academia",
    Twitter: "https://twitter.com/mit_hst",
    Type: "Program, Conference",
    "Verticals                        ":
      "AI - Digital Health|Medical Devices - Med Tech|Biotech - Pharma",
    Website: "https://hst.mit.edu",
  },
  {
    "Ecosystem Level": "Massachusetts Institute of Technology",
    "Entity Type": "Person",
    Facebook: "https://www.facebook.com/EshipMIT",
    "Founding Year": "",
    Image:
      "https://pbs.twimg.com/profile_images/1422946036293640193/uXrBXkYt_400x400.jpg",
    "Innovation Pipeline Stage                                                                        ":
      "Mentorship",
    Instagram: "https://www.instagram.com/eshipmit/",
    Label: "Healthcare Sector Practice Leader",
    LinkedIn:
      "https://www.linkedin.com/company/martin-trust-center-for-mit-entrepreneurship/",
    Location: "One Amherst Street, Cambridge, MA 02142",
    "MIT Pillars                ": "",
    "Node Size": "2",
    "Stakeholder Type                                                                        ":
      "Academia",
    Tags: "Massachusetts Institute of Technology|Mentorship|Academia",
    Twitter: "https://twitter.com/EshipMIT",
    Type: "Person",
    "Verticals                        ": "",
    Website: "https://entrepreneurship.mit.edu/sector-practice-leaders/",
  },
  {
    "Ecosystem Level": "Massachusetts Institute of Technology",
    "Entity Type": "Center, Department, Institute, Office",
    Facebook: "https://www.facebook.com/JPAL.Global",
    "Founding Year": "",
    Image:
      "https://pbs.twimg.com/profile_images/688004656837046273/QU1YOGbi_400x400.png",
    "Innovation Pipeline Stage                                                                        ":
      "",
    Instagram: "",
    Label:
      "J-PAL Global and J-PAL North America (health and poverty alleviation)",
    LinkedIn: "https://www.linkedin.com/company/j-pal/",
    Location: "400 Main Street, Cambridge, MA 02142\nUSA",
    "MIT Pillars                ": "",
    "Node Size": "2",
    "Stakeholder Type                                                                        ":
      "Academia",
    Tags: "Massachusetts Institute of Technology|Academia",
    Twitter: "https://twitter.com/jpal",
    Type: "Center, Department, Institute, Office",
    "Verticals                        ": "",
    Website: "povertyactionlab.org/sector/health",
  },
  {
    "Ecosystem Level": "Massachusetts Institute of Technology",
    "Entity Type": "Center, Department, Institute, Office",
    Facebook: "https://www.linkedin.com/company/52133146",
    "Founding Year": "2018",
    Image:
      "https://pbs.twimg.com/profile_images/1196529749608353792/sD5z6fY__400x400.jpg",
    "Innovation Pipeline Stage                                                                        ":
      "Ideation|Customer Discovery|Prototype Development|Testing & Validation|Mentorship|Funding",
    Instagram: "",
    Label: "Jameel Clinic - AI & Healthcare at MIT",
    LinkedIn: "https://www.linkedin.com/company/aihealthmit/",
    Location: "77 Massachusetts Avenue, Cambridge, MA 02139",
    "MIT Pillars                ": "Innovation|Education|Research",
    "Node Size": "3",
    "Stakeholder Type                                                                        ":
      "Academia",
    Tags: "Massachusetts Institute of Technology|AI - Digital Health|Ideation|Customer Discovery|Prototype Development|Testing & Validation|Mentorship|Funding|Academia",
    Twitter: "https://twitter.com/AIHealthMIT",
    Type: "Center, Department, Institute, Office",
    "Verticals                        ": "AI - Digital Health",
    Website: "https://www.jclinic.mit.edu",
  },
];```