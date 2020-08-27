
let dataGiphy = [];

//  Asynchronous
const getGiphy = async() => {
  const response = await fetch('https://api.giphy.com/v1/gifs/search?q=cow&api_key=0aSZOlK5TFhZTdzy3nHEKzgWuOPBjhWy&limit=8')
  const data = await response.json();
  dataGiphy = data.data;
  await viewData();
  console.log(data)
}

const viewData = () => {
  let result = '';
  dataGiphy.map(element => {
    console.log(element.title);
    result += `<div class="col-md-3">
    <div class="card mb-3">
    <div class="card-header">   
    <p class="card-text">${element.title}</p>
        <div class="d-flex justify-content-between align-items-center">  
    </div>
    
      <div class="card-body">
        <img class="img-responsive" src="${element.images.original.url}" a width="100%" height="150">
        </div>
      </div>
    </div>
  </div>`
  })
  document.getElementById('dataGiphy').innerHTML = result;
}
getGiphy();