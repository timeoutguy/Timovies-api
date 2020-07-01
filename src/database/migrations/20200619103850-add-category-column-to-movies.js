module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('movies', 'category_id', {
    type: Sequelize.INTEGER,
    references: { model: 'categorys', key: 'id' },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
    allowNull: false,
  }),

  down: (queryInterface) => {
    queryInterface.removeColumn('movies', 'category_id');
  },
};
