import 'swiper/swiper-bundle.css';
import Produtos from "./components/produtos/produtos-component"
import { produtos1 } from "./components/produtos/dados"
import Categorias from "./components/categorias/categorias-component";
import { categorias } from "./components/categorias/dados";
import CarrosselProdutos from './components/carrossel-produtos/carrossel-produtos-component';
import { produtosComDesconto } from './components/carrossel-produtos/dados';
import Rodape from './components/rodape/rodape-component';
import NavBarLateral from './components/menu/navbar-lateral/navbar-lateral.component';
import Menu from './components/menu/menu.component';
import CarrosselBanners from './components/carrossel-banners/carrossel-banners-component';
import { banners } from './components/carrossel-banners/dados';

function App() {

  return (
    <div className='relative max-w-[1400px]'>
      <Menu />

      <div className="py-2 px-3 sm:p-4 md:px-10 xl:px-30 flex justify-between flex-col gap-10" >
        <div className='mt-10'></div>

        {/* Navegação lateral */}
        <div className='flex gap-10'>
          <NavBarLateral />
          <CarrosselBanners imagens={banners} />
        </div>

        {/* Seção de produtos com desconto */}
        <div className='-mt-[20px] md:mt-0'>
        <CarrosselProdutos
          produtos={produtosComDesconto}
          tagLabel='Today´s'
          titulo='Products on Sale'
        />
        </div>


        {/* Seção de categorias */}
        <Categorias categorias={categorias} />

        {/* Seção de produtos */}
        <Produtos
          produtos={produtos1}
          titulo='Explore Our Products'
          tagLabel='Our Products'
        />


      </div>
      <Rodape />
    </div>
  )
}

export default App;
