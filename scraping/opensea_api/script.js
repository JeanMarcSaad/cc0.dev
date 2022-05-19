let urls = [
  "https://opensea.io/collection/world-of-noun",
  "http://opensea.io/collection/chroma-cats",
  "https://opensea.io/collection/uponly-tomato",
  "https://opensea.io/collection/larva-cucks",
  "https://opensea.io/collection/greta-mash-up-club",
  "https://opensea.io/collection/crispy-nouns",
  "https://opensea.io/collection/mixed-nouns",
  "https://opensea.io/collection/wizardsdao",
  "https://opensea.io/collection/mfers",
  "https://opensea.io/collection/anonymice",
  "https://opensea.io/collection/blitmap",
  "https://opensea.io/collection/cryptoadz-by-gremplin",
  "https://opensea.io/collection/cryptodickbutts-s3",
  "https://opensea.io/collection/cryptoteddies",
  "https://opensea.io/collection/cryptovanz",
  "https://opensea.io/collection/degendary",
  "https://opensea.io/collection/derage",
  "https://opensea.io/collection/eggsprsns",
  "https://opensea.io/collection/funguysnft",
  "https://opensea.io/collection/howlerz",
  "https://opensea.io/collection/kaizengenesis",
  "https://opensea.io/collection/nounpunks-eth",
  "https://opensea.io/collection/nouns",
  "https://opensea.io/collection/pfpx",
  "https://opensea.io/collection/pixellucinations",
  "https://opensea.io/collection/rekt-cats",
  "https://opensea.io/collection/stellabelle",
  "https://opensea.io/collection/strokes-by-gmi-sh",
  "https://opensea.io/collection/superblox3d",
  "https://opensea.io/collection/supernovas-art",
  "https://opensea.io/collection/theboneys",
  "https://opensea.io/collection/tubby-cats",
  "https://opensea.io/collection/weinerfish",
  "https://opensea.io/collection/with-the-light",
  "https://opensea.io/collection/uma-no-copyright",
  "https://opensea.io/collection/crypto-crypto-toys",
  "https://opensea.io/collection/noupa-no-copyright",
  "https://opensea.io/collection/seoulpets",
  "https://opensea.io/collection/grifters-by-xcopy",
  "https://opensea.io/collection/planisphere",
  "https://opensea.io/collection/sndrafts",
  "https://opensea.io/collection/portraits-wv5huplfvk",
  "https://opensea.io/collection/redcat-graphic-novel",
  "https://opensea.io/collection/blouns",
  "https://opensea.io/collection/borednoungang",
  "https://opensea.io/collection/croakz-v2-1",
  "https://opensea.io/collection/cryptoadpunks",
  "https://opensea.io/collection/cryptoflyz",
  "https://opensea.io/collection/crypturtlez",
  "https://opensea.io/collection/gnars",
  "https://opensea.io/collection/infekted-mfers",
  "https://opensea.io/collection/larva-lads",
  "https://opensea.io/collection/lost-nouns",
  "https://opensea.io/collection/mistletoadz",
  "https://opensea.io/collection/noadz",
  "https://opensea.io/collection/nounals",
  "https://opensea.io/collection/noun-cats-invisibles",
  "https://opensea.io/collection/noundles",
  "https://opensea.io/collection/swampcatz",
  "https://opensea.io/collection/theboanez",
  "https://opensea.io/collection/the-goners",
  "https://opensea.io/collection/touns",
  "https://opensea.io/collection/viral-mfers",
  "https://opensea.io/collection/toadzdickbutts",
  "https://opensea.io/collection/toadzworld",
  "https://opensea.io/collection/brkfst-world",
  "https://opensea.io/collection/lil-nouns",
  "https://opensea.io/collection/peaceful-toadz"
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