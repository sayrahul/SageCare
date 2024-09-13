export const GenderOptions = ["male", "female", "other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Aadhar Card",
  "PAN Card",
  "Driving Licence",
  "Passport",
  "Voter ID Card",
  "National Identity Card",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-cameron.png",
    name: "Dr. Shivleela Gore",
  },
  {
    image: "/assets/images/dr-green.png",
    name: "Dr. Ganesh Gore",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "Dr. Rahul Jadhav",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Dr. Pramila Thakkar",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Dr. Pandurag Wattamwar",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
