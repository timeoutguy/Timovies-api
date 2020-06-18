/* eslint-disable camelcase */
import * as Yup from 'yup';
import Movie from '../Models/Movie';

export default {
  async index(req, res) {
    const users = await Movie.findAll({
      attributes: ['id', 'title', 'description', 'publish_year', 'url'],
    });

    res.json(users);
  },
  async create(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required(),
      publish_year: Yup.string().required(),
      url: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation error!' });
    }

    const {
      title, description, publish_year, url,
    } = req.body;

    const movie = await Movie.create({
      title,
      description,
      publish_year,
      url,
    });

    return res.json(movie);
  },
};
