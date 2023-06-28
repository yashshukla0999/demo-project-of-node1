const path = require('path')
const Admin = require('../models/admin')
exports.showForm =(req, resp) => {
    resp.sendFile(path.join(__dirname, '../views/index.html'));
}

  exports.postUser = (req, resp) => {
    const userSellingPrice = req.body.selling;
    const userProductName = req.body.product;
    const userCategory=req.body.category
    Admin.create({
      selling: userSellingPrice,
      product: userProductName,
      category:userCategory
    })
      .then((result) => {
        console.log(result);
        resp.sendStatus(200);
      })
      .catch((err) => {
      
          console.log('Error:', err);
        
        resp.sendStatus(500);
      });
  }

  exports.showUser= (req, resp) => {
    Admin.findAll()
      .then((users) => {
        console.log(users);
        resp.status(200).json(users);
      })
      .catch((err) => {
        console.error(err);
        resp.status(500).json({ message: 'Error fetching users' });
      });
  }

  exports.deleteUser = (req, res) => {
    const userId = req.params.id;
  
    Admin.destroy({
      where: {
        id: userId
      }
    })
      .then((deletedUser) => {
        if (deletedUser) {
          res.send('User deleted successfully');
        } else {
          res.send('User not found');
        }
      })
      .catch((error) => {
        res.status(500).json({ message: 'Internal server error' });
      });
  };