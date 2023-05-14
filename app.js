const app = Vue.createApp({
  data() {
    return {
      sampleImage: "media/avatar.jpeg",
      enteredName: "",
      name: "Enter Your Name",
      enteredAge: undefined,
      age: 24,
      ageInFiveYears: undefined,
      randomNumber: undefined,
    };
  },
  methods: {
    saveName() {
      console.log("saveName fired");
      if (this.enteredName && this.enteredName.length > 0) {
        this.name = this.enteredName;
        this.enteredName = "";
      }
    },
    saveAge() {
        if(this.enteredAge){
            this.age =this.enteredAge;
            this.enteredAge = ""
        }        
    },
    setAgeInFiveYears() {
      this.ageInFiveYears = this.age ? Number(this.age) + 5 : 0;
      console.log(this.ageInFiveYears);
      return this.ageInFiveYears;
    },
    setRandomNumber() {
        this.randomNumber = Math.random();
        return this.randomNumber
    }
  },
});

app.mount("#assignment");
