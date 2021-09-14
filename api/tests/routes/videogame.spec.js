/* eslint-disable import/no-extraneous-dependencies */
const session = require("supertest-session");
var supertest = require("supertest-as-promised")(require("../../src/app"));
var expect = require("chai").expect;
const app = require("../../src/app.js");
const { Videogame, conn } = require("../../src/db.js");

const agent = session(app);
const videogame = {
    name: "Super Mario Bros",
    description: "description",
    platforms: ["ps1"],
};

describe("Videogame routes", () => {
    before(() =>
        conn.authenticate().catch((err) => {
            console.error("Unable to connect to the database:", err);
        })
    );
    beforeEach(() => Videogame.sync().then(() => Videogame.create(videogame)));
    describe("GET videogames", () => {
        it("should get 200", async () =>
            await agent.get("/api/videogames").expect(200));
    });
});

// describe("api/videogame/:id", () => {
//     it("GET should return the details of certain game", () => {
//         Videogame.create(videogame);
//         return supertest
//             .get("api/videogame/videogame")
//             .expect(200)
//             .expect("Content-Type", /json/)
//             .expect((res) => {
//                 expect(res.body).to.have.length(3);
//             });
//     });
// });
