import * as db from "./db";
import faker from "faker";

db.artists.destroy({
  where: {}
});
db.songs.destroy({
  where: {}
});

let artistsData = [
  {
    id: "a7b943a1-ee24-471c-a153-1a71737c31c5",
    name: faker.name.findName(),
    createdAt: Math.round(new Date().getTime() / 1000),
    updatedAt: Math.round(new Date().getTime() / 1000)
  },
  {
    id: "6f7c7286-99b4-4881-8924-76c24fe7e1b5",
    name: faker.name.findName(),
    createdAt: Math.round(new Date().getTime() / 1000),
    updatedAt: Math.round(new Date().getTime() / 1000)
  },
  {
    id: "ee06c048-960a-49a3-9fb6-83a01dc523bb",
    name: faker.name.findName(),
    createdAt: Math.round(new Date().getTime() / 1000),
    updatedAt: Math.round(new Date().getTime() / 1000)
  },
  {
    id: "2d51ef5f-c95a-4248-b988-37b80408b6ea",
    name: faker.name.findName(),
    createdAt: Math.round(new Date().getTime() / 1000),
    updatedAt: Math.round(new Date().getTime() / 1000)
  },
  {
    id: "9cf2f4e0-186b-425c-8818-bbece32e04ec",
    name: faker.name.findName(),
    createdAt: Math.round(new Date().getTime() / 1000),
    updatedAt: Math.round(new Date().getTime() / 1000)
  }
];

for (const artist in artistsData) {
  db.artists.create(artistsData[artist]);
}

for (let i = 0; i < 5; i++) {
  let data = {
    id: faker.random.uuid(),
    name: faker.name.findName(),
    album: faker.lorem.words(),
    artistID: artistsData[i].id,
    createdAt: Math.round(new Date().getTime() / 1000),
    updatedAt: Math.round(new Date().getTime() / 1000)
  };

  db.songs.create(data);
}
