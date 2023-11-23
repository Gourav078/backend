const Post = require('../model/Posts');
const bcrypt = require("bcrypt");
const jwt =require("jsonwebtoken")

const SECRET_KEY ="NOTESAPI";

// const getAllpost = async (req, res) => {
//     try {
//       const posts = await Post.find(); 
//       res.status(200).json(posts);
//     } catch (error) {
//       res.status(500).json({ error: 'Error retrieving posts' });
//     }
//   };

// const getAllpostTesting = async (req,res) => {
//   const {firstName,lastName,password,Date} = req.body;

//     try{
//         const newPost = new Post({firstName,lastName,password,Date});
//         await newPost.save();
//         res.status(200).json(newPost);
//     } catch(error) {
//         res.status(404).json({ error: 'Error creating a post' });
//     }
// };


// const getAllpost = async (req, res) => {
//   res.status(200).json({ message: "gaurav" })

//   }

//   const getAllpostTesting = async (req, res) => {
//     res.status(200).json({ message: "gaurav testing" })

//     }
const signup = async (req, res) => {
  //existing user check
  //hashed password
  //user create
  //token generate
  const { username, email, password } = req.body;
  try {
    // const existingUsername = await Post.findOne({ username: username });
    // if (existingUsername) {
    //   return res.status(400).json({ message: "Username already exists" });
    // }
    const existingUser = await Post.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ message: " user already exist" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await Post.create({
      username: username,
      email: email,
      password: hashedPassword,
    });
    // res.status(201).json({ user: result });

    const token = jwt.sign({ email: result.email, id: result._id }, SECRET_KEY);
    res.status(201).json({ user: result, token: token });

  }

  catch (error) {
    console.log(error)
    res.status(500).json({ message: "something wrong" });

  }

}
const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await Post.findOne({ email: email });
    if (!existingUser) {
      return res.status(404).json({ message: "user not found" });
    }
    const matchPassword = await bcrypt.compare(password, existingUser.password);

    if (!matchPassword) {
      return res.status(400).json({ message: "Invaild" });
    }
    // res.status(200).json({ message: "Sign-in successful" });

    const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, SECRET_KEY);
    res.status(201).json({ user: existingUser, token: token });

  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "something wrong" });

  }

}

module.exports = { signup, signin };