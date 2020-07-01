/* eslint-disable camelcase */
import * as Yup from 'yup';
import Category from '../Models/Category';

export default {
  async index(req, res) {
    const categorys = await Category.findAll();

    res.json(categorys);
  },
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation error!' });
    }

    const { name } = req.body;

    const category = await Category.create({ name });

    return res.json(category);
  },
};
