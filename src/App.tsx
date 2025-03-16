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
import TagLabelTitle from './components/tag-label-title/tag-label-title-component';
import TitleSection from './components/title-section/title-section-component';

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
        <div className='flex flex-col gap-2'>
          <TagLabelTitle title='Featured' />
          <TitleSection title='New Arrival' />
          <div className='mb-10 flex justify-between flex-wrap gap-4 lg:max-h-[485px]'>
            <SessaoBanner
              className='w-full sm:w-[48%] lg:max-h-[480px] text-white'
              title='PlayStation 5'
              text='Black and White version of the PS5 coming out on sale.'
              imagem={{
                src: '/imagens/sessao-banner/ps5.png',
                alt: 'Imagem playstation 5'
              }}
            />
            <div className='w-full sm:w-[48%] lg:w-1/2 flex flex-col justify-between gap-4'>
              <SessaoBanner
                className='w-full lg:max-h-[230px] text-white'
                title='Women’s Collections'
                text='Featured woman collections that give you another vibe.'
                imagem={{
                  src: '/imagens/sessao-banner/Frame 685.png',
                  alt: 'Imagem mulher de chapéu'
                }}
              />
              <div className='flex justify-between'>
                <SessaoBanner
                  className='w-[48%] lg:max-h-[230px] text-white'
                  title='Speakers'
                  text='Amazon wireless speakers.'
                  imagem={{
                    src: '/imagens/sessao-banner/caixa-de-som-banner.png',
                    alt: 'Imagem caixinhas de som portatil'
                  }}
                  sm
                />
                <SessaoBanner
                  className='w-[48%] lg:max-h-[230px] text-white'
                  title='Perfume'
                  text='GUCCI INTENSE OUD EDP'
                  imagem={{
                    src: '/imagens/sessao-banner/perfume-sessao.png',
                    alt: 'Imagem perfume'
                  }}
                  sm
                />
              </div>
            </div>
          </div>
        </div>

      </div>
      <Rodape />
    </div>
  )
}

export default App;
