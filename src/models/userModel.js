import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email:{
        type:String,
        required:true
    },
    password: {
      type: String,
      required: true,
    },
    isloggedin:{
        type:Boolean,
        default:false
    },
    role:{
        type:String,
        enum:[
            "user","admin"
        ],
        default:"user"
    }
  },
  { timestamps: true },
);

export const UserModel =
  mongoose.models.User || mongoose.model("User", userSchema);
