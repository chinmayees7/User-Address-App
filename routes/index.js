const { User, Address } = require('../models');

module.exports = (app) => {
  app.post('/register', async (req, res) => {
    const { name, address } = req.body;

    try {
      // Create user
      const user = await User.create({ name });

      // Create address associated with the user
      await Address.create({ address, userId: user.id });

      res.status(201).send('User and address saved successfully');
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred');
    }
  });
};
