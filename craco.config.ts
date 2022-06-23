import path from "path";

const resolvePath = (p: string) => path.resolve(__dirname, p);

module.exports = {
  webpack: {
    alias: {
      "@components": resolvePath("./src/components"),
    },
  },
};
