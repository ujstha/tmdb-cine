const experss = require('express');
const router = experss.Router();
const { authentication } = require('../middleware/authentication');
const { mediaValidator, Media } = require('../models/media');
const { User } = require('../models/user');

router.get('/', authentication, async (req, res) => {
  const user = await User.findById(req.user.id).populate('media');
  res.send({
    media: user.media,
    user: {
      firstname: user.firstname,
      lastname: user.lastname,
      username: user.username,
    },
  });
});

// router.get('/', async (req, res) => {
//   const media = await Media.find();

//   res.status(200).send(media);
// });

router.get('/:id', authentication, async (req, res) => {
  const media = await Media.findOne({
    user: req.user.id,
    _id: req.params.id,
  });

  res.status(200).send(media);
});

router.post('/', authentication, async (req, res) => {
  const { error } = mediaValidator(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let media = await Media.findOne({
    user: req.user.id,
    mediaId: req.body.mediaId,
  });
  if (media) {
    return res
      .status(409)
      .json(
        `"${req.body.mediaTitle}" exists in your favorite ${req.body.mediaType} list.....`
      );
  }

  const payload = {
    ...req.body,
    user: req.user.id,
  };
  media = new Media(payload);
  const user = await User.findById(req.user.id);
  const userMedia = user.media;
  userMedia.push(media.id);
  await media.save();
  await user.save();
  res
    .status(200)
    .json(
      `"${req.body.mediaTitle}" added to your favorite ${req.body.mediaType} list.....`
    );
});

//deleting data
router.delete('/delete/:id', async (req, res) => {
  const media = await Media.findOne({ _id: req.params.id });
  if (!media) return res.status(404).send('Media not found.....');

  await media
    .remove()
    .then(() =>
      res.json(
        `${media.mediaTitle} is removed from your favorite ${media.mediaType} list.....`
      )
    );
});

module.exports = router;
