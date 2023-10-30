import { ItemListContainer } from "../ItemListContainer/ItemListContainer"
import { NavBar } from "../NavBar/NavBar"

export const Home = () => {
    return (
        <div>
        <NavBar />
        <ItemListContainer greeting="Wellcome to React" />
        
        </div>
    )
}