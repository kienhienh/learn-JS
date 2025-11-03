function countCharaters(){
    const text = document.getElementById("inputText").value;
    const total = text.length;
    document.getElementById("totalCount").textContent = total;
}