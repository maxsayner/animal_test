let animals = [
    {
      name: 'Armadillo',
      id: '1',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Nine-banded_Armadillo.jpg/1200px-Nine-banded_Armadillo.jpg'
    },
    {
      name: 'Tiger',
      id: '2',
      imageUrl: 'http://kids.sandiegozoo.org/sites/default/files/2017-06/animal-hero-tiger_0.jpg'
    },
    {
        name: 'Monkey',
        id: '3',
        imageUrl: 'https://images.pexels.com/photos/733998/pexels-photo-733998.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'

        }    ]
  module.exports = {
      getAnimals: (req, res) => {
        res.status(200).send(animals)

         
      },

      addAnimal: (req, res) => {
          const { newAnimal } = req.body;
          console.log(req.body) 
          let newId = id;

          let animalObject = {
             name: newAnimal,
              id: newId
          }

          animals.push(animalObject)
          id++;
          res.status(200).send(animals)
      },
      deleteAnimal: (req, res) => {
        const { id } = req.params;
    
        for(var i = 0; i <= animal.length; i++) {
          if(list[i].id == id) {
            animal.splice(i, 1);
          }
        }
        res.status(200).send(list)
      },
      updateAnimal: (req, res) => {
        const { id } = req.params;
        const { updatedAnimal } = req.body;
    
        for(var i = 0; i < list.length; i++) {
          if(animal[i].id == id) {
            animal[i].description = updatedAnimal;
          }
        }
        res.status(200).send(list)
      },
    }
    