// In-memory store — replace with a real DB connection
let items = [
  { id: 1, name: 'Item One',  description: 'First item'  },
  { id: 2, name: 'Item Two',  description: 'Second item' },
];
let nextId = 3;

exports.getAll = (req, res) => {
  res.json({ success: true, count: items.length, data: items });
};

exports.getOne = (req, res, next) => {
  const item = items.find(i => i.id === Number(req.params.id));
  if (!item) return next({ status: 404, message: 'Item not found' });
  res.json({ success: true, data: item });
};

exports.create = (req, res, next) => {
  const { name, description } = req.body;
  if (!name) return next({ status: 400, message: 'Name is required' });
  const item = { id: nextId++, name, description: description || '' };
  items.push(item);
  res.status(201).json({ success: true, data: item });
};

exports.update = (req, res, next) => {
  const idx = items.findIndex(i => i.id === Number(req.params.id));
  if (idx === -1) return next({ status: 404, message: 'Item not found' });
  items[idx] = { ...items[idx], ...req.body, id: items[idx].id };
  res.json({ success: true, data: items[idx] });
};

exports.remove = (req, res, next) => {
  const idx = items.findIndex(i => i.id === Number(req.params.id));
  if (idx === -1) return next({ status: 404, message: 'Item not found' });
  items.splice(idx, 1);
  res.json({ success: true, message: 'Item deleted' });
};
