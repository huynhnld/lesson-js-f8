const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const playList = $(".playlist");
const heading = $("header h2");
const cdThumb = $(".cd-thumb");
const audio = $("#audio");
const cd = $(".cd");
const player = $(".player");
const playBtn = $(".btn-toggle-play");
const progress = $("#progress");

const app = {
  currentIndex: 0,
  isPlaying: false,
  songs: [
    {
      name: "Kẻ viết ngôn tình",
      singer: "Châu Khải Phong",
      path: "./assets/music/song-1.mp3",
      image: "./assets/img/song-1.jpg",
    },
    {
      name: "Ngày mai người ta lấy chồng",
      singer: "Thành Đạt",
      path: "./assets/music/song-2.mp3",
      image: "./assets/img/song-2.jpg",
    },
    {
      name: "Cô ấy của anh ấy",
      singer: "Bảo Anh",
      path: "./assets/music/song-3.mp3",
      image: "./assets/img/song-3.jpg",
    },
    {
      name: "Mưa tháng sáu",
      singer: "Văn Mai Hương",
      path: "./assets/music/song-4.mp3",
      image: "./assets/img/song-4.jpg",
    },
    {
      name: "Trách duyên trách phận",
      singer: "Đỗ Thành Duy",
      path: "./assets/music/song-5.mp3",
      image: "./assets/img/song-5.jpg",
    },
    {
      name: "Mưa tháng sáu",
      singer: "Văn Mai Hương",
      path: "./assets/music/song-4.mp3",
      image: "./assets/img/song-4.jpg",
    },
    {
      name: "Trách duyên trách phận",
      singer: "Đỗ Thành Duy",
      path: "./assets/music/song-5.mp3",
      image: "./assets/img/song-5.jpg",
    },
    {
      name: "Mưa tháng sáu",
      singer: "Văn Mai Hương",
      path: "./assets/music/song-4.mp3",
      image: "./assets/img/song-4.jpg",
    },
    {
      name: "Trách duyên trách phận",
      singer: "Đỗ Thành Duy",
      path: "./assets/music/song-5.mp3",
      image: "./assets/img/song-5.jpg",
    },
  ],
  render: function () {
    const htmls = this.songs.map((song) => {
      return `
      <div class="song">
      <div class="thumb" style="background-image:url('${song.image}')">
      </div>
      <div class="body">
            <h3 class="title">${song.name}</h3>
      <p class="author">${song.singer}</p>
      </div>
            <div class="option">
      <i class="fas fa-ellipsis-h"></i>
      </div>
      </div>
      `;
    });
    $(".playlist").innerHTML = htmls.join("");
  },
  definePropertises: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.songs[this.currentIndex];
      },
    });
  },
  handleEvents: function () {
    const _this = this;
    const cdWidth = cd.offsetWidth;
    //Xử lý CD quay và dừng
    const cdThumbAnimate = cdThumb.animate([{ transform: "rotate(360deg)" }], {
      duration: 10000, // 10 second
      iterations: Infinity,
    });
    console.log(cdThumbAnimate);
    cdThumbAnimate.pause();
    //Xử lý phóng to thu nhỏ CD
    document.onscroll = function () {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const newCdWidth = cdWidth - scrollTop;
      cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
      cd.style.opacity = newCdWidth / cdWidth;
    };
    //Xử lý khi click play
    playBtn.onclick = function () {
      if (_this.isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    };
    //khi song được play
    audio.onplay = function () {
      _this.isPlaying = true;
      player.classList.add("playing");
      cdThumbAnimate.play();
    };
    //khi song được pause
    audio.onpause = function () {
      _this.isPlaying = false;
      player.classList.remove("playing");
      cdThumbAnimate.pause();
    };
    //Khi tiến độ bài hát thay đổi
    audio.ontimeupdate = function () {
      if (audio.duration) {
        const progressPercent = Math.floor(
          (audio.currentTime / audio.duration) * 100
        );
        progress.value = progressPercent;
      }
    };
    //Xử lý khi tua song
    progress.onchange = function (e) {
      const seekTime = (audio.duration / 100) * e.target.value;
      audio.currentTime = seekTime;
    };
  },
  loadCurrentSong: function () {
    heading.textContent = this.currentSong.name;
    cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
    audio.src = this.currentSong.path;
  },
  start: function () {
    //Định nghĩa các thuộc tính cho obj
    this.definePropertises();
    //Lắng nghe /  xử lý các sự kiện (DOM events)
    this.handleEvents();
    //Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
    this.loadCurrentSong();
    //Render danh sách bài hát playlist
    this.render();
  },
};
app.start();
{
}
