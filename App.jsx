import { menu,item } from "./menu"
import Product from "./restro"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'


function App() {

  return (
    <div align="center">
    <Product menu={menu} item={item}/>
    </div>
  )
}

export default App
