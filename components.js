const app = Vue.createApp({
  data() {
    return {
      first: '',
      last: '',
    }
  },

  computed: {
    nameLength() {
      return this.first.length + this.last.length;
    }
  },

  methods: {
    randomize() {
      let name = this.first + this.last;
      console.log(name);
      let nameArray = name.split("")
      console.log(nameArray);
      let randomValue = Math.floor(Math.random() * (nameArray.length));
      console.log(randomValue);
      let randomName = [];
      let randomNameValue = nameArray[randomValue];
      randomName.push(randomNameValue);
      console.log(randomName);
      return randomName;
    }
  }
  
})

app.mount('#app')



