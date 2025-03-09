import 'swiper/swiper-bundle.css';
import Navbar from "./components/navbar/navbar-component"
import Produtos from "./components/produtos/produtos-component"
import { produtos1 } from "./components/produtos/dados"
import Categorias from "./components/categorias/categorias-component";
import { categorias } from "./components/categorias/dados";
import CarrosselProdutos from './components/carrossel-produtos/carrossel-produtos-component';
import { produtosComDesconto } from './components/carrossel-produtos/dados';

function App() {

  return (
    <div className="py-2 px-3 sm:p-4 md:px-10 xl:px-30 flex justify-between flex-col gap-10" >

      <Navbar />

      {/* Seção de produtos com desconto */}
      <CarrosselProdutos 
        produtos={produtosComDesconto} 
        tagLabel='Today´s'
        titulo='Products on Sale'
      />


      {/* Seção de categorias */}
      <Categorias categorias={categorias} />

      {/* Seção de produtos */}
      <Produtos 
        produtos={produtos1} 
        titulo='Explore Our Products'
        tagLabel='Our Products'
      />
      

    </div>
  )
}

export default App
