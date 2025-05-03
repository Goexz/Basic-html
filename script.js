const displayName = document.getElementById('username');
const level = document.getElementById('level-player'); 
const game = document.getElementById('game-name');
const mode = document.getElementById('farm-mode');
const hour1 = document.getElementById('Hour1');
const hour2 = document.getElementById('Hour2');
const progresslabel = document.getElementById('progress-label');
const progressbar = document.getElementById('progress-bar');
const playhour = document.getElementById('play-hour');
const unit = document.getElementById('unit-count');
const status = document.getElementById('status');
const info = document.getElementById('info-more');
const info2 = document.getElementById('info-more2');
const farmcount = document.getElementById('farm-label');
const chaper = document.getElementById('map-chapter');
const turn = document.getElementById('game-turn');
const ingame = document.getElementById('status-ingame');

const robloxData = {
    displayName: "Luna",
    level: 106,
    game: "Anime Ranger X",
    farmMode: "Challenge",
    hour1: 4,
    hour2: 63,
    matchResults: [
        {
            result: "Victory",
            rewards: [
                { type: "Gold", amount: 500 },
                { type: "Gems", amount: 6 }
            ],
            map: "Z City - Chapter 9",
            turn: 28,
            time: "00:01:18",
            dateTime: "3/5/68"
        }
    ]
};

displayName.textContent = '@' + robloxData.displayName;
level.textContent = robloxData.level;
game.textContent = ' ' + robloxData.game;
mode.innerHTML = '<strong>'+robloxData.farmMode+'</strong>';
hour1.textContent = robloxData.hour1 + 'h';
hour2.textContent = robloxData.hour2 + 'h';
progresslabel.textContent = Math.floor((robloxData.hour1 / robloxData.hour2) * 100) + '%';
progressbar.style.width = Math.floor((robloxData.hour1 / robloxData.hour2) * 100) + '%';
playhour.textContent = robloxData.hour1;
unit.textContent = 4;
status.textContent = 'Offline';
info.innerHTML = '<strong>รายละเอียด:</strong> ' + 'หมดเวลา';
info2.innerHTML = '<strong>รายการฟาร์ม:</strong> ' + 'หมดเวลา';

document.addEventListener('DOMContentLoaded', function() {
    async function tabeldata() {
        try {
            populateResultsTable(robloxData.matchResults);
        } catch (error) {
            console.error('Error loading table data:', error);
        }
    }

    function populateResultsTable(results) {
        const tableBody = document.getElementById('results-table');
        tableBody.innerHTML = '';

        results.forEach(result => {
            const row = document.createElement('tr');

            const resultCell = document.createElement('td');
            const victoryBadge = document.createElement('div');
            victoryBadge.className = 'victory-badge';
            victoryBadge.textContent = result.result;
            resultCell.appendChild(victoryBadge);
            row.appendChild(resultCell);

            const rewardsCell = document.createElement('td');
            result.rewards.forEach((reward, index) => {
                const rewardBadge = document.createElement('span');
                let badgeClass = '';

                if (reward.type.includes('Gold')) {
                    badgeClass = 'gold-badge';
                } else if (reward.type.includes('Gems')) {
                    badgeClass = 'gems-badge';
                } else if (reward.type.includes('Essence')) {
                    badgeClass = 'essence-badge';
                } else if (reward.type.includes('Coat')) {
                    badgeClass = 'coat-badge';
                } else if (reward.type.includes('Medallion')) {
                    badgeClass = 'medallion-badge';
                }

                rewardBadge.className = `reward-badge ${badgeClass}`;
                rewardBadge.textContent = `${reward.type} x${reward.amount}`;
                rewardsCell.appendChild(rewardBadge);

                if (index !== result.rewards.length - 1) {
                    rewardsCell.appendChild(document.createTextNode(' '));
                }
            });
            row.appendChild(rewardsCell);

            const mapCell = document.createElement('td');
            mapCell.textContent = result.map;
            row.appendChild(mapCell);

            const turnCell = document.createElement('td');
            turnCell.textContent = result.turn;
            row.appendChild(turnCell);

            const timeCell = document.createElement('td');
            const timeIcon = document.createElement('i');
            timeIcon.className = 'bi bi-clock time-icon';
            timeCell.appendChild(timeIcon);
            timeCell.appendChild(document.createTextNode(result.time));
            row.appendChild(timeCell);

            const dateTimeCell = document.createElement('td');
            const dateIcon = document.createElement('i');
            dateIcon.className = 'bi bi-calendar date-icon';
            dateTimeCell.appendChild(dateIcon);
            dateTimeCell.appendChild(document.createTextNode(result.dateTime));
            row.appendChild(dateTimeCell);

            tableBody.appendChild(row);
        });
    }

    async function tableconnect() {
        try {
            await tabeldata();
        } catch (error) {
            console.error('Error during tableconnect:', error);
        }
    }

    function init() {
        tableconnect();
        const toggler = document.querySelector('.navbar-toggler');
        if (toggler) {
            toggler.addEventListener('click', function() {
                alert('Menu functionality would be implemented here');
            });
        }
    }

    init();
});