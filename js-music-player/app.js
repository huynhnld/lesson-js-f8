// 1. render songs
// 2. Scroll top
// 3. Paly/ pause / ServiceWorker
// 4. CD rotate
// 5. Next / prev
// 6. Random
// 7. Next / Repeat when end
// 8. Active song
// 9. Scroll active song into view
// 10. Play song when click song
// 11. Save json config repeat & random
// 12. khi nhấn random cần hạn chế tối đa việc random lại các song đã hát (option)
// 13. khi next nếu bị che khi show song ra mục dashboard thì dùng block: "center"

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const playList = $(".playlist");
const heading = $("header h2");
const cdThumb = $(".cd-thumb");
const audio = $("#audio");
const cd = $(".cd");
const playBtn = $(".btn-toggle-play");
const player = $(".player");
const progress = $(".progress");
const nextBtn = $(".btn-next");
const prevBtn = $(".btn-prev");
const randomBtn = $(".btn-random");
const repeatBtn = $(".btn-repeat");
const PLAYER_STORAGE_KEY = "F8_PLAYER";
const app = {
  currentIndex: 0,
  isPlaying: false,
  isRandom: false,
  isRepeat: false,
  config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
  setConfig: function (key, value) {
    this.config[key] = value;
    localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config));
  },
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
      name: "Kẻ viết ngôn tình 22",
      singer: "Châu Khải Phong",
      path: "./assets/music/song-1.mp3",
      image: "./assets/img/song-1.jpg",
    },
    {
      name: "Ngày mai người ta lấy chồng 22",
      singer: "Thành Đạt",
      path: "./assets/music/song-2.mp3",
      image: "./assets/img/song-2.jpg",
    },
    {
      name: "Cô ấy của anh ấy 22",
      singer: "Bảo Anh",
      path: "./assets/music/song-3.mp3",
      image: "./assets/img/song-3.jpg",
    },

    {
      name: "Mưa tháng sáu 22",
      singer: "Văn Mai Hương",
      path: "./assets/music/song-4.mp3",
      image: "./assets/img/song-4.jpg",
    },
    {
      name: "Trách duyên trách phận 22",
      singer: "Đỗ Thành Duy",
      path: "./assets/music/song-5.mp3",
      image: "./assets/img/song-5.jpg",
    },
  ],
  render: function () {
    const htmls = this.songs.map((song, index) => {
      return `
      <div  class="song ${
        index === this.currentIndex ? "active" : ""
      }" data-index="${index}">
        <div class="thumb" style="background-image: url('${song.image}')">
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
    playList.innerHTML = htmls.join("");
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
    const cdThumnbAnimate = cdThumb.animate([{ transform: "rotate(360deg)" }], {
      duration: 10000,
      iterations: Infinity,
    });
    cdThumnbAnimate.pause();
    //Xử lý phóng to , thu nhỏ CD
    document.onscroll = function () {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const newCdWidth = cdWidth - scrollTop;
      cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
      cd.style.opacity = newCdWidth / cdWidth;
    };
    // Xử lý khi click play
    playBtn.onclick = function () {
      if (_this.isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    };
    //khi song được play
    audio.onplay = function () {
      cdThumnbAnimate.play();

      _this.isPlaying = true;
      player.classList.add("playing");
    };
    //khi song được pause
    audio.onpause = function () {
      cdThumnbAnimate.pause();

      _this.isPlaying = false;
      player.classList.remove("playing");
    };
    // Khi tiến độ bài hát thay đổi
    audio.ontimeupdate = function () {
      if (audio.duration) {
        const progressPercent = Math.floor(
          (audio.currentTime / audio.duration) * 100
        );
        progress.value = progressPercent;
      }
    };
    //Xử lý khi tua bài hát
    progress.oninput = function (e) {
      const seekTime = (audio.duration / 100) * e.target.value;
      audio.currentTime = seekTime;
    };
    // Khi next song
    nextBtn.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.nextSong();
      }
      audio.play();
      _this.render();
      _this.scrollToActiveSong();
    };
    // Khi prev song

    prevBtn.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.prevSong();
      }
      audio.play();
      _this.render();
      _this.scrollToActiveSong();
    };
    // Xử lý bật/tắt random song
    randomBtn.onclick = function (e) {
      _this.isRandom = !_this.isRandom;
      _this.setConfig("isRandom", _this.isRandom);
      randomBtn.classList.toggle("active", _this.isRandom);
    };
    // Xử lý phát lại 1 song
    repeatBtn.onclick = function (e) {
      _this.isRepeat = !_this.isRepeat;
      _this.setConfig("isRepeat", _this.isRepeat);

      repeatBtn.classList.toggle("active", _this.isRepeat);
    };
    //Xử lý next song khi audio ended
    audio.onended = function () {
      if (_this.isRepeat) {
        audio.play();
      } else {
        nextBtn.click();
      }
    };

    //Lắng nghe hành vi click vào playList
    playList.onclick = function (e) {
      songNode = e.target.closest(".song:not(.active)");
      if (songNode || e.target.closest(".option")) {
        if (songNode) {
          //khi get index từ attribute từ số => thành chuỗi, nên ta cần convert sang number lại
          console.log("index: ", songNode.dataset.index);
          _this.currentIndex = Number(songNode.dataset.index);
          _this.loadCurrentSong();
          _this.render();
          audio.play();
        }
      }
    };
  },
  scrollToActiveSong: function () {
    setTimeout(() => {
      $(".song.active").scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 200);
  },
  loadConfig: function () {
    this.isRandom = this.config.isRandom;
    this.isRepeat = this.config.isRepeat;
    //Object.assign(this, this.config) => hợp nhất cấu hình vào this nhưng không nên vì có thể sẽ có những thứ ko hợp nhất được
  },
  loadCurrentSong: function () {
    heading.textContent = this.currentSong.name;
    cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
    audio.src = this.currentSong.path;
  },
  nextSong: function () {
    this.currentIndex++;
    if (this.currentIndex >= this.songs.length) {
      this.currentIndex = 0;
    }
    this.loadCurrentSong();
  },
  prevSong: function () {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.songs.length - 1;
    }
    this.loadCurrentSong();
  },
  playRandomSong: function () {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.songs.length);
    } while (newIndex === this.currentIndex);
    this.currentIndex = newIndex;
    this.loadCurrentSong();
  },
  start: function () {
    //Gán cấu hình từ config vào ứng dụng
    this.loadConfig();
    //Dinh nghia cac thuoc tinh cho object
    this.definePropertises();
    //Lang nghe/ xu ly cac su kien (DOM event)
    this.handleEvents();
    //Tai thong tin bai hat hien tai vao giao dien UI khi chay App
    this.loadCurrentSong();
    //render playlist
    this.render();
    //Hiển thị trạng thái ban đầu của btn repeat và random
    randomBtn.classList.toggle("active", this.isRandom);
    repeatBtn.classList.toggle("active", this.isRepeat);
  },
};
app.start();
