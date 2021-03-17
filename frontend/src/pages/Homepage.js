import ProductAPI from '../api/ProductAPI';
const HomePage = {
    async render() {
        const { data: products } = await ProductAPI.getALL();
        const result = products.map(product => {
            return /*html*/`
            
            <div class="col-md-4 product-grid ">
            
            <div class="card " >
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
             <div class="card-body text-center">
               <h5 class="card-title">${product.name}</h5>
               <p class="card-text">${product.price}.VND</p>
               <a href="/#/products/${product.id}" class="btn btn-primary">Chi tiet san pham</a>
         </div>
       </div>
  </div>
  
    `
}).join("")
console.log(result);


return /*html*/ `

  
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
<div class="carousel-inner">
  <div class="carousel-item active">
    <img src="https://nabonmission.org/wp-content/uploads/2020/08/1200X335-bANNER-jones-8-2020.jpg" class="d-block w-100" alt="...">
  </div>
  <div class="carousel-item">
    <img src="https://media.mysport.lv/wysiwyg/Brendu_kategoriju_content_LV/adidas-baneris.jpg" class="d-block w-100" alt="...">
  </div>
</div>
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Next</span>
</button>
</div>
<h1 class="textt1">Bài viết giới thiệu</h1>
<!-- component -->
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]>      <html class="no-js"> <!--<![endif]-->
<html>

  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title></title>
    <meta name="description" content="" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="" />
    <!--CDN's link to Tailwindcss version 2-->
    <link
      href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
      rel="stylesheet"
    />
  </head>
  <body class="antialiased md:bg-gray-100">
    <!--Parent div-->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
      <!--First card-->
      <div class="md:p-8 p-2 bg-white">
        <!--Banner image-->
        <img
          class="rounded-lg w-full"
          src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/horizontal-concepts-SS21-WomenInPowerJordan-sustain-glp-w-teaserlarge-d_tcm337-604354.jpg
          "
        />

        <!--Tag-->
        <p class="text-indigo-500 font-semibold text-base mt-2">Science</p>
        <!--Title-->
        <h1
          class="font-semibold text-gray-900 leading-none text-xl mt-1 capitalize truncate"
        >
          the life of albert einstein
        </h1>
        <!--Description-->
        <div class="max-w-full">
          <p class="text-base font-medium tracking-wide text-gray-600 mt-1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            vel soluta dolore id nesciunt eum nam ipsam, eveniet cupiditate sint
            veritatis harum odit. Iste dignissimos, ad provident nulla
            voluptatum ut.
          </p>
        </div>
        <div class="flex items-center space-x-2 mt-20">
          <!--Author's profile photo-->
          <img
            class="w-10 h-10 object-cover object-center rounded-full"
            src="https://randomuser.me/api/portraits/men/54.jpg"
            alt="random user"
          />
          <div>
            <!--Author name-->
            <p class="text-gray-900 font-semibold">Lugano Shabani</p>
            <p class="text-gray-500 font-semibold text-sm">
              Feb 24,2021 &middot; 6 min read
            </p>
          </div>
        </div>
      </div>
      <!--End of first card-->

      <!--Second Tag-->
      <div class="p-8 bg-white">
        <!--Banner image-->
        <img
          class="rounded-lg w-full"
          src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/zx-onsite-feb-hp-mh-d_tcm337-633123.jpg
          "
        />
        <!--Tag-->
        <p class="text-indigo-500 font-semibold text-base mt-2">
          Startup stories
        </p>
        <!--Title-->
        <h1
          class="font-semibold text-gray-900 leading-none text-xl mt-1 capitalize truncate"
        >
          The rise of facebook
        </h1>
        <!--Description-->
        <div class="max-w-full">
          <p class="text-base font-medium tracking-wide text-gray-600 mt-1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil,
            dignissimos repudiandae. Consequuntur minus ipsam repudiandae soluta
            qui, recusandae obcaecati molestias commodi magnam nisi illo illum
            quaerat aut maiores! Esse, aperiam!
          </p>
        </div>
        <div class="flex items-center space-x-2 mt-20">
          <!--Author's profile photo-->
          <img
            class="w-10 h-10 object-cover object-center rounded-full"
            src="https://randomuser.me/api/portraits/men/54.jpg"
            alt="random user"
          />
          <div>
            <!--Author name-->
            <p class="text-gray-900 font-semibold">Bui Minh Hieu</p>
            <p class="text-gray-500 font-semibold text-sm">
              Feb 24,2021 &middot; 6 min read
            </p>
          </div>
        </div>
      </div>
      <!--End of first card-->

      <!--Third  card-->
      <div class="p-8 bg-white">
        <!--Banner image-->
        <img class="h-80 rounded-lg w-full object-cover object-center" src="
        https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/football-ss21-superlative-sustain-glp-w-teaser-large-copa-p0-t_tcm337-625796.jpg"
        " >
        <!--Tag-->
        <p class="text-indigo-500 font-semibold text-base mt-2">Culture</p>
        <!--Title-->
        <h1
          class="font-semibold text-gray-900 leading-none text-xl mt-1 capitalize truncate"
        >
          the life of masaai people from tanzania
        </h1>
        <!--Description-->
        <div class="max-w-full">
          <p class="text-base font-medium tracking-wide text-gray-600 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            officiis aspernatur, modi nobis et neque quod asperiores laboriosam
            ab. Magni fugit necessitatibus ducimus placeat assumenda perferendis
            laborum quae aperiam minus.
          </p>
        </div>
        <div class="flex items-center space-x-2 mt-20">
          <!--Author's profile photo-->
          <img
            class="w-10 h-10 object-cover object-center rounded-full"
            src="https://randomuser.me/api/portraits/men/54.jpg"
            alt="random user"
          />
          <div>
            <!--Author name-->
            <p class="text-gray-900 font-semibold">Bui Minh Hieu</p>
            <p class="text-gray-500 font-semibold text-sm">
              Feb 24,2021 &middot; 6 min read
            </p>
          </div>
        </div>
      </div>
      <!--End of first card-->
    </div>
    <!--End of parent div-->

    <script src="" async defer></script>
  </body>
</html>
<h1 class="textt1">Các Sản Phẩm Mới </h1>
    <div class="row">
    
        ${result}
        
    </div>
    
        `
    },
}
export default HomePage;