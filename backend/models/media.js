const mongoose = require('mongoose');
const joi = require('joi');

const mediaSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'user',
    required: true,
  },
  mediaId: { type: Number },
  mediaType: { type: String, lowercase: true },
  mediaTitle: { type: String },
  mediaBackdrop: { type: String },
  mediaPoster: { type: String },
  mediaYear: { type: Number },
  savedDate: { type: Date, default: Date.now() },
});

function mediaValidator(medias) {
  schema = {
    mediaId: joi.number().required(),
    mediaType: joi.string().required(),
    mediaTitle: joi.string().required(),
    mediaBackdrop: joi.string(),
    mediaPoster: joi.string(),
    mediaYear: joi.number().required(),
  };
  return joi.validate(medias, schema);
}

const Media = mongoose.model('media', mediaSchema);
module.exports = { mediaValidator, mediaSchema, Media };
