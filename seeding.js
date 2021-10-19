module.exports = async (database) => {
  const existing = await database.Item.findOne({
    name: 'A',
  });
  if (existing) {
    return console.log('> seeding is not required');
  }

  await Promise.all([
    database.Item.create({
      name: 'A',
      price: 5,
    }),
    database.Item.create({
      name: 'B',
      price: 10,
    }),
  ]);
  return console.log('> seeding done');
};
