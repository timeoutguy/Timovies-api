/* eslint-disable camelcase */
import * as Yup from 'yup';
import Movie from '../Models/Movie';
import Category from '../Models/Category';

export default {
  async index(req, res) {
    const users = await Movie.findAll({
      attributes: ['id', 'title', 'description', 'publish_year', 'url'],
      include: [
        {
          model: Category,
          as: 'category',
        },
      ],
    });

    res.json(users);
  },
  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required(),
      publish_year: Yup.string().required(),
      category_id: Yup.number().required(),
      url: Yup.string().required().max(255),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation error!' });
    }

    const {
      title, description, publish_year, url, category_id,
    } = req.body;

    if (await Movie.findOne({ where: { title } })) {
      return res.status(400).json({ error: 'Movie already exists!' });
    }

    const movie = await Movie.create({
      title,
      description,
      publish_year,
      url,
      category_id,
    });

    return res.json(movie);
  },
  async update(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string(),
      description: Yup.string(),
      publish_year: Yup.string(),
      category_id: Yup.number(),
      url: Yup.string().max(255),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation error!' });
    }

    if (await Movie.findOne({ where: { title: req.body.title } })) {
      return res.status(400).json({ error: 'Movie already exists!' });
    }

    const { id } = req.params;

    const movie = await Movie.findByPk(id);

    if (!movie) {
      return res.status(400).json({ error: 'Movie does not exist!' });
    }

    movie.update(req.body);

    return res.json(movie);
  },
};
