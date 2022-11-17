const Check=(variable,arrayLabel,arrayData)=>{
    var j = arrayLabel.indexOf(variable);
    var c = 0;
    for (var i = 0; i < arrayData.length; i++) {
      if (isNaN(arrayData[i][j])) {
        c += 1;
        return false;
      }
    }

    if (c === 0) {
      return true;
    }
}

export default Check