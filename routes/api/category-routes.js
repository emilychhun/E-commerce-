let router = require('express').Router();
let { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// find all categories
router.get('/', (req, res) => {

// be sure to include its associated Products

  Category.findAll(
    {
      include: {
        model: Product,
        attributes: ['product_name']
      }
    }).then(categoryData => res.json(categoryData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /api/categories/1
// find one category by its `id` value
 router.get('/:id', (req, res) => {
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Product,
      attributes: ['category_id']
    }
  })
    .then(categoryData => res.json(categoryData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});



// POST /api/categories
router.post('/', (req, res) => {
  // create a new category
  // expects {category_name: 'Jeans'}
  Category.create({
    category_name: req.body.category_name
  })
    .then(categoryData => res.json(categoryData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// PUT /api/categories/1

router.put('/:id', (req, res) => {
  // update a category by its `id` value
   // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead
   // expects {category: 'Dresses'}
  Category.update(
    {
      category_name: req.body.category_name
    },
    {
      where: {
        id: req.params.id
      }
    })
    .then(categoryData => {
      if (!categoryData) {
        res.status(404).json({ message: 'No Category found with that ID.' });
        return;
      }
      res.json(categoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE /api/categories/1

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(categoryData => {
      if (!categoryData) {
        res.status(404).json({ message: 'No Category found with that ID.' });
        return;
      }
      res.json(categoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});



module.exports = router;
