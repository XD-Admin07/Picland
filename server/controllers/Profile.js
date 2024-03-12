//const Profile=require("../models/Profile");
const Contributor = require("../models/Contributor")
const User = require("../models/User")
const { uploadImageToCloudinary } = require("../utils/imageUploader");

exports.updateProfile = async (req, res) => {
  try {
    const {
      firstName = "",
      lastName = "",
      dateOfBirth = "",
      contactNumber = "",
      gender = "",
    } = req.body

    const id = req.user.id;

    //Find the profile by id
    const userDetails = await User.findById(id);
    const profile = await Profile.findById(userDetails.additionalDetails);

    const user = await User.findByIdAndUpdate(id, {
      firstName,
      lastName,
    })
    await user.save();

    //Update the profile fields
    profile.dateOfBirth = dateOfBirth;
    profile.gender = gender;
    profile.contactNumber = contactNumber;

    await profile.save();

    //Find the updated user details
    const updatedUserDetails = await User.findById(id)
      .populate("additionalDetails")
      .exec()

    return res.json({
      success: true,
      message: "Profile Updated Successfully",
      updatedUserDetails,
    })

  } catch (err) {
    console.log(err)
    return res.status(500).json({
      success: false,
      error: err.message,
    })
  }
}


exports.updateDp = async (req, res) => {
  try {
    const displayPicture = req.files.displayPicture;
    //console.log("tempPath",displayPicture.tempFilePath);
    console.log(displayPicture);
    const userId = req.user.id;
    console.log("till now");

    const img = await uploadImageToCloudinary(
      displayPicture,
      process.env.FOLDER_NAME,
      1000,
      1000,
    );


    console.log("baad me");
    console.log(img);

    const updateProfile = await User.findByIdAndUpdate(
      { _id: userId },
      { image: img.secure_url },
      { new: true }
    )
    res.send({
      success: true,
      message: `Image Updated successfully`,
      data: updateProfile,
    })


  }
  catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

exports.getAllUserDetails = async (req, res) => {
  try {
    const id = req.user.id
    let userDetails;
    const contributor = await Contributor.findById(id).populate("additionalDetails").exec();
    const user = await User.findById(id).populate("additionalDetails").exec();

    userDetails = contributor || user;

    // if (id) {
    //   userDetails = await (Contributor.findById(id)?(Contributor.findById(id).populate("additionalDetails").exec()):(User.findById(id).populate("additionalDetails").exec()));
    // }
    //else userDetails=null;

    console.log(userDetails)
    res.status(200).json({
      success: true,
      message: "User Data fetched successfully",
      data: userDetails,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}