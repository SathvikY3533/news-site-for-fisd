check = document.getElementById("printSearch");
searchURL = new URLSearchParams(window.location.search);
search = searchURL.get('search');
if (search != null) {
    check.innerHTML = "You searched: "+search;
} else {
    check.innerHTML = "Search something...";
}