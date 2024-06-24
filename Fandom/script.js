const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const sidebar = document.querySelector('.container .sidebar');

menuOpen.addEventListener('click', () => sidebar.style.left = '0');

menuClose.addEventListener('click', () => sidebar.style.left = '-100%');


const image = document.getElementById('cover'),
    title = document.getElementById('music-title'),
    artist = document.getElementById('music-artist'),
    currentTimeEl = document.getElementById('current-time'),
    durationEl = document.getElementById('duration'),
    progress = document.getElementById('progress'),
    playerProgress = document.getElementById('player-progress'),
    prevBtn = document.getElementById('prev'),
    nextBtn = document.getElementById('next'),
    playBtn = document.getElementById('play'),
    background = document.getElementById('bg-img');

const music = new Audio();

const songs = [
    
    {
        path: 'Music/Clancy (2024)/The_Craving.mp3',
        displayName: 'The Craving',
        cover: 'Pictures/clancy.webp',
        artist: '21 Pilots (Clancy)',
    },
    {
        path: 'Music/Blurryface (2015)/Heathens.mp3',
        displayName: 'Heathens',
        cover: 'Pictures/heathens.webp',
        artist: 'Blurryface (2015)',
    },
    {
        path: 'Music/Blurryface (2015)/Ride.mp3',
        displayName: 'Ride',
        cover: 'Pictures/Ride.webp',
        artist: '21 Pilots (Blurryface) ',
    },
    {
        path: 'Music/Blurryface (2015)/Stressed_Out.mp3',
        displayName: 'Stressedout',
        cover: 'Pictures/Stressedout.webp',
        artist: '21 Pilots (Blurryface)',
    },
    {
        path: 'Music/Clancy (2024)/Paladin_Strait.mp3',
        displayName: 'Paladin Strait',
        cover: 'Pictures/clancy.webp',
        artist: '21 Pilots (Clancy)',
    },
    {
        path: 'Music/Scaled and Icy (2021)/The_Outside.mp3',
        displayName: 'The Outside',
        cover: 'Pictures/Good Day.webp',
        artist: '21 Pilots (Scaled and Icy)',
    },
    {
        path: 'Music/Trench (2018)/Chlorine.mp3',
        displayName: 'Chlorine',
        cover: 'Pictures/cholorine.webp',
        artist: '21 Pilots (Trench)',
    },
    
    
];

let musicIndex = 0;
let isPlaying = false;

function togglePlay() {
    if (isPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
}

function playMusic() {
    isPlaying = true;
    // Change play button icon
    playBtn.classList.replace('fa-play', 'fa-pause');
    // Set button hover title
    playBtn.setAttribute('title', 'Pause');
    music.play();
}

function pauseMusic() {
    isPlaying = false;
    // Change pause button icon
    playBtn.classList.replace('fa-pause', 'fa-play');
    // Set button hover title
    playBtn.setAttribute('title', 'Play');
    music.pause();
}

function loadMusic(song) {
    music.src = song.path;
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    image.src = song.cover;
    
}

function changeMusic(direction) {
    musicIndex = (musicIndex + direction + songs.length) % songs.length;
    loadMusic(songs[musicIndex]);
    playMusic();
}

function updateProgressBar() {
    const { duration, currentTime } = music;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    const formatTime = (time) => String(Math.floor(time)).padStart(2, '0');
    durationEl.textContent = `${formatTime(duration / 60)}:${formatTime(duration % 60)}`;
    currentTimeEl.textContent = `${formatTime(currentTime / 60)}:${formatTime(currentTime % 60)}`;
}

function setProgressBar(e) {
    const width = playerProgress.clientWidth;
    const clickX = e.offsetX;
    music.currentTime = (clickX / width) * music.duration;
}

playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', () => changeMusic(-1));
nextBtn.addEventListener('click', () => changeMusic(1));
music.addEventListener('ended', () => changeMusic(1));
music.addEventListener('timeupdate', updateProgressBar);
playerProgress.addEventListener('click', setProgressBar);

loadMusic(songs[musicIndex]);
