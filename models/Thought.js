const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const Reaction = require('./Reaction');

const ThoughtSchema = new Schema(
  {
    writtenBy: {
      type: String,
      required: true
    },
    thoughtBody: {
      type: String,
      required: true
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
    },
    // use reactionSchema to validate data for a reaction
    reactions: [{
      type: Schema.Types.ObjectId,
      ref: 'Reaction',
    }] 
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);



const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;
