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
import SessaoBanner from './components/sessaoBanner/sessao-banner-component';

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

        {/* Seção banner */}
        <div className='mb-10 flex h-[180px] justify-between'>
          <SessaoBanner
            className='w-[48%] text-white'
            title='PlayStation 5'
            text='Black and White version of the PS5 coming out on sale.'
            imagem={{
              src: '/imagens/sessao-banner/ps5.png',
              alt: 'Imagem playstation 5'
            }}
          />
          <div className='w-[48%] flex flex-col justify-between'>
            <SessaoBanner
              className='w-full h-[85px] text-white'
              title='PlayStation 5'
              text='Black and White version of the PS5 coming out on sale.'
              imagem={{
                src: '/imagens/sessao-banner/Frame 685.png',
                alt: 'Imagem playstation 5'
              }}
            />
            <div className='flex justify-between h-[85px]'>
              <SessaoBanner
                className='w-[48%] text-white'
                title='PlayStation 5'
                text='Black and White version of the PS5 coming out on sale.'
                imagem={{
                  src: '/imagens/sessao-banner/Frame 686.png',
                  alt: 'Imagem playstation 5'
                }}
              />
              <SessaoBanner
                className='w-[48%] text-white'
                title='PlayStation 5'
                text='Black and White version of the PS5 coming out on sale.'
                imagem={{
                  src: '/imagens/sessao-banner/Frame 687.png',
                  alt: 'Imagem playstation 5'
                }}
              />
            </div>
          </div>
        </div>

        <div className='mb-10 flex justify-between flex-wrap gap-4'>
          <SessaoBanner
            className='w-[100%] text-white'
            title='PlayStation 5'
            text='Black and White version of the PS5 coming out on sale.'
            imagem={{
              src: '/imagens/sessao-banner/ps5.png',
              alt: 'Imagem playstation 5'
            }}
          />
          <div className='w-full flex flex-col justify-between gap-4'>
            <SessaoBanner
              className='w-full text-white'
              title='PlayStation 5'
              text='Black and White version of the PS5 coming out on sale.'
              imagem={{
                src: '/imagens/sessao-banner/Frame 685.png',
                alt: 'Imagem playstation 5'
              }}
            />
            <div className='flex justify-between'>
              <SessaoBanner
                className='w-[48%] text-white'
                title='PlayStation 5'
                text='Black and White version of the PS5 coming out on sale.'
                imagem={{
                  src: '/imagens/sessao-banner/Frame 686.png',
                  alt: 'Imagem playstation 5'
                }}
              />
              <SessaoBanner
                className='w-[48%] text-white'
                title='PlayStation 5'
                text='Black and White version of the PS5 coming out on sale.'
                imagem={{
                  src: '/imagens/sessao-banner/Frame 687.png',
                  alt: 'Imagem playstation 5'
                }}
              />
            </div>
          </div>
        </div>

      </div>
      <Rodape />
    </div>
  )
}

export default App;
