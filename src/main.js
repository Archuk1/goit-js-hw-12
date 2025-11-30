import getImagesByQuery from "./js/pixabay-api";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { createGallery, clearGallery,hideLoader,showLoader,showLoadMoreButton,hideLoadMoreButton } from "./js/render-functions";

const refs = {
    form: document.querySelector('.form'),
    loadMoreBtn: document.querySelector('.js-loadbtn'),
}

let page;
let query;
let totalPage;

refs.form.addEventListener('submit', async e => {
    e.preventDefault();
    hideLoadMoreButton();
    clearGallery();
    showLoader();

    page = 1;
    query =  e.target.elements.searchText.value;

    if (query.trim() === "") {
        return iziToast.error({
            message: 'Please enter query!',
            position: 'topRight'
        })
    }
    

try {   
        const response = await getImagesByQuery(query,page);

        totalPage = response.totalHits / 15;

        if(response.totalHits == 0){
            iziToast.error({
                message:'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight'
            })
        } else if (page < totalPage) {
            showLoadMoreButton()
        } else {
         iziToast.info({
            message: `We're sorry, but you've reached the end of search results.`,
            position: 'topRight'
        })
        };

        createGallery(response.hits);   
        hideLoader();

} catch (err) {

     hideLoader();
     hideLoadMoreButton();

     iziToast.error({message: err.message,
        position: 'topRight'
     })
} 

    e.target.reset();
})






refs.loadMoreBtn.addEventListener('click', async()=>{
    page += 1;
    hideLoadMoreButton();
    
    let  galleryCard = document.querySelector('.gallery-item');
    let rect = galleryCard.getBoundingClientRect();

  

   try{
    showLoader();
     const response = await getImagesByQuery(query,page);
    createGallery(response.hits)
    hideLoader();
    window.scrollBy({
        top: rect.height * 2,
        behavior: 'smooth',
        
    })
    
  
    
   } catch(err){

    hideLoader();
    hideLoadMoreButton();
    
    iziToast.error({
        message:err,
        position:'topRight'
    })
   }
     if(page < totalPage){
        showLoadMoreButton();
    } else {
         iziToast.info({
            message: `We're sorry, but you've reached the end of search results.`,
            position: 'topRight'
        })
    }

})

