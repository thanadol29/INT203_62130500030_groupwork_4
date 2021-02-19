class picture {
  constructor(name, url,like) {
    this.name = name;
    this.url = url;
    this.like = like;
  }
}


const app = {
  data() {
    return {
      search: '',
      pics: [{ name: "Moscow", url: "https://i.imgur.com/B0zvdp6.png", like: false },
      { name: "Berlin", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Berlin_reichstag_west_panorama_2.jpg/1920px-Berlin_reichstag_west_panorama_2.jpg", like: false },
      { name: "Vienna", url: "https://i.imgur.com/5tRu76I.jpg", like: false }
      ],
      showsearch: false

    }

  },
  computed: {
    filteredList() {
      return this.pics.filter(picture => {
        return picture.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }


}


Vue.createApp(app).mount('#app')