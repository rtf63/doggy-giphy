const apiAddr = 'http://api.giphy.com/v1/gifs/random?';
const giphyAPIkey = 'api_key=yMQCDS0vaIPTEenxO70BsynGp0CKUSZ9';
const tag = '&tag=puppy';
const rating = '&rating=R';
const xhr = '';

window.onload = function() {
  
  document.getElementById("submit-feeling").onclick = () => {
    getGIF()
  };
  
  let getGIF = (search) => {
    if (search === undefined) {
      const emptySearchURL = apiAddr + giphyAPIkey + tag + rating;
      // https://api.giphy.com/v1/gifs/random?api_key=yMQCDS0vaIPTEenxO70BsynGp0CKUSZ9&tag=puppy&rating=R
      var apiJSON = $.getJSON(emptySearchURL);
    }
    else {
      const searchURL = apiAddr + giphyAPIkey + tag + '+' + search + rating;
      // https://api.giphy.com/v1/gifs/random?api_key=yMQCDS0vaIPTEenxO70BsynGp0CKUSZ9&tag=puppy+happy&rating=R

      var apiJSON = $.getJSON(searchURL);
    }
    
    apiJSON.done((data) => {
      document.getElementById("gif-box").innerHTML = '<img src="' + data.data.image_url + '">';
    });
    
  };
   document.getElementById("search-gif").onclick = () => {activateSearch()};
  
  let activateSearch = () => {
    getGIF(document.getElementById("feeling").value);
  }

//automatically runs gipher onload and displays a random gif
getGIF();

}
      
               
