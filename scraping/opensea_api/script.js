let urls = [
  "https://opensea.io/collection/shinyclub",
  "https://opensea.io/collection/tinyninjaseth",
  "https://opensea.io/collection/nounish-eggs",
  "https://opensea.io/collection/swol-mfers"
]

let projects = [];

function createCORSRequest(method, url) {
    let xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
      // XHR for Chrome/Firefox/Opera/Safari.
      xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
      // XDomainRequest for IE.
      xhr = new XDomainRequest();
      xhr.open(method, url);
    } else {
      // CORS not supported.
      xhr = null;
    }
    return xhr;
  }

urls.forEach((url) => {
    let api_url = `https://api.opensea.io/api/v1/collection/${url.split('collection/')[1]}`
    let xobj = new XMLHttpRequest();
    xobj.open('GET', api_url, true);
    xobj.onreadystatechange = () => {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(JSON.parse(xobj.responseText), api_url, url);
        }
    };
    xobj.send(null);
})

const callback = (obj, api_url, url) => {
    console.log(api_url);
    projects.push({
        "name": obj["collection"]["name"],
        "description": obj["collection"]["description"],
        "external_link": obj["collection"]["external_url"],
        "twitter_username": obj["collection"]["twitter_username"],
        "opensea_url": url,
        "total_supply": obj["collection"]["stats"]["total_supply"],
        "num_owners": obj["collection"]["stats"]["num_owners"],
        "image_url": obj["collection"]["image_url"],
        "large_image_url": obj["collection"]["large_image_url"],
        "featured_image_url": obj["collection"]["featured_image_url"],
        "banner_image_url": obj["collection"]["banner_image_url"],
        "average_price": obj["collection"]["stats"]["average_price"]
    })
}