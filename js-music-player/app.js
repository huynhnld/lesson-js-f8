const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const playList = $(".playlist");
const app = {
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
  ],
  render: function () {
    const htmls = this.songs.map((song) => {
      return `
        <div class="song">
            <div class="thumb " style="background-image:url('${song.image}')">
            </div>
            <div class="body">
                <h3 class="title">${song.name}</h3>
                <p class="author">${song.singer}</p>
            </div>
            <div class="option">
                <i class="fas fa-ellipsis-h"></i>
            </div>
        </div>`;
    });
    $(".playlist").innerHTML = htmls.join("");
  },
  start: function () {
    this.render();
  },
};
app.start();
