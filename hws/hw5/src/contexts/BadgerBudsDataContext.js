import { createContext } from "react";

const BadgerBudsDataContext = createContext({
    buds: [],
    savedBudsChange: () => { }
});

export default BadgerBudsDataContext;
