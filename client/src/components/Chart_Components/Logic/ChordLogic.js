
const ChordLogic = (data) =>{

    const label=['Source','Target','Volume'];
    const data1= data;
    const space = 10;
    let total =0;
    var in_out = {};
    var out ={};
     

    for(var i=0;i<data1.length;i++){
        if(data1[i][2]!=''){
            if(!(data1[i][0] in in_out)){
                in_out[data1[i][0]] =0;
            }
            if(!(data1[i][0] in out)){
                out[data1[i][0]] =[0];
            }
            if(!(data1[i][1] in in_out)){
                in_out[data1[i][1]] =0;
            }
            
            in_out[data1[i][0]] += data1[i][2];
            in_out[data1[i][1]] += data1[i][2];
            out[data1[i][0]].push([data1[i][1],data1[i][2]])
            total += data1[i][2] *2
        }
      
    }

    let sum=-Math.PI/2;
    let oldsum=-Math.PI/2;
    let angle = 0;
    let coordinate = [];

    for(var key in in_out) {
        oldsum = sum;
        sum = oldsum + 2*Math.PI*space/(100*(Object.keys(in_out).length))
        sum = oldsum + 2*Math.PI*in_out[key]*(100-space)/(100*total);
        angle = (oldsum + sum )/2;
        coordinate = [550+350*Math.sin(angle+Math.PI/2),350-300*Math.cos(angle+Math.PI/2)];
        if(out[key]){
            out[key][0]= oldsum;
        }
        
       
       

        


    }
    return out
    

}

export default ChordLogic