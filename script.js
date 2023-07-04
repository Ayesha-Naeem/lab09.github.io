function displayNews(data) {
    const newsContainer = document.getElementById("root");

    data.articles.forEach((news) => {
        const card = document.createElement("div");
        card.className = "news-card-item";

        const image = document.createElement("img");
        image.className = "news-card-image";
        image.src = news.urlToImage;
        image.alt = news.title;

        const title = document.createElement("h3");
        title.className = "news-card-title";
        title.textContent = news.title;

        const description = document.createElement("p");
        description.className = "news-card-description";
        description.textContent = news.description;

        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(description);

        newsContainer.appendChild(card);
    });
}

// Function to fetch news from the News API
function fetchNews() {
    const url = `https://newsapi.org/v2/everything?q=tesla&from=2023-06-04&sortBy=publishedAt&apiKey=1fdb1cd4c69c4458858948f202dd5ccf`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            displayNews(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

// Call the fetchNews function to load news when the page loads
fetchNews();
