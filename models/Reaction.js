const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const reactionSchema = new Schema(
    {
      // set custom id to avoid confusion with parent Thought _id
      // reactionId: {
      //   type: Schema.Types.ObjectId,
      //   default: () => new Types.ObjectId()
      // },
      reactionBody: {
        type: String,
        required: true
      },
      writtenBy: {
        type: String,
        required: true,
        trim: true
      },
      userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
      }
    },
    {
      toJSON: {
        getters: true
      }
    }
);
  
const Reaction = model('Reaction', reactionSchema);

module.exports = Reaction;