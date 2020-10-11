module.exports = {
   setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.js"],
   testPathIgnorePatterns: ["<rootDir>/node_modules/"],
   moduleNameMapper: {
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
         "<rootDir>/src/tests/__mocks__/fileMock.js",
      "\\.(css|less|scss|sass)$": "<rootDir>/src/tests/__mocks__/styleMock.js",
   },
};
