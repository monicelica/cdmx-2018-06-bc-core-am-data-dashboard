consGetData = () => {
  fetch("https://api.myjson.com/bins/o2mue;")
    .then(aswer => aswer.json())
    .then(data => {
      console.log(data);
    });
};

/* Funciones que debemos hacer:
window.data = {
computeStudenStats: (laboratoria) => {

    },
    computeGenerationStats: (laboratoria) => {

    },
    sortStudents: (laboratoria) => {

    },
    filterStudents: (laboratoria) => {

    },




    //module.exports al final del window data} */
