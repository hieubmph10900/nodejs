import Error404Page from './pages/Error404Page.js';
import HomePage from './pages/HomePage.js';
import ProductDetail from './pages/ProductDetail.js';
import ProductsPage from './pages/ProductsPage.js';
import { parseRequesUrl, $ } from './utils.js';
import Header from './components/Header.js';
import CategoryPage from './pages/CategoryPage.js';
import ProductAddPage from './pages/ProductAddPage.js';
import AdminProductPage  from './pages/AdminProductPage.js';
import ProductEditPage from './pages/ProductEditPage.js';
import contactPage from './pages/contact.js';


const routes = {
    '/': HomePage,
    '/products': ProductsPage,
    '/products/:id':ProductDetail,
    '/category/:id':CategoryPage,
   '/addproduct': ProductAddPage,
   '/listproduct': AdminProductPage,
   '/editproduct/:id': ProductEditPage,
   '/contact': contactPage
}



const router =  async () =>{
    const  {resource,id} = parseRequesUrl();
    const parseUrl = (resource ? `/${resource}`:'/')+
    (id ? `/:id` : '')
    
    const page = routes[parseUrl] ? routes[parseUrl]: Error404Page;
    $('#header').innerHTML = await Header.render();  
$('#main-content').innerHTML = await page.render();
if (page.afterRender) {
    await page.afterRender();   
}
}
window.addEventListener('DOMContentLoaded',router);
window.addEventListener('hashchange',router);