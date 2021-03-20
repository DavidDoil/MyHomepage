const app = Vue.createApp({
  data() {
    return {
      first: '',
      last: '',
      lastBackwards: '',
      firstBackwards: '',
      isClicked: false
    }
  },

  computed: {
    nameLength() {
      return this.first.length + this.last.length;
    },

    randomize() {
      let name = this.first + this.last;
      console.log(name);
      let nameArray = name.split("")
      console.log(nameArray);
      let nameArrayCopy = name.split("");
      let randomNameArray = nameArray.map(rando => {
        let randomValue = Math.floor(Math.random() * (nameArrayCopy.length));
        rando = nameArrayCopy[randomValue];
        nameArrayCopy.splice(randomValue, 1);
        return rando;
      })
      let randomNameString = randomNameArray.join("")
      return randomNameString;
    },

    backwardsLast() {
      let lastArray = this.last.split("");
      this.lastBackwards = lastArray.reverse().join("");
      return this.lastBackwards;
    },

    backwardsFirst() {
      let firstArray = this.first.split("");
      this.firstBackwards = firstArray.reverse().join("");
      return this.firstBackwards;
    }


  },

  methods: {
    showRandom() {
      this.isClicked = !this.isClicked;
    }
  }
  
})

app.mount('#app')



