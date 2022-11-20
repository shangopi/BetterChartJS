const ArrayPush =(axis,text,tableData,variable)=>{
    const arr = {};
    var j;
    if (axis === "x") {
      j = text.indexOf(variable);
      if (j !== -1) {
        const sub_arr = [];
        tableData.map((row) => {
          sub_arr.push(row[j]);
        });
        arr[variable] = sub_arr;
        console.log("Array is..",arr)
        return arr
      }
    } else if (axis === "y") {
      variable.map((label) => {
        j = text.indexOf(label);
        if (j !== -1) {
          const sub_arr = [];
          tableData.map((row) => {
            sub_arr.push(row[j]);
          });
          arr[label] = sub_arr;
          ; //labels shud not have the same name.
        }
       
      });
      return arr
    } else if ((axis = "A")) {
      var a=[]
      var l = text.indexOf(variable[0]);
      var m = text.indexOf(variable[1]);
      var n = text.indexOf(variable[2]);
      tableData.map((row) => {
        a.push([row[l], row[m], row[n]]);
      });
      return a;
    }
}

export default ArrayPush