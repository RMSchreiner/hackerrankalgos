function toolchanger(tools, startIndex, target) {
    // Write your code here
    let toolIndex = tools.indexOf(target); //index of intended tool
    let optionLength = tools.length; //length of tools array
    let movement = 0;
    let reverseMovement = 0;

    if(toolIndex> startIndex){
    reverseMovement = Math.abs(((optionLength) - toolIndex) + startIndex);
    movement = Math.abs(toolIndex - startIndex);
    console.log(reverseMovement, movement)
    }
    else if (startIndex> toolIndex){
        reverseMovement = Math.abs(((optionLength) - startIndex) + toolIndex);
    movement = Math.abs(toolIndex - startIndex);
    console.log(reverseMovement, movement)
    }

    if(movement > reverseMovement){
        movement = reverseMovement
    } else if (startIndex === toolIndex){
     movement = 0;
    }
    console.log(movement);
   return movement;

}


let testArray = [{
    tools: ["sledge","mallet","wedge","hammer","drill","torch","screwdriver","grinder","tap"],
    startIndex:3,
    target:"grinder"
},
{
    tools: ["sledge","mallet","wedge","hammer","drill","torch","screwdriver","grinder","tap"],
    startIndex:7,
    target:"sledge"
},
{tools: ["sledge","mallet","wedge","hammer","drill","torch","screwdriver","grinder","tap"],
    startIndex:6,
    target:"torch"
}
];


for(let i = 0; i < testArray.length; i++){
    toolchanger(testArray[i].tools, testArray[i].startIndex,testArray[i].target);
}