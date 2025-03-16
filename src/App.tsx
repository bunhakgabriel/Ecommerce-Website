import 'swiper/swiper-bundle.css';
import Produtos from "./components/produtos/produtos-component"
import { bestSellingProducts, produtos1 } from "./components/produtos/dados"
import Categorias from "./components/categorias/categorias-component";
import { categorias } from "./components/categorias/dados";
import CarrosselProdutos from './components/carrossel-produtos/carrossel-produtos-component';
import { produtosComDesconto } from './components/carrossel-produtos/dados';
import Rodape from './components/rodape/rodape-component';
import NavBarLateral from './components/menu/navbar-lateral/navbar-lateral.component';
import Menu from './components/menu/menu.component';
import CarrosselBanners from './components/carrossel-banners/carrossel-banners-component';
import { banners } from './components/carrossel-banners/dados';
import ButtonUi from './components/button-ui/button-ui-component';

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
          <div className='flex sm:justify-center'>
            <ButtonUi>
              View All Products
            </ButtonUi>
          </div>
        </div>

        <hr className='text-gray-100' />

        {/* Seção de categorias */}
        <Categorias categorias={categorias} />

        <hr className='text-gray-100' />

        {/* Seção de best sellin produtos */}
        <div>
          <Produtos
            produtos={bestSellingProducts}
            tagLabel='This Month'
            titulo='Best Selling Products'
            button
          />
        </div>

        {/* Banner JBL */}
        <div>
          <img src='/imagens/diversas/banner-jbl.png' />
        </div>

        {/* Seção de produtos */}
        <div>
          <Produtos
            produtos={produtos1}
            titulo='Explore Our Products'
            tagLabel='Our Products'
            button
          />
        </div>

      </div>
      <Rodape />
    </div>
  )
}

export default App;
