import Dev from '../models/Dev';

class DevController {
  static async store(req, res) {
    const dev = await Dev.create(req.body);

    return res.json(dev);
  }
}

export default DevController;
