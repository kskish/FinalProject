const allUsers = {
  users: [
    {
      _id: "001",
      businessName: "Gibeau Orange Julep",
    },
    {
      _id: "002",
      businessName: "Bol Orange",
    },
  ],
};

const allLocations = {
  locations: [
    {
      _id: "980",
      owner: "002",
      address: "24 Av. de la Baie de Valois, Pointe-Claire, QC H9R 4B3",
      chargeType: ["Tesla SC PLUG"],
      rate: 9.0,
      isAvailable: true,
    },
    {
      _id: "939",
      owner: "002",
      address: "3547 Av. Swail, Montréal, QC H3T 1P5",
      chargeType: ["GB/T Plug", "Type 1 Plug"],
      rate: 6.0,
      isAvailable: true,
    },
    {
      _id: "878",
      owner: "001",
      address: "7700 Decarie Blvd, Montreal, Quebec H4P 2H4",
      chargeType: ["Type 1 Plug"],
      rate: 2.0,
      isAvailable: true,
    },
  ],
};

module.exports = { allUsers, allLocations };
// const allUsers = {
//   users: [
//     {
//       _id: "001",
//       businessName: "Gibeau Orange Julep",
//       address: "7700 Decarie Blvd, Montreal, Quebec H4P 2H4",
//       chargeType: "Type 1 Plug",
//       rate: 2.0,
//       isAvailable: true,
//     },
//     {
//       _id: "002",
//       businessName: "Bol Orange",
//       address: "7983 Decarie Blvd, Saint-Laurent, Quebec H4L 3M6",
//       chargeType: "Type 2 Plug",
//       rate: 5.0,
//       isAvailable: true,
//     },
//     {
//       _id: "003",
//       businessName: "Dessert Yum flo",
//       address: "3547 Av. Swail, Montréal, QC H3T 1P5",
//       chargeType: "GB/T Plug",
//       rate: 6.0,
//       isAvailable: true,
//     },
//     {
//       _id: "004",
//       businessName: "Caravane Café",
//       address: "3506 Av. Lacombe, Montréal, QC H3T 1M1",
//       chargeType: "CCS Plugs",
//       rate: 7.0,
//       isAvailable: true,
//     },
//     {
//       _id: "005",
//       businessName: "Jukebox Burgers",
//       address: "11798 Salaberry Blvd, Dollard-Des Ormeaux, Quebec H9B 2R8",
//       chargeType: "CHADEMO PLUGS",
//       rate: 8.0,
//       isAvailable: true,
//     },
//     {
//       _id: "003",
//       businessName: "Delibee's",
//       address: "24 Av. de la Baie de Valois, Pointe-Claire, QC H9R 4B3",
//       chargeType: "Tesla SC PLUG",
//       rate: 9.0,
//       isAvailable: true,
//     },
//   ],
// };
