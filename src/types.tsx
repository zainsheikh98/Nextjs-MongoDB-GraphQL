type GetUserInput = {
  pageSize: number;
  pageNumber: number;
  filter?: string;
};

type User = {
  name: string;
  email: string;
  phone: string;
  url: string;
  companyName: string;
};

export type { GetUserInput, User };
