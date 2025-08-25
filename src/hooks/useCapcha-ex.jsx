import { useCapcha } from "./use-capcha";
import { useFetch } from "./use-fetch";

export function UseCapchaEx(){

    const code = useCapcha();
    const categories = useFetch('https://fakestoreapi.com/products/categories');

    return(
        <>
            <form>
                <dl>
                    <dt>Verify Code<button className="bi bi-arrow-clockwise"></button> </dt>
                    <dd>{code}</dd>
                </dl>
                <ul>
                    {
                        categories.map(category=>
                            <li key={category}>{category}</li>
                        )
                    }
                </ul>
            </form>
        </>
    )
}