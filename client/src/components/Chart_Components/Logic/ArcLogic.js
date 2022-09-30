
const ArcLogic = (data) =>{
    const sourceNode=[];
    const targetNode=[];
    const weights=[];
    var allNodesNo;
    for(var i=0;i<data.length;i++){
        if(data[i][2]===''){
            weights.push(Number(0));
        }
        else{
            weights.push(Number(data[i][2]));
        }
        
        if(!sourceNode.includes(data[i][0])){
            sourceNode.push(data[i][0]);
        }
    }

    for(let i=0;i<data.length;i++){
        if(!sourceNode.includes(data[i][1]) && !targetNode.includes(data[i][1])){
            targetNode.push(data[i][1]);
        }
    }
    allNodesNo=sourceNode.length+targetNode.length;
    const allNodeList=[...sourceNode,...targetNode];
    console.log([sourceNode,targetNode,weights,allNodeList,allNodesNo]);
    return [sourceNode,targetNode,weights,allNodeList,allNodesNo]

}

export default ArcLogic