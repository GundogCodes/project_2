const {model,Schema} = require('mongoose')
const bcrypt = require('bcrypt')

const postSchema = new Schema({
    
    text:{type:String},

    sender:{type:Schema.Types.ObjectId, ref:'User', required:true}

}, {
    timestamps:true
})

/*
postSchema.pre('save', async function(next){
    this.text = await bcrypt.hash(this.text,8)
    null;
    next()
})

*/

const Post = model('Post', postSchema)

module.exports = Post