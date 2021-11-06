 const latestSection = document.querySelector('.latest-section')
const businessSection = document.querySelector('.business-section')
const All = document.querySelector('.All')
const form = document.querySelector('form')
const apiKey = `86d5307755034ab593e7f168760294e8`

const latestNews = async()=>{
   
    const base  =`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`
   
   const getData = await fetch(base)
   const convert = await getData.json()
  
  
   
   return convert.articles
}


latestNews().then((news)=>{updateTrending(news)})
.catch((err)=>{
 console.log(err);
})



const updateTrending = (news)=>{
   







      let html =``
     news.forEach(news => {
       
      html+= `  <div class="newsp"><div class="news-photo">
        <img src="${news.urlToImage}" alt="">
    </div>
    <div class="news-info">

    <div class="news-title">
       ${news.title}
    </div>
    <div class="news-content">
       ${news.content}
       <button class="btn-news"><a href="${news.url}" target="_blank">Read More</a></button>
    </div>
</div> </div>`
     });
 
latestSection.innerHTML = html


}




// business-section

const businessNews = async(v)=>{
   
   const base  =`https://newsapi.org/v2/top-headlines?country=in&category=${v}&apiKey=${apiKey}`
  
  const getData = await fetch(base)
  const convert = await getData.json()
 
 
  
  return convert.articles
}


// value


 form.addEventListener('click',e=>{

   if (e.target.classList.contains('news-change')) {
     let title = e.target.value
    
      businessNews(title).then((news)=>{updateBusiness(news,title)})
      .catch((err)=>{
      console.log(err);
      })
   
      return e.target.value



   }
     
   })


   businessNews('business').then((news)=>{updateBusiness(news)})
   .catch((err)=>{
   console.log(err);
   })






const updateBusiness = (news,title)=>{
 
 
   if (title) {
      
      All.innerHTML = title
   }
   

     let html =``
    news.forEach(news => {
     
     html+= `  <div class="newsp"><div class="news-photo">
       <img src="${news.urlToImage}" alt="">
   </div>
   <div class="news-info">

   <div class="news-title">
      ${news.title}
   </div>
   <div class="news-content">
      ${news.content}
      <button class="btn-news"><a href="${news.url}" target="_blank">Read More</a></button>
   </div>
</div> </div>`
    });

businessSection.innerHTML = html


}



