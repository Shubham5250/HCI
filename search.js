document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");
    const searchResults = document.getElementById("search-results");

    const sampleData = [
        {
            title: "DUNE",
            description: "Description for Movie 1",
        },
        {
            title: "THOR",
            description: "Description for Movie 2",
        },
        {
            title:"AVENGERS" ,description : ' Description For movie3'
        },
        {   
            title:"SUPERMAN" ,description : 'Description For movie4'
        },
    ];

    function performSearch(query) {
        searchResults.innerHTML = "";


        const results = sampleData.filter((item) =>
            item.title.toLowerCase().includes(query.toLowerCase())
        );

        if (results.length === 0) {
            searchResults.innerHTML = "<p>No results found.</p>";
        } else {
            results.forEach((item) => {
                const resultItem = document.createElement("div");
                resultItem.classList.add("search-result-item");
                resultItem.innerHTML = `
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                `;
                searchResults.appendChild(resultItem);
            });
        }
    }

    searchInput.addEventListener("input", function () {
        const query = searchInput.value.trim();
        performSearch(query);
    });

    performSearch("");
});



function performSearch(query) {
    searchResults.innerHTML = "";

    const results = sampleData.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
    );

    if (results.length === 0) {
        searchResults.innerHTML = "<p>No results found.</p>";
    } else {
        results.forEach((item) => {
            const resultItem = document.createElement("div");
            resultItem.classList.add("search-result-item");
            resultItem.innerHTML = `
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            `;
            searchResults.appendChild(resultItem);
        });
    }
}
