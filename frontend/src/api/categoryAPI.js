import {axiosClient} from './axiosClient';

const CategoryAPI = {
    getALL(){
        const url =`/categories`;
        return axiosClient.get(url);
    },
    get(id){
        const url = `/categories/${id}`;
        return axiosClient.get(url);
    },
    add(){
     
    },
    remove(id){

    },
    update(id){
        
    }

}
export default CategoryAPI;