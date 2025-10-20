import { createContext } from "react";

const BadgerBudsDataContext = createContext({
  buds: [],
  savedBudsChange: () => { },
  saveAdoptedBudIds: () => { }
});

export default BadgerBudsDataContext;
