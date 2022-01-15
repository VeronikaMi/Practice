//k-means for points

function calculateDistanceBetween2Points(point1,point2){
  return Math.sqrt(Math.pow((point1[0] - point2[0]),2) + Math.pow(point1[1] - point2[1],2));
}

function kmeans(arrayToProcess, Clusters) {

  var Groups = new Array(); //კონტეინერი განაწილებისთვის
  var Centroids = new Array(); 
  var oldCentroids = new Array();
  var changed = false; //ვინახავთ ცენტროიდების შეცვლის სტატუსს

  //ვაინიციალიზირებთ კონტეინერს განაწილებისთვის, სიგრძე(ელემენტების რაოდება) იქნება კლასტერების რაოდენობის ტოლი - k
  for (initGroups = 0; initGroups < Clusters; initGroups++) {
    Groups[initGroups] = new Array();
  }

  //ვითვლით ცენტროიდების რაოდენობას
  initialCentroids = Math.round(arrayToProcess.length / (Clusters + 1)); //+1! 

  //Centroids კონტეინერში ვათავსებ arrayToProcess-დან ამორჩეულ წერტილს
  for (i = 0; i < Clusters; i++) {
    Centroids[i] = arrayToProcess[(initialCentroids * (i + 1))];
  }

  //სანამ ცენტროიდებო იცვლება გააკეთებს:
  do {
    //განაწილების კონტეინერში ვათავსებ k რაოდენობის ცარიელ არეის
    for (j = 0; j < Clusters; j++) {
      Groups[j] = [];
    }

    //ვითვლით მანძილს ცენტროიდამდე
    for (i = 0; i < arrayToProcess.length; i++) {
      Distance = -1;
      oldDistance = -1

      for (j = 0; j < Clusters; j++) {
        distance = calculateDistanceBetween2Points(Centroids[j],arrayToProcess[i]);
        if (oldDistance == -1) {
          oldDistance = distance;
          newGroup = j;
        }
        else if (distance <= oldDistance) {
          newGroup = j;
          oldDistance = distance;
        }
      }

      //შესაბამის ჯგუფში ვათავსებთ წერტილს
      Groups[newGroup].push(arrayToProcess[i]);
    }
   

    //ვინახავთ ცენტროიდებს, რომლებსაც შევადარებთ ახალ ცენტროიდებთან
    oldCentroids = Centroids;

    //ვითვლით ახალ ცენტროიდებს
    for (j = 0; j < Clusters; j++) {
      total1 = 0;
      total2 = 0;
      newCentroid = [];
      for (i = 0; i < Groups[j].length; i++) {
        total1 += Groups[j][i][0];
        total2 += Groups[j][i][1];
      }
      newCentroid = [total1 / Groups[newGroup].length, total2 / Groups[newGroup].length];
      Centroids[j] = newCentroid;
    }

    //ვადარებთ ცენტროიდებს
    for (j = 0; j < Clusters; j++) {
      if (Centroids[j] != oldCentroids[j]) {
        changed = true;
      }
      else{
        changed = false;
      }
    }

  }
  while (changed == true);

  //ვაბრუნებთ მზა განაწილებას
  return Groups;
}

let data = [
  [1,1],
  [1,2],
  [2,2],
  [3,3],
  [4,5],
  [5,4],
  [4,3],
  [4,2]
];

// let data = [
//   [1,3],
//   [3,3],
//   [4,3],
//   [5,3],
//   [1,2],
//   [4,2],
//   [1,1],
//   [2,1],
// ];

let groups = kmeans(data,2);
console.log(groups);
