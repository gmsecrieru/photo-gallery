const axios = require('axios')

/**
 * Flickr Publid Feed endpoint
 */
const FLICKR_API_ENDPOINT = 'https://api.flickr.com/services/feeds/photos_public.gne'

/**
 * Default query params for Public Feed
 */
const DEFAULT_QUERY_PARAMS = {
  format: 'json',
  tagmode: 'any',
  nojsoncallback: 1
}

/**
 * List of tags to be fetched
 */
const DEFAULT_TAGS = [
  'travel', 'vacation', 'flowers', 'nature', 'beach', 'landscape', 'camera', 'evening', 'railroad', 'sunset',
  'sky', 'tree', 'dog', 'sun', 'clouds', 'snow', 'cat', 'park', 'winter', 'garden', 'moon', 'Highlands',
  'Scotland', 'Ireland', 'Netherlands', 'Spain', 'Denmark', 'Sweden', 'Iceland', 'borealis', 'aurora', 'autumn',
  'hills', 'europe', 'Africa', 'Australia', 'China', 'Japan', 'India', 'Norway', 'horse', 'cow'
]

/**
 * Return a "random" list of tags or a single tag if list is empty
 */
function getRandomTags() {
  const randomIndex = () => Math.floor(Math.random() * DEFAULT_TAGS.length)

  const firstRand = randomIndex()
  const secondRand = randomIndex()

  const randList = DEFAULT_TAGS.slice(
    Math.min(firstRand, secondRand),
    Math.max(firstRand, secondRand)
  )

  return randList.join(',') || DEFAULT_TAGS[randomIndex()]
}

/**
 * Converts a Flickr Photo Object into a normalized format
 */
function toPhoto(flickrPhotoObject) {
  const { title, link, media, date_taken, published, tags } = flickrPhotoObject

  const [user, id] = link.match(/https?\:\/\/www.flickr.com\/photos\/(.+)\/(.+[^\/])\/?$/).splice(1)

  /**
   * Replace photo size enum (i.e. char between _ and file extension) with "z" to make sure we are delivering 640px images
   * @see https://www.flickr.com/services/api/misc.urls.html
   */
  const url = media.m.replace(/(_)(.{1})(\..+)$/, '$1z$3')

  return {
    id,
    url,
    title,
    user,
    date_taken,
    published,
    post_url: link,
    tags: tags.split(' ')
  }
}

/**
 * Fetch images from a "random" tag using default query params
 */
function fetchPhotos() {
  const params = Object.assign({ tags: getRandomTags() }, DEFAULT_QUERY_PARAMS)

  return axios
    .get(`${FLICKR_API_ENDPOINT}`, { params })
    .then(({ data }) => data)
    .then(({ items }) => items.map(toPhoto))
}

module.exports = {
  fetchPhotos
}
