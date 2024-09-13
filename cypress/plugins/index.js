/// <reference types="cypress" />

const readXlsx = require("./read-xlsx");

module.exports = (on, config) => {
  on("task", {
    readXlsx: readXlsx.read,
  });
};
