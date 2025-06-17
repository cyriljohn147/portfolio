import proxy from "../proxies/media";

const media = {
  discord: {
    id: "914240860101681163",
    tag: "cyriljohn147.dev",
  },
  stackOverflow: {
    id: "19758208",
    name: "Cyril John",
  },
  github: "cyriljohn147",
  figma: "elias_dev",
  replit: "EliasDev",
  codewars: "EliasDevis",
  devTo: "eliasdevis",
  cssBattle: "elias_dev",
  codepen: "elias_dev",
  dribble: "Elias_dev",
  email: "cyriljohn142005@gmail.com",
};

export default new Proxy(media, proxy);
