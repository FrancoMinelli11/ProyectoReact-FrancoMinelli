import ItemlistContainer from "../components/ItemListContainer/ItemListContainer"
const Hombres = () => {
    const HombresP = [
        {
            "nombre":"Buzo Beyond",
            "foto": "src/assets/buzo-hombre-1.png",
            "precio": 14000,
            "descripcion":"Buzo ultra épico papus"
        },
        {
            "nombre":"Remera W-Wings",
            "foto": "src/assets/remera-3.png",
            "precio": 14000,
            "descripcion":"Remera suuper top"
        },
        {
            "nombre":"Buzo Freestyle",
            "foto": "src/assets/buzo-hombre-3.png",
            "precio": 14000,
            "descripcion":"Buzinii suuper top"
        },
        {
            "nombre":"Remera Wings",
            "foto": "src/assets/remera-outfit.png",
            "precio": 14000,
            "descripcion":"Remera good"
        }
    ];

    return <ItemlistContainer products={HombresP} />
};

export default Hombres;