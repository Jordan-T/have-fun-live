const faker = require("faker");

const allStatus = ["TODO", "DONE", "LOREM"];

const offers = [];
for (let i = 0; i < 50; i++) {
  const id = faker.datatype.number(999_999_999).toString().padStart(9, "0");
  offers.push({
    id,
    number: id,
    endDate: faker.date
      .between(
        new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
        new Date(new Date().setFullYear(new Date().getFullYear() + 1))
      )
      .toISOString()
      .substr(0, 10),
    user: faker.name.firstName(),
    status: faker.random.arrayElement(allStatus),
  });
}

module.exports = () => ({
  offers,
});
