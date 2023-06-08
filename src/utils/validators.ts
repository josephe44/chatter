export const registerValidator = {
  email: (val: string) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
  password: (val: string) =>
    !/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(val)
      ? `Password must contain at least 8 characters, 
        include at least one uppercase letter, 
        one lowercase letter, a number, and one special character`
      : null,
  firstName: (val: string) =>
    val?.length < 3 ? "First name cannot be less than 3 characters" : null,
  lastName: (val: string) =>
    val?.length < 3 ? "Last name cannot be less than 3 characters" : null,
  businessAlias: (val: string) =>
    val?.length < 3 ? "Business alias cannot be less than 3 characters" : null,
  terms: (val: boolean) =>
    !val ? "Please accept our terms and conditions" : null,
};

export const loginValidator = {
  email: (val: string) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
};

export const kycValidator = {
  gender: (val: string) => (!val ? "Gender is required" : null),
  dob: (val: Date) => (!val ? "Date of birth is required" : null),
  nationality: (val: string) => (!val ? "Nationality is required" : null),
  occupation: (val: string) => (!val ? "Occupation is required" : null),
  state: (val: string) => (!val ? "State is required" : null),
  city: (val: string) => (!val ? "City is required" : null),
};

export const personalBusinessValidator = {
  idType: (val: string) => (!val ? "Id Type is required" : null),
  nin: (val: string) => {
    if (!val) {
      return "NIN is required";
    } else if (val.toString().length !== 11) {
      return "NIN must be exactly 11 digits";
    } else if (Number(val) < 0) {
      return "NIN cannot be a negative number";
    }
    return null;
  },
  bvn: (val: string) => {
    if (!val) {
      return "BVN is required";
    } else if (val.toString().length !== 11) {
      return "BVN must be exactly 11 digits";
    } else if (Number(val) < 0) {
      return "BVN cannot be a negative number";
    }
    return null;
  },
  idFile: (val: File | null) => (!val ? "ID is required" : null),
  utilityBill: (val: File | null) => (!val ? "Utility Bill is required" : null),
  selfie: (val: File | null) => (!val ? "Selfie is required" : null),
};

interface Director {
  name: string;
  email: string;
  phoneNum: string;
  idType: string;
  idFile: File | null;
}

export const corporateBusinessValidator = {
  rcNum: (val: string) => (!val ? "RC Number is required" : null),
  directors: (val: Director[]) => {
    if (!val || val.length === 0) {
      return "At least one director is required";
    }

    for (let i = 0; i < val.length; i++) {
      const director = val[i];

      if (!director.name) {
        return `Name is required for Director ${i + 1}`;
      }

      if (!director.email) {
        return `Email is required for Director ${i + 1}`;
      }

      if (!director.phoneNum) {
        return `Phone number is required for Director ${i + 1}`;
      }

      if (!director.idType) {
        return `ID Type is required for Director ${i + 1}`;
      }

      if (!director.idFile) {
        return `ID File is required for Director ${i + 1}`;
      }
    }

    return null;
  },
};
