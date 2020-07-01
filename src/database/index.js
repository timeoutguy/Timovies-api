import Sequelize from 'sequelize';
import dbConfig from '../config/database';

import Movie from '../app/Models/Movie';
import Category from '../app/Models/Category';

const connection = new Sequelize(dbConfig);

Movie.init(connection);
Category.init(connection);

Movie.associate(connection.models);
