import * as Yup from 'yup';
import Tool from '../models/Tool';

class ToolController {
  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      link: Yup.string(),
      description: Yup.string(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Erro de validação dos campos.' });
    }

    const toolExists = await Tool.findOne({ where: { title: req.body.title } });
    if (toolExists) {
      return res.status(400).json({ error: 'Ferramenta já existe.' });
    }
    const { id, title, link, description, tags } = await Tool.create(req.body);
    return res.json({
      id,
      title,
      link,
      description,
      tags,
    });
  }
}

export default new ToolController();
