// burger menu
// document.addEventListener("DOMContentLoaded", () => {
function toggleBurgerMenu(){
    burgerMenu.classList.toggle('show');
    menu.classList.toggle('show')
}
const burgerMenu = document.querySelector('.humbarger'),
      menu = document.getElementById('menu');
burgerMenu.addEventListener('click',toggleBurgerMenu)

function toggleSelectCategorySelectList() {
    categorySelectList.classList.toggle('open')
  
}
const categorySelectList = document.querySelector('.category_select-list');
categorySelectList.addEventListener('click',toggleSelectCategorySelectList)
// });
async function getNewsData(event,Element) {
    event.preventDefault();
    const url = Element.href,
    xhr = new XMLHttpRequest(),
    loader = document.querySelector('.loader'),
    Newstarget = document.querySelector('.frame-type-news_newsliststicky:has(.news-list-view.blog) .news.container');
    //show the loader before we fetech the data 
    Newstarget.innerHTML=''; 
    loader.classList.remove('hide');
    xhr.open('GET', url);
    xhr.onload = function() {
      if (xhr.status === 200) {
        const data = xhr.responseText
        , parser = new DOMParser()
        , doc = parser.parseFromString(data, 'text/html')
        , NewsContent = doc.querySelector('.news-list-view.blog') 
        , NodataFound = doc.querySelector('.news.container:has(.no-news-found) .no-news-found') ?? 0;
            if(NewsContent){
                setTimeout(function(){
                  //hide the loader and show the data 
                    loader.classList.add('hide')
                    Newstarget.appendChild(NewsContent); 
                },1000)
            }else{
                  if(NodataFound){
                    Newstarget.appendChild(NodataFound);
                    loader.classList.add('hide'); 
                  }
            }

      } else {
        console.error('Error fetching data:', xhr.statusText);
      }
    };
    xhr.send();

// another way to do it 
    // try {
    //     const response = await fetch(url)
    //     , html = await response.text()
    //     // Convert the HTML string into a document object
    //     , parser = new DOMParser()
    //     , doc = parser.parseFromString(html, 'text/html')
    //     //replace the old content by the new one 
    //     , NewsContent = doc.querySelector('.news-list-view.blog')
    //     , Newstarget = document.querySelector('.news.container:has(.news-list-view.blog)');
    //         if(NewsContent){
    //             Newstarget.innerHTML='';
    //             Newstarget.appendChild(NewsContent); 
    //         }

    // } catch (error) {
    //     console.log(error);
    // }
}
const selectCategorySelectList = document.querySelectorAll('.category__list a');
      selectCategorySelectList.forEach((Element)=>Element.addEventListener('click',(e)=>{
        getNewsData(e, Element);
        toggleSelectCategorySelectList();
      }))