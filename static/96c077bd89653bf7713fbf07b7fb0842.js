
fetch("https://api.themoviedb.org/3/movie/"+"810"+"?api_key=029f49c7893162e8c110314651e83fc7&language=en-US").then(function(response){return response.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{document.getElementById('company-810').innerHTML+="<b class='text-primary'>"+company.name+"</b> ";});});
