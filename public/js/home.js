const shopName = document.getElementById(`shop-value`).value
const shopClick = document.getElementById('ShopForm');

// Attach an event listener to the select element
shopClick.addEventListener('change', function () {
  let isLoggedIn = shopClick.getAttribute('data-loggedin')
  if (isLoggedIn === "false") {
    location.replace(`/login`)
  } else if (isLoggedIn === "true") {
    location.replace(`/boardgames`)
  }
});