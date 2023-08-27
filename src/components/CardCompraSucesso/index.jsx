import ButtonImprimir from "./ButtonImprimir";
import ButtonVoltarHome from "./ButtonVoltarHome";
import Header from "./Header";
import InformacoesEntrega from "./InformacoesEntrega";
import InformacoesPagamento from "./InformacoesPagamentos";
import InformacoesPessoais from "./InformacoesPessoais";
import Line from "./Line";
import ResumoCompra from "./ResumoCompra";
import TotalCompra from "./TotalCompra";

export default function CardCompraSuceesso () {
    return (
        <>
            <section className="rounded flex flex-col justify-center px-10 py-6 my-6 bg-slate-50 w-[768px] mx-auto">
                <Header />
                <Line />
                <InformacoesPessoais />
                <Line />
                <InformacoesEntrega />
                <Line />
                <InformacoesPagamento />
                <Line />
                <ResumoCompra />
                <TotalCompra />
                <ButtonImprimir />
            </section>
            <ButtonVoltarHome />
        </>
    )
}