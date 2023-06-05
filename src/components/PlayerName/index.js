import './style.css'

function PlayerName(content) {
    return /*html*/`
        <p class="player-name" onclick="handleClick()">${content}
        </p>
    `
}

export default PlayerName