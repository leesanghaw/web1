window.onload = function() {
    const visitKey = 'visitHistory';

    function saveVisit() {
        let visits = JSON.parse(localStorage.getItem(visitKey)) || [];
        visits.push(new Date().toLocaleString());
        localStorage.setItem(visitKey, JSON.stringify(visits));
    }

    function showVisits() {
        let visits = JSON.parse(localStorage.getItem(visitKey)) || [];
        let visitList = document.getElementById('visit-list');
        visitList.innerHTML = visits.map(visit => `<li>${visit}</li>`).join('');
    }

    function clearVisits() {
        localStorage.removeItem(visitKey);
        showVisits();
    }

    document.getElementById('start-visit').addEventListener('click', saveVisit);
    document.getElementById('end-visit').addEventListener('click', saveVisit);
    document.getElementById('clear-visits').addEventListener('click', clearVisits);

    showVisits();
}
