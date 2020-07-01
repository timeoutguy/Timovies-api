import Sequelize from 'sequelize';

import dbConfig from '../config/database';

// Models Import
import Movie from '../app/Models/Movie';
import Category from '../app/Models/Category';

const connection = new Sequelize(dbConfig);

// Models Initt
Movie.init(connection);
Category.init(connection);

// Associates
Movie.associate(connection.models);
