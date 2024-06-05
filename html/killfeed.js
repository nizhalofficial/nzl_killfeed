window.addEventListener('message', function(event) {
    var eventData = event.data;

    if (eventData.type === 'displayKill') {
        displayKillfeed(eventData.killerName, eventData.victimName, eventData.weapon);
    }
});

function displayKillfeed(killerName, victimName, weapon) {
    var killfeedContainer = document.getElementById('killfeed-container');
    var killEntry = document.createElement('div');
    killEntry.classList.add('kill-entry');
    killEntry.innerHTML = `<span class="killer">${killerName}</span> eliminated <span class="victim">${victimName}</span> with ${weapon}`;
    killfeedContainer.appendChild(killEntry);

    if (killfeedContainer.children.length > 5) {
        killfeedContainer.removeChild(killfeedContainer.children[0]);
    }
}
