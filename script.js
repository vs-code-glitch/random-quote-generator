const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author .name"),
quoteBtn = document.querySelector("button"),
soundBtn = document.querySelector(".sound"),
copyBtn = document.querySelector(".copy"),
twitterBtn = document.querySelector(".twitter");


//random quote function
function randomQuote(){

   quoteBtn.classList.add("loading");
    // fetching random quotes/data from the api and parsing it into JavaScript object
   fetch("https://api.quotable.io/random").then(res=>
     res.json()).then(result =>{
        console.log(result);
       // console.log(tag);
       quoteText.innerText = result.content;
       authorName.innerText = result.author;
       quoteBtn.innerText = "New Quote";
       quoteBtn.classList.remove("loading");
     });
   }

soundBtn.addEventListener("click",()=>{
   let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
   speechSynthesis.speak(utterance);
})

copyBtn.addEventListener("click",()=>{
   navigator.clipboard.writeText(quoteText.innerText);
})

twitterBtn.addEventListener("click",()=>{
   let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`
   window.open(tweetUrl,"__blank");
})

quoteBtn.addEventListener("click",randomQuote);