const btn = document.getElementById('btn')

let url = 'https://randomuser.me/api/'

// btn fetch data from API random user when btn clicked.
btn.addEventListener('click', () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      displayData(data)
    })
})

// displayData function
const displayData = (userData) => {
  // ------- displayData ---
  // Assign userData.results to items
  let items = userData.results
  // .map() the items
  let displayUserData = items.map((item) => {
    // console.log(item);

    return `  <div class="img-section">
  <img src=${item.picture.large} alt="photo" id="picture" style="width:100%;height:200px;">
  </div>
  <h1 id="name">${item.name.first} ${item.name.last}</h1>
  <p class="title">Phone: <span>${item.phone}</span></p>
  <p>City: <span>${item.location.city}</p>
  <div style="margin: 24px 0;">
    <!-- <a href="#"><i class="fa fa-dribbble"></i></a> 
    <a href="#"><i class="fa fa-twitter"></i></a>  
    <a href="#"><i class="fa fa-linkedin"></i></a>  
    <a href="#"><i class="fa fa-facebook"></i></a> -->
  </div>
  <p><button id="cardButton">Email: <span id="userEmail"></span>${item.email}</button></p>`
  })
  // console.log(displayUserData);

  // .join() to concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string
  displayUserData = displayUserData.join('')
  // console.log(displayUserData);

  // Show the data in the html
  document.getElementById('card').innerHTML = displayUserData
}
