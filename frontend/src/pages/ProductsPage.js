
import ProductAPI from '../api/productAPI';


const ProductsPage = {
    async render() {
        try {
            const { data: products } = await ProductAPI.getALL();
           
            //const response = await axios('https://5e79b4b817314d00161333da.mockapi.io/products');
            //const products =await response.data;
            const result = products.map(product => {
                return /*html*/ `
              <!-- component -->
              
                 
              
                      <!-- Column -->
                      <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              
                          <!-- Article -->
                          <article class="overflow-hidden rounded-lg shadow-lg">
              
                              <a href="#">
                                  <img alt="Placeholder" class="block h-auto w-full" src="${product.image}">
                              </a>
              
                              <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                                  <h1 class="text-lg">
                                      <a class="no-underline hover:underline text-black" href="#">
                                      ${product.name}
                                      </a>
                                  </h1>
                                  <p class="text-grey-darker text-sm">
                                  ${product.name}
                                  </p>
                              </header>
              
                              <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                                  <a class="flex items-center no-underline hover:underline text-black" href="#">
                                      <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random">
                                      <p class="ml-2 text-sm">
                                      <p class="card-text">${product.price}.VND</p>
                                      </p>
                                  </a>
                                  <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                                      <span class="hidden">${product.id}</span>
                                      <i class="fa fa-heart"></i>
                                  </a>
                              </footer>
              
                          </article>
                          <!-- END Article -->             
                      </div>                   
                `
            }).join("")
            console.log(result);
            
            return /*html*/ `
                <h1 class="textt1">Các Sản Phẩm Mới </h1>
                <div class="row">
                    ${result}
                </div>
            `
        } catch (error) {
           
        }
        // const { products } = data;
    }
}
export default ProductsPage;