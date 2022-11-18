const SankeyLogic = (data) =>{
    let all_sources  = new Set();
    
    let all_destinations = new Set();
    for(let i =0; i<data.length;i++){
        all_sources.add(data[i][0]);
        all_destinations.add(data[i][1]);
    }
    let added_sources = [];
    let toBeAddedSources =  Array.from(all_sources);
    let all_destinations_arr = Array.from(all_destinations);
    let source = { 
        0 : {}
    }
    let y_value = 0;
    all_sources.forEach(function select_unique_source(val1,val2,set){
        if(!(all_destinations.has(val2) )){
            var index = toBeAddedSources.indexOf(val2);
            if (index > -1) {
                toBeAddedSources.splice(index, 1);
              }
            added_sources.push(val2);
            source[0][[val2]] = {};
            source[0][[val2]]["destination"] = [];
            source[0][[val2]]["total"] = 0;
            source[0][[val2]]["graph_y_value"] = 0;
        }
    })

    for (let i =0; i < added_sources.length ; i++ ){
        source[0][[added_sources[i]]]["graph_y_value"] = y_value;
        let filtered_result = data.filter((input)=> input[0]== added_sources[i] );
        for (let result in filtered_result){
            y_value += filtered_result[result][2];
            source[0][[added_sources[i]]]["total"] += filtered_result[result][2];
            source[0][[added_sources[i]]]["destination"].push([filtered_result[result][1],filtered_result[result][2]]);
        }
    }
    let output_y_value = y_value;

    
    let k = 1 ;
    let temp_sources =[];
    while(toBeAddedSources.length > 0){
        
        source[[k]] = {};
        y_value = 0;
        for (let l in data) {            
            let statement = true;
            let node = data[l][0];
            if(temp_sources.includes(node)){
                continue;
            }
            
            if (!(added_sources.includes(node, 0)   )){
                for (let j in data){                 
                    
                    if(data[j][1]==node &&  !(added_sources.includes(data[j][0], 0)) ){
                        statement = false;
                        break;
                    }              
                    
                }
                if(statement){

                    temp_sources.push(node);
                           
                    var index = toBeAddedSources.indexOf(node);
                    if (index > -1) {
                        toBeAddedSources.splice(index, 1);
                    }
                    source[[k]][[node]] = {};
                    source[[k]][[node]]["destination"] = [];
                    source[[k]][[node]]["total"] = 0;
                    source[[k]][[node]]["graph_y_value"] = y_value;
                    let filtered_result = data.filter((input)=> input[0]== node );
                    for (let result in filtered_result){
                        y_value += filtered_result[result][2];
                        source[[k]][[node]]["total"] += filtered_result[result][2];
                        source[[k]][[node]]["destination"].push([filtered_result[result][1],filtered_result[result][2]]);
                    }
    
                        
                }
                
            }

            
        }
        added_sources = added_sources.concat(temp_sources);       
        temp_sources=[]
        
        k++;
    }
    let non_source = all_destinations_arr.filter(n => !added_sources.includes(n));
    y_value = 0;
    source['d'] = {}
    for(let m in non_source){
        
        source['d'][[non_source[m]]] = {};
        source['d'][[non_source[m]]]["destination"] = [];
        source['d'][[non_source[m]]]["total"] = 0;
        source['d'][[non_source[m]]]["graph_y_value"] = y_value;

        let filtered_result = data.filter((input)=> input[1]== non_source[m] );
        for (let result in filtered_result){
            y_value += filtered_result[result][2];
            source['d'][[[non_source[m]]]]["total"] += filtered_result[result][2];
        }

    }


    return [source,output_y_value];

}

export default SankeyLogic