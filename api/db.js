const faker = require("faker");

const allStatus = ["TODO", "DONE", "LOREM"];

const offers = [];
for (let i = 0; i < 50; i++) {
  offers.push({
    number: faker.datatype.number(999_999_999).toString().padStart(9, "0"),
    endDate: faker.date.past(0),
    user: faker.name.firstName(),
    status: faker.random.arrayElement(allStatus),
  });
}

module.exports = () => ({
  offers,
});
