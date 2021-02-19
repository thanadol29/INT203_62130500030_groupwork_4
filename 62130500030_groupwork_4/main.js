class picture {
  constructor(name, url, like, bigpic) {
    this.name = name;
    this.url = url;
    this.like = like;
    this.bigpic = bigpic;
  }
}


const app = {
  data() {
    return {
      search: '',
      pics: [{ name: "Moscow", url: "https://www.planete-energies.com/sites/default/files/styles/media_full_width_940px/public/thumbnails/image/moscow.jpg?itok=J_vRU4rA", like: false , bigpic: false},
      { name: "Berlin", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Berlin_reichstag_west_panorama_2.jpg/1920px-Berlin_reichstag_west_panorama_2.jpg", like: false  , bigpic: false},
      { name: "Vienna", url: "https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2020/01/Karlskirche_Wien_abends-1024x576.jpg", like: false  , bigpic: false}
      ],
      showsearch: false,
      showmag: true
    }

  },
  computed: {
    filteredList() {
      return this.pics.filter(picture => {
        return picture.name.toLowerCase().includes(this.search.toLowerCase())
      })
    },
    mag() {
      this.showmag = !this.showmag;
    },
    test(){
       return this.pics.length;
    }
    ,
  methods: {
      clear() {
        this.search = '';
      }
    },
  

  }


}


Vue.createApp(app).mount('#app')