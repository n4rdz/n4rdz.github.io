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

    // 21 Pilots (2009) //

    {
        path: 'Music/21 PIlots (2009)/Addict_With_A_Pen.mp3',
        displayName: 'Addict With A Pen',
        cover: 'Pictures/21 Pilots(2009)_album.webp',
        artist: '21 Pilots (2009)',
    },
    {
        path: 'Music/21 PIlots (2009)/Fall_Away.mp3',
        displayName: 'Fall Away',
        cover: 'Pictures/21 Pilots(2009)_album.webp',
        artist: '21 Pilots (2009)',
    },
    {
        path: 'Music/21 PIlots (2009)/Friend_Please.mp3',
        displayName: 'Friend Please',
        cover: 'Pictures/21 Pilots(2009)_album.webp',
        artist: '21 Pilots (2009)',
    },
    {
        path: 'Music/21 PIlots (2009)/March_To_the_Sea.mp3',
        displayName: 'March To The Sea',
        cover: 'Pictures/21 Pilots(2009)_album.webp',
        artist: '21 Pilots (2009)',
    },
    {
        path: 'Music/21 PIlots (2009)/Twenty_One_Pilots__At_The_Risk_Of_Feeling_Dumb.mp3',
        displayName: 'At The Rish Of Feeling Dumb',
        cover: 'Pictures/21 Pilots(2009)_album.webp',
        artist: '21 Pilots (2009)',
    },

    // Regional At Best //

    {
        path: 'Music/Regional at Best (2011)/Slowtown.mp3',
        displayName: 'Regional At Best',
        cover: 'Pictures/Regional_at_Best.webp',
        artist: 'Regional At Best (2011)',
    },
    {
        path: 'Music/Regional at Best (2011)/Guns_For_Hands.mp3',
        displayName: 'Guns For Hands',
        cover: 'Pictures/Guns for hands.webp',
        artist: 'Regional At Best (2011)',
    },
    {
        path: 'Music/Regional at Best (2011)/Ode_To_Sleep.mp3',
        displayName: 'Ode To Sleep',
        cover: 'Pictures/Guns for hands.webp',
        artist: 'Regional At Best (2011)',
    },
    {
        path: 'Music/Regional at Best (2011)/Holding_On_To_You.mp3',
        displayName: 'Holding On To You',
        cover: 'Pictures/holding onto you.webp',
        artist: 'Regional At Best (2011)',
    },
    {
        path: 'Music/Regional at Best (2011)/Car_Radio.mp3',
        displayName: 'Car Radio',
        cover: 'Pictures/Car_Radio.webp',
        artist: 'Regional At Best (2011)',
    },

    // Vessel // 

    {
        path: 'Music/Vessel (2013)/Fake_You_Out.mp3',
        displayName: 'Fake You Out',
        cover: 'Pictures/Fake-You-Out webp.webp',
        artist: 'Vessel (2013)',
    },
    {
        path: 'Music/Vessel (2013)/Migraine.mp3',
        displayName: 'Migraine',
        cover: 'Pictures/Migraine.webp',
        artist: 'Vessel (2013)',
    },
    {
        path: 'Music/Vessel (2013)/Screen.mp33',
        displayName: 'Screen',
        cover: 'Pictures/Guns for hands.webp',
        artist: 'Vessel (2013)',
    },
    {
        path: 'Music/Vessel (2013)/House_of_Gold.mp3',
        displayName: 'House Of Gold',
        cover: 'Pictures/House_of_Gold.webp',
        artist: 'Vessel (2013)',
    },
    {
        path: 'Music/Vessel (2013)/SemiAutomatic.mp3',
        displayName: 'Semi-Automatic',
        cover: 'Pictures/Guns for hands.webp',
        artist: 'Vessel (2013)',
    },

    // Blurryface // 

    {
        path: 'Music/Blurryface (2015)/Heathens.mp3',
        displayName: 'Heathens',
        cover: 'Pictures/heathens.webp',
        artist: 'Blurryface (2015)',
    },
    {
        path: 'Music/Blurryface (2015)/Lane_Boy.mp3',
        displayName: 'Lane Boy',
        cover: 'Pictures/Lane_Boy.webp',
        artist: 'Blurryface (2015)',
    },
    {
        path: 'Music/Blurryface (2015)/Heavydirtysoul.mp3',
        displayName: 'Heavydirtysoul',
        cover: 'Pictures/heavydirtysoul.webp',
        artist: 'Blurryface (2015)',
    },
    {
        path: 'Music/Blurryface (2015)/Stressed_Out.mp3',
        displayName: 'Stressedout',
        cover: 'Pictures/Stressedout.webp',
        artist: 'Blurryface (2015)',
    },
    {
        path: 'Music/Blurryface (2015)/Tear_In_My_Heart.mp3',
        displayName: 'Tear In My Heart',
        cover: 'Pictures/tear in my heart.webp',
        artist: 'Blurryface (2015)',
    },
    {
        path: 'Music/Blurryface (2015)/Ride.mp3',
        displayName: 'Ride',
        cover: 'Pictures/Ride.webp',
        artist: 'Blurryface (2015)',
    },
    
    // Trench //

    {
        path: 'Music/Trench (2018)/Jumpsuit.mp3',
        displayName: 'Jumpsuit',
        cover: 'Pictures/jumpsuit.webp',
        artist: 'Trench (2018)',
    },
    {
        path: 'Music/Trench (2018)/Levitate.mp3',
        displayName: 'Levitate',
        cover: 'Pictures/levitate.webp',
        artist: 'Trench (2018)',
    },
    {
        path: 'Music/Trench (2018)/Morph.mp3',
        displayName: 'Morph',
        cover: 'Pictures/levitate.webp',
        artist: 'Trench (2018)',
    },
    {
        path: 'Music/Trench (2018)/Chlorine.mp3',
        displayName: 'Chlorine',
        cover: 'Pictures/cholorine.webp',
        artist: 'Trench (2018)',
    },
    {
        path: 'Music/Trench (2018)/My_Blood.mp3',
        displayName: 'My Blood',
        cover: 'Pictures/Guns for hands.webp',
        artist: 'Trench (2018)',
    },

    // Scaled and Icy // 

    {
        path: 'Music/Scaled and Icy (2021)/Good_Day.mp3',
        displayName: 'Good Day',
        cover: 'Pictures/Good Day.webp',
        artist: 'Scaled and Icy (2021)',
    },
    {
        path: 'Music/Scaled and Icy (2021)/Choker.mp3',
        displayName: 'Choker',
        cover: 'Pictures/Good Day.webp',
        artist: 'Scaled and Icy (2021)',
    },
    {
        path: 'Music/Scaled and Icy (2021)/Shy_Away.mp3',
        displayName: 'Shy Away',
        cover: 'Pictures/Shy_Away.webp',
        artist: 'Scaled and Icy (2021)',
    },
    {
        path: 'Music/Scaled and Icy (2021)/Saturday.mp3',
        displayName: 'Saturday',
        cover: 'Pictures/Good Day.webp',
        artist: 'Scaled and Icy (2021)',
    },
    {
        path: 'Music/Scaled and Icy (2021)/The_Outside.mp3',
        displayName: 'The Outside',
        cover: 'Pictures/Good Day.webp',
        artist: 'Scaled and Icy (2021)',
    },

    // Clancy // 

    {
        path: 'Music/Clancy (2024)/At_The_Risk_Of_Feeling_Dumb.mp3',
        displayName: 'At The Risk Of Feeling Dumb',
        cover: 'Pictures/clancy.webp',
        artist: 'Clancy (2024)',
    },
    {
        path: 'Music/Clancy (2024)/Midwest_Indigo.mp3',
        displayName: 'Midwest Indigo',
        cover: 'Pictures/clancy.webp',
        artist: 'Clancy (2024)',
    },
    {
        path: 'Music/Clancy (2024)/Oldies_Station.mp3',
        displayName: 'Oldies Station',
        cover: 'Pictures/clancy.webp',
        artist: 'Clancy (2024)',
    },
    {
        path: 'Music/Clancy (2024)/Paladin_Strait.mp3',
        displayName: 'Paladin Strait',
        cover: 'Pictures/clancy.webp',
        artist: 'Clancy (2024)',
    },
    {
        path: 'Music/Clancy (2024)/The_Craving.mp3',
        displayName: 'The Craving',
        cover: 'Pictures/clancy.webp',
        artist: 'Clancy (2024)',
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
    background.src = song.cover;
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