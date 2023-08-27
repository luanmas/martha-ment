import logoHeader from "../../assets/logo-header.svg";
import linkCadastro from "../../assets/cadastre_se.svg";
import carrinhoCompras from "../../assets/carrinho.svg";
import iconMenu from "../../assets/icon-menu.svg";
import iconBusca from "../../assets/icon-busca.svg";


export default function Header () {
    return (
        <header className="flex py-5 px-5 md:px-24 items-center justify-evenly bg-slate-50">
            <button className="mr-10 md:hidden">
                <img src={iconMenu} alt="icone de menu"/>
            </button>
            
            <a href="#" className="w-36 md:w-auto mx-10">
                <img src={logoHeader} alt="logo digital college"/>
            </a>
            
            <div className="md:w-1/3 mx-6 hidden md:block md:h-12 relative">
                <input className="bg-slate-100 pl-2 rounded md:w-full md:h-full outline-none" type="text" placeholder="Pesquisar produto"/>
                <button type="button" className="absolute right-0 top-0 flex justify-center items-center h-12 md:px-4">
                    <img src={iconBusca} alt="icone de busca"/>
                </button>
            </div>
            
            <a href="#" className="hidden md:block mx-5">
                <img src={linkCadastro} alt="link para cadastro" />
            </a>

            <button type="button" className="mx-3 md:hidden">
                <img src={iconBusca} alt="icone de busca" />
            </button>

            <button className="hidden md:block bg-pink-600 text-white py-1 px-8 rounded-lg">
                Entrar
            </button>

            <button type="button">
                <img src={carrinhoCompras} alt="carrinho de compras"/>
            </button>
        </header>
    )
}