const fetch = require("node-fetch");
const cheerio = require("cheerio");

// let _uri = "https://handcraft-portfolio-eka.vercel.app/";
let title, description, url, image, site_name, icon, keywords;

const scraped = (uri) => {
  fetch(uri)
    .then((res) => res.text())
    .then((body) => {
      let $ = cheerio.load(body);

      title =
        $('meta[property="og:title"]').attr("content") ||
        $("title").text() ||
        $('meta[name="title"]').attr("content");
      description =
        $('meta[property="og:description"]').attr("content") ||
        $('meta[name="description"]').attr("content");
      url = $('meta[property="og:url"]').attr("content");
      site_name = $('meta[property="og:site_name"]').attr("content");
      image =
        $('meta[property="og:image"]').attr("content") ||
        $('meta[property="og:image:url"]').attr("content");
      icon =
        $('link[rel="icon"]').attr("href") ||
        $('link[rel="shortcut icon"]').attr("href");
      keywords =
        $('meta[property="og:keywords"]').attr("content") ||
        $('meta[name="keywords"]').attr("content");
    });

  return {
    title: title,
    description: description,
    image: image,
    url: url,
    site_name: site_name,
    image: image,
    icon: icon,
    keywords,
  };
};

module.exports = {
  scraped,
};
