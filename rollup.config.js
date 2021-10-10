import path from "path";

export default {
  input: "index.js",
  plugins: [
    {
      name: "rollup-plugin-test",
      async resolveId(source, importer, options) {
        if (source === "~lib") {
          if (process.env["WORKAROUND_ROLLUP_4239"]) {
            return {
              id: path.resolve("./lib.js"),
              // moduleSideEffects: false
            };
          } else {
            return {
              id: path.resolve("./lib.js"),
              moduleSideEffects: false,
            };
          }
        }
      },
    },
  ],
};
