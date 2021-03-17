
import CategoryAPI from "../api/categoryAPI";
const Header = {
    async render(){

        const { data: categories } = await CategoryAPI.getALL();
     
        //console.log(data);
        return /*html*/`
    
            <div class="logo">
                <img src="https://tse1.mm.bing.net/th?id=OIP.tWlH6hJkmzur3g5p9o8DQwHaE8&pid=Api&rs=1&c=1&qlt=95&w=163&h=109" />
                </div>
                    <div class="col-start-2 col-span-6 my-2">
                        <ul class="inline leading-10 text-center m-2">
                            <li class="list-none px-8 leading-10 inline">
                            <a href="/" class="no-underline text-xl">Home</a>
                            </li>
                            <li class="list-none px-8 leading-10 inline">
                            <a href="/#/products" class="no-underline text-xl">Products</a>
                            </li>
                            <!-- haizzz -->
                            <div class="dropdown inline">
                            <a class="btn dropdown-toggle text-xl -mt-2.5" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                Danh mục
                            </a>
                            <ul class="dropdown-menu">
                              <li><a href="">      
                        ${categories.map(category => {
                return `
                                        <a class="dropdown-item" href="/#/category/${category.id}">${category.name}</a>
                                                        `
              })}</a></li>
                        </ul>
            
                    </div>
                    <!-- met qua -->
                    <li class="list-none px-8 leading-10 inline">
                    <a href="/#/" class="no-underline text-xl">List</a>
                    </li>
                    <li class="list-none px-8 leading-10 inline">
                    <a href="/#/contact" class="no-underline text-xl">Contact</a>
                    </li>
                </ul>
                </div>
                <div class="grid grid-cols-3 gap-2 ">
                <div class="dropdown mt-2">
                    <a class="btn btn-dark dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                        Admin
                    </a>

                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li><a class="dropdown-item" href="/#/listproduct"> List Product</a></li>
                        <li><a class="dropdown-item" href="/#/addproduct">Add product</a></li>
                    </ul>
                    </div>
                </div>
        `
    }
}
export default Header;