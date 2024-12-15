type UserType = {
  _id: string;
  email: string;
  name: string;
  surname: string;
  userName: string;
  birthDay: string;
  password: string;
  image?: string;
  gender: "male" | "female";
  lovedMovies: string[];
  tel?: string;
  mailing?: boolean;
};

export type { UserType };
