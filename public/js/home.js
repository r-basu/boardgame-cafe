const shopName = document.getElementById(`shop-value`).value
const shopClick = document.getElementById('ShopForm');


// Attach an event listener to the select element
shopClick.addEventListener('change', function() {
  if (isLoggedIn) {
    location.replace(`/boardgames`)
  } else {
    location.replace(`/login`)
  }
});