import { ServiceBase} from "./service-base";

export class ProductsService extends ServiceBase{
    static getProducts = async () => {
        var productResp = await fetch(this.getUrl('/products'),{
            cache:'no-store'
        });
        // var productResp = await fetch('https://fakestoreapi.com/products');
        var products = await productResp.json();
        return products;
    }

    static getProductById = async (id:number)=>{
        var prodResp = await fetch(this.getUrl('/products/' + id));
        var product = await prodResp.json();
        return product;
    }
}