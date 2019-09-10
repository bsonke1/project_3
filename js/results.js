var url      = window.location.href;
console.log(url);
if(url.includes('=')) {
  var query = url.split('=')[1];
}
else {
  var query = "Festivals";
}
query = query.charAt(0).toUpperCase() + query.slice(1);
console.log(query);

$(".search-query").text(query);
$(".form-control").val(query);