/**
 * Take a fileAbsolutePath (e.g. src/data/words/post-name.md)
 * and return a URL used by site (e.g. words/post-name)
 * @param  {string} fileAbsolutePath [description]
 * @return {string}
 */
module.exports = fileAbsolutePath => {
  return fileAbsolutePath.replace('.md', '').replace('src/data/', '')
}
