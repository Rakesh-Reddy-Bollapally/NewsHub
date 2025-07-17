//let api_key = "e7d9b9b9cfae4a45b9836e2f60f22a56"
//let url = "https://newsapi.org/v2/everything"

let api_key="f1727d4336d1555a8dd2ad8b16d221d6"
let url="https://gnews.io/api/v4/search"

let container = document.getElementById("container")
// const loading = document.getElementById('loading');

let searchBox = document.getElementById('searchBox');

let fetchData = async () => {
    // loading.style.display = 'block';
    searchBox.addEventListener('keypress', async function (event) {
        if (event.key === 'Enter') {
            let s_value = searchBox.value;
            container.innerHTML = '';
            
            try {
                let data = await fetch(`${url}?q=${s_value}&lang=en&country=in&max=100&apikey=${api_key}`)
                let jsondata = await data.json()
                console.log(jsondata)
                if (jsondata.articles.length === 0) {
                    let msg = document.createElement("h2")
                    msg.innerText = "Please search an appropriate result.";
                    document.body.append(msg)
                    msg.style.fontFamily = "Winky Rough";
                    msg.style.fontWeight = "600"
                    msg.style.color = "red"
                    msg.style.fontSize = "40px";
                    msg.style.textAlign = "center"
                    container.appendChild(msg)
                }
                jsondata.articles.forEach(article => {

                    let div = document.createElement("div")
                    div.style.width = "400px"
                    div.style.maxWidth = "auto"
                    div.style.height = "auto"
                    div.style.border = "1px solid black"
                    div.style.borderRadius = "5px"
                    div.style.padding = "20px"
                    div.style.paddingLeft="0px"
                    div.style.paddingTop="0px"
                    div.className = "card"

                    let innerdiv=document.createElement("div")
                    
                    innerdiv.style.padding="15px"

                    let heading = document.createElement("h1");
                    heading.innerText = article.title;
                    heading.style.fontSize = "20px"
                    heading.style.fontWeight = "600"
                    heading.style.fontFamily = "Winky Rough";


                    let image = document.createElement("img")
                    // console.log(article.urlToImage)
                    image.setAttribute("src", article.urlToImage)
                    image.style.width = "400px"
                    image.style.height = "250px"
                    image.style.marginLeft = "0px"
                    image.style.marginTop = "0px"
                    image.style.marginBottom = "20px"
                    image.style.borderRadius = "5px"

                    let newslink = document.createElement("a")
                    newslink.setAttribute("href", article.url)
                    let link = newslink.getAttribute("href")
                    newslink.innerText = link
                    newslink.style.textDecoration = "None"
                    newslink.style.color = "rgb(27, 27, 116)"
                    newslink.style.fontFamily = "Winky Rough";
                    newslink.style.fontWeight = "500"

                    container.appendChild(div)
                    div.appendChild(image)
                    div.appendChild(innerdiv)
                    innerdiv.appendChild(heading)
                    innerdiv.appendChild(newslink)


                });
                // console.log(jsondata)



            } catch (error) {
                console.log(error)
            } finally {
                // loading.style.display = 'none';
            }


        }
    });
};

fetchData()
