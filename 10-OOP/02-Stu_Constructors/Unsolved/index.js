// TODO: Create a constructor function called 'Developer' that takes in 'name' and 'tech'
function Developer(name, tech) {
    this.name = name;
    this.tech = tech;
    this.introduction = () => {
    //   if (this.raining === true) {
        console.log("My name is " + this.name + " and my favorite tech is " + this.tech);
    //   }
    };
  }
  const dogs = new Developer("Billy", 'chatGPT');

  dogs.introduction();
// TODO: Include a method called 'introduction()' that introduces the Developer with their name and favorite tech

// TODO: Create a new object using the 'Developer' constructor

// TODO: Call the 'introduction()' method on the new object
