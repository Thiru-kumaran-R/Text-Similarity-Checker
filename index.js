text1 = document.getElementById("text-1");
text2 = document.getElementById("text-2");
submitButton = document.querySelector("button");
result = document.getElementById("result-value");

let text1Value ;
let text2Value ;

let checkSimilarity = () => {
    let text1Array = text1Value.split(" ");
    let text2Array = text2Value.split(" ");

    // To remove duplicates
    let set1 = new Set(text1Array);
    let set2 = new Set(text2Array);

    //To find Intersection
    let intersection = new Set([...set1].filter(x => set2.has(x)));

    //To find Union
    let union = new Set([...set1, ...set2]);

    //To calculate Jaccard Similarity
    let similarity = (intersection.size / union.size)*100

    result.innerText = similarity;
}

submitButton.addEventListener("click", () => {
    text1Value = text1.value;
    text2Value = text2.value;

    if(text1Value && text2Value){
        checkSimilarity();
    }else{
        alert("Enter some value to check similarity!");
    }

})