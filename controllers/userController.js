const User= require('../models/userModel.js');


// This function creates a new user in the database
exports.createUser= async (req, res) => {
    try{
        const user= new User(req.body);
        const savedUser= await user.save();
        res.status(201).json(savedUser);
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

// This function retrieves all users from the database
exports.getAllUsers= async (req, res) => {
    try{
        const users= await User.find();
        res.status(200).json(users);
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

// This function retrieves a user by ID from the database
exports.getUserById= async (req, res) => {
    try{
        const user= await User.findById(req.params.id);
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.status(200).json(user);
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

// This function updates a user by ID in the database
exports.upodateUser= async (req, res) => {
    try{
       
     const updatedUser= await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true}
     );
     if (!updatedUser) return res.status(404).json({ error: 'User not found' });
        res.status(200).json(updatedUser);

    }catch(err){
        res.status(500).json({message: err.message});

    }
}

// This function deletes a user by ID from the database
exports.deleteUser = async (req, res) => {
    try {
      const deletedUser = await User.findByIdAndDelete(req.params.id);
      if (!deletedUser) return res.status(404).json({ error: 'User not found' });
      res.json({ message: 'User deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };