document.addEventListener('DOMContentLoaded', function() {
    const adviceUrl = 'https://api.adviceslip.com/advice';
    const adviceDiv = document.getElementById('advice');
    const refreshBtn = document.getElementById('refreshBtn');

    function fetchAdvice() {
        fetch(adviceUrl)
            .then(response => response.json())
            .then(data => {
                adviceDiv.innerHTML = `<p>${data.slip.advice}</p>`;
            })
            .catch(error => {
                adviceDiv.innerHTML = `<p>Failed to fetch advice</p>`;
                console.error('Error fetching advice:', error);
            });
    }

    refreshBtn.addEventListener('click', fetchAdvice);
    fetchAdvice();
});
