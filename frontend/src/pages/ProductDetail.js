
import { parseRequesUrl } from '../utils.js';
import ProductAPI from '../api/productAPI';
const ProductDetail = {
  async render(){
  const { id }= parseRequesUrl();
const { data: product } = await ProductAPI.get(id);
    return `
    <!-- component -->
<style>@import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);</style>
<div class="min-w-screen bg-yellow-300 flex items-center p-5 lg:p-10 overflow-hidden relative">
    <div class="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
        <div class="md:flex items-center -mx-10">
            <div class="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                <div class="contttt">
                    <img src="${product.image}" alt="">
                    <div class="border-4 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                </div>
            </div>
            <div class="w-full md:w-1/2 px-10">
                <div class="mb-10">
                    <h1 class="font-bold uppercase text-6xl mb-9">
                    <h4 class="bntsdasdas">${product.name}</h4></h1>
                    <p class="text-sm"><h5 class="chit">${product.chitiet}</h5> <a href="#" class="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900">MORE <i class="mdi mdi-arrow-right"></i></a></p>
                </div>
                <div>
                    <div class="inline-block align-bottom mr-5">
                        <span class="text-2xl leading-none align-baseline">
                        <h3  class="tien">${product.price}.VND</h3></span>
                    </div>
                  
                </div>
            </div>
        </div>
    </div>
</div>


    `
}

}
export default ProductDetail;