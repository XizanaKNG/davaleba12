fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
        document.getElementById('quote').textContent = `"${data.content}"`;
        document.getElementById('author').textContent = `- ${data.author}`;
    })