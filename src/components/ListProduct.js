
import DefaultCard from "../components/DefaultCard"
import { useState } from "react";
import { useEffect } from "react";

export default function ListProduct(){
    const button = "Ajouter au panier"
    const [Product, setProduct] = useState([]);
    const url = "https://cabrol.alwaysdata.net/api/saeProduct"
    function getProducts() {
        const fetchOptions = {
            method: "GET"
        };
        fetch(url, fetchOptions)
            .then((response) => {
                return response.json();
            })
            .then((dataJSON) => {
                setProduct(dataJSON);
            })
            .catch((error) => console.log(error));
    }
    useEffect(() => {
        getProducts()
    }, [])
    return(
        Product.map(item =>
            <div className="eventCard"><DefaultCard title={item.nameProduct} description={item.price+" € TTC"} description2={item.descriptionProduct} img={item.imageProduct} button = {button} /></div>)
    )




}