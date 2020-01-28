/*
arguments: context, bev type array for labels, drink object array
if you want to combine wine/beer then combine the label 
arrays and drink object arrays to pass them in
*/ 
//this needs more functions to run, just a placeholder
function renderChart(ctx, typeArray, drinkArray){
  var data = {};
  var labels = typeArray;


  for(var i = 0; i < drinkArray.length; i++){

  }


  data.labels = labels;
  
  var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});
}


/*
arguments: array of drink types to use as 'labels', array of drink objects
this will create new 'TypeScore' objects that will be populated with the scoring info
from every drink and then averaged before being returned.
This is intended to be used with the renderChart function to populate the chart data
*/
function chartScoreAverage(typeArray, drinkArray){

  var scores = [];

  for(var labelSeed = 0; labelSeed < typeArray.length; labelSeed++){
    scores.push(new TypeScore(typeArray[labelSeed]));
  }

  arrayOfDrinkObjects:
  for(var aDrink = 0; aDrink < drinkArray.length; aDrink++){
    arrayOfTypes:
    for( var labelObject = 0; labelObject < scores.length; labelObject++){
      if(drinkArray[aDrink].type === scores[labelObject].type){
        scores[labelObject].totalScore += drinkArray[aDrink].score;
        scores[labelObject].count++;
      }
    }
  }

  for(var scorei = 0; scorei < scores.length; scorei++){
    scores[scorei].generateAverage();
  }

  return scores;
}

var TypeScore = function(label){
  this.type = label;
  this.totalScore = 0;
  this.count = 0;
  this.avg = 0;
};

TypeScore.prototype.generateAverage = function() {
  this.avg = this.totalScore / this.count;
};

//this is testing code for the chartScoreAverage function
<<<<<<< HEAD
//we can delete later after we confirm that objects are being built correctly
//and we get a console log showing as much
=======
//we can delete later
>>>>>>> 6427f6238aeb08685c05f10377e56e916b5079ee
// var labs = ['foo', 'bar'];

// var a = {
//   name: 'test1',
//   type: 'foo',
//   score: 3, 
// };

// var b = {
//   name: 'test2',
//   type: 'foo',
//   score: 5,
// };

// var c = {
//   name: 'test3',
//   type: 'bar',
//   score: 10,
// };

// var q = [a,b,c];

// console.log(chartScoreAverage(labs, q));
