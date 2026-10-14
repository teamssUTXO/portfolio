export type Idea = {
  name: string;
  pitch: string;
  status: "next" | "someday";
};

// Leave the list empty to hide
export const ideas: Idea[] = [
  { name: "OP_RETURN Program", pitch: "A program to write messages into the Bitcoin blockchain.", status: "next" },
  { name: "Paris GraphRAG", pitch: "A GraphRAG built on Paris data that answers any question about the city.", status: "next" },
  { name: "Bitcoin miner", pitch: "A Bitcoin miner built to understand how mining really works, mainly on testnet.", status: "someday" },
  { name: "LAC", pitch: "An e-city on Ethereum where simply living there earns you money.", status: "someday" },
  { name: "Programming Language", pitch: "My own programming language.", status: "someday" },
  { name: "New way to use Blockchain Technology", pitch: "A new way to look at the blockchain. Still thinking it through.", status: "someday" },
];
