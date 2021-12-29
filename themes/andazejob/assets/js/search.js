let searchInput = document.querySelector("#search-input");
searchInput.addEventListener("input",onInput);
async function onInput(event) {
    let element = document.getElementById("searchTitle");
    
    if(searchInput.value == '')
    {
      element.innerHTML = '';
      element.style.background = '';
      element.classList.remove("active");
    }
    if(searchInput.value.length>4){
        element.classList.add("active");
        const response = await searchResult(searchInput.value);
        let responseData = response.hits;
        let searchResulthtml = '';
        element.innerHTML = "";
        var result = responseData.forEach(addSearchData);
        function addSearchData(data, index)
        {
          let string = data['section'].replaceAll('-',' ');
          let converString = string.toLowerCase();
          let dirName = string.charAt(0).toUpperCase() + converString.slice(1);
          
            searchResulthtml += ` <div class="search-menu-container">
            <ul class="search-menu-wrapper">
              <li class="hasChild" style="padding:5px"><b>${dirName}</b></li>
              <li class="hasChild">
                <ul class="search-menu-wrapper">
                  <li class="hasChild"><a href="${data['url']}">${data['title']}</a> </li>
                </ul>
              </li>
            </ul>
          </div>`;
          return searchResulthtml;
          }
          element.innerHTML = `${searchResulthtml}`;
    }

   
  
}

async function searchResult(query) {
  let query_url;
  let currentLang = document.getElementById('searchLang').value;
  if(currentLang == "ja")
  {
    query_url = `https://8ZLJKOR6PD.algolia.net/1/indexes/job_japanese_content?hitsPerPage=5&query=${query}`;
  }
  if(currentLang == "en")
  {
    query_url = `https://8ZLJKOR6PD.algolia.net/1/indexes/job_english_content?hitsPerPage=5&query=${query}`;
  }
  const headers = {
    accept: "*/*",
    "Content-Type": "application/json",
    "X-Algolia-API-Key": "b6ba8b65e391a1f14c6d7a975f27d8e0",
    "X-Algolia-Application-Id": "8ZLJKOR6PD",
  };
  const response = await fetch(query_url, {
    method: "GET",
    headers,
  });

  return response.json();
}
