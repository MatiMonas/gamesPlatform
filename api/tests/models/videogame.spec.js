const { Videogame, conn } = require("../../src/db.js");
const { expect, assert } = require("chai");
const app = require("../../src/app.js");
const session = require("supertest-session");

const agent = session(app);

describe("Videogame model", () => {
    before(() =>
        conn.authenticate().catch((err) => {
            console.error("Unable to connect to the database:", err);
        })
    );
    describe("Validators", () => {
        beforeEach(() => Videogame.sync({ force: true }));
        describe("name", () => {
            it("should throw an error if name is null", (done) => {
                Videogame.create({})
                    .then(() => done(new Error("It requires a valid name")))
                    .catch(() => done());
            });
            it("should work when its a valid name", () => {
                Videogame.create({ name: "Super Mario Bros" });
            });
        });
    });
});

describe("Platform model", () => {
    before(() =>
        conn.authenticate().catch((err) => {
            console.error("Unable to connect to the database:", err);
        })
    );
    describe("Validators", () => {
        beforeEach(() => Platform.sync({ force: true }));
        describe("Input data", () => {
            it("should throw an error if name is null", (done) => {
                Platform.create({})
                    .then(() => done(new Error("It requires a valid name")))
                    .catch(() => done());
            });

            it("should throw an error if id is null", () => {
                Platform.create({ name: "Super Mario Bros" })
                    .then(() => done(new Error("It requires a valid name")))
                    .catch(() => done());
            });

            it("should work when its a valid name an valid id", () => {
                return Platform.create({
                    name: "Super Mario Bros",
                    id: 1,
                }).then((platform) => {
                    expect(platform.name).to.equal("Super Mario Bros");
                });
            });
        });
    });
});
