import Sequelize, { Model } from 'sequelize';

class Movies extends Model {
  static init(sequelize) {
    super.init({
      title: Sequelize.STRING,
      description: Sequelize.STRING,
      publish_year: Sequelize.STRING,
      url: Sequelize.STRING,
    }, {
      sequelize, modelName: 'movies',
    });
  }
}

export default Movies;
