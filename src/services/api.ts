export type Offer = {
  number: string;
  endDate: string;
  user: string;
  status: "TODO" | "DONE" | "LOREM";
};

export const getOffers = () => {
  return fetch("/api/offers").then((res) => res.json()) as Promise<Offer[]>;
};
