/// <reference types="cypress" />

describe("API testing", () => {
  it("GET API Testing", () => {
    // 新增一個請求 request，因為要做很多事，所以用 then 包住
    cy.request("GET", "https://reqres.in/api/users?page=2").then((response) => {
      // 斷言 status code 為 200
      expect(response.status).to.equal(200);
      // 斷言 回傳的資料(是一個 body)裡面的 data(是一個陣列) 的第二筆資料(陣列的索引從0開始)的 "first_name" 是不是 "Lindsay"
      expect(response.body.data[1].first_name).to.equal("Lindsay");
    });
  });

  it("POST API Testing", () => {
    // 因為 POST 需要事先給參數代入，所以先宣告變數 user，它是一個物件，裡面裝有 name 及 job
    let user = {
      name: "jesse",
      job: "qa",
    };

    cy.request("POST", "https://reqres.in/api/users", user).then((response) => {
      expect(response.status).to.equal(201);
      expect(response.body.name).to.equal(user.name);
      expect(response.body.job).to.equal(user.job);
    });
  });

  it("PUT API Testing", () => {
    // 因為 PUT 也是需要先給參數代入，所以要先宣告變數 user，它是一個物件，裡面裝有 name 及 job
    let user = {
      name: "david",
      job: "tester",
    };

    cy.request("PUT", "https://reqres.in/api/users/7", user).then(
      (response) => {
        expect(response.status).to.equal(200);
        expect(response.body.name).to.equal(user.name);
        expect(response.body.job).to.equal(user.job);
      }
    );
  });

  it("PATCH API Testing", () => {
    // 因為 PATCH 也是需要先給參數代入，所以要先宣告變數 user，它是一個物件，裡面裝有 name 及 job
    let user = {
      name: "nick",
      job: "developer",
    };

    cy.request("PATCH", "https://reqres.in/api/users/7", user).then(
      (response) => {
        expect(response.status).to.equal(200);
        expect(response.body.name).to.equal(user.name);
        expect(response.body.job).to.equal(user.job);
      }
    );
  });

  it("DELETE API Testing", () => {
    cy.request("DELETE", "https://reqres.in/api/users/7").then((response) => {
      expect(response.status).to.equal(204);
    });
  });
});
