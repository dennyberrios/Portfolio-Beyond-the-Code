import Image from "next/image";
import ImgDannyBerrios from '@/assets/img/imgAbout/danny-berrios.jpg';

const AboutMePage = () => {
    return (
        <>
            <section className="flex justify-center items-center flex-col text-center px-5 py-20 lg:w-[1000px] max-lg:w-[800px] max-md:w-[640px] max-sm:w-11/12 gap-3">
                <div className="flex gap-10 max-md:flex-col min-sm:flex max-md:items-center">
                    {ImgDannyBerrios && (
                        <Image
                            src={ImgDannyBerrios}
                            alt="Foto de Danny Berrios"
                            className="lg:w-80 max-lg:w-80 h-96 mt-16 min-sm:order-1 max-sm:order-0 max-md:w-64 max-md:h-72 rounded-md mb-0 shadow-md shadow-slate-500 max-sm:h-40 max-md:mt-0 max-md:rounded-full max-sm:w-40"
                        />
                    )}
                    <div>
                        <h2 className="lg:text-4xl max-lg:text-3xl max-sm:text-2xl font-black text-dark-blue-gray mb-5 mt-0">Olá, eu sou <span className="text-light-indigo">Danny Berrios</span></h2>
                        <p className="text-dark-grey text-justify mb-3 lg:text-xl max-lg:text-lg max-md:text-sm max-sm:text-sm">
                            Meu primeiro contato com o universo dos códigos foi em 2011, quando me aventurei a configurar e modificar um servidor do jogo Lineage 2. Na época, mantive o servidor ativo por cerca de um ano, administrando tudo sozinho, mas, com a queda no número de jogadores, decidi encerrar as atividades e vender o projeto. Esse breve período me despertou uma curiosidade imensa por tecnologia, mas a vida acabou me levando por outros caminhos.
                        </p>

                        <p className="text-dark-grey text-justify lg:text-xl max-lg:text-lg  max-md:text-sm max-sm:text-sm">
                            Quase dez anos depois, em outubro de 2021, eu reencontrei esse mundo de maneira definitiva. A transição começou graças ao meu irmão mais novo, que estava estudando programação com um amigo já experiente na área. Naquele ano, durante a pandemia, eu havia perdido meu emprego e estava enfrentando um período incerto, realizando apenas trabalhos esporádicos. Foi então que meu irmão sugeriu que eu migrasse para a área de desenvolvimento, argumentando que, com nossa afinidade por tecnologia, seria uma oportunidade incrível. E ele estava certo.
                        </p>
                    </div>
                </div>
                <p className="text-dark-grey text-justify lg:text-xl max-lg:text-lg max-md:text-sm max-sm:text-sm">
                    Sem computador próprio, contei com a ajuda de amigos que me incentivaram desde o início. Um deles me emprestou um notebook antigo, tão básico que rodava apenas Linux Mint, sem suporte para IDEs modernas. Comecei a aprender programação no Sublime Text, digitando tudo manualmente. Lembro claramente de um dos meus primeiros desafios: um simples erro na tag &lt;/html&gt; que me custou mais de quatro horas para resolver. Essa experiência foi reveladora — percebi que cada detalhe importava e que aprenderia muito errando e corrigindo.
                </p>
                <p className="text-dark-grey text-justify lg:text-xl max-lg:text-lg max-md:text-sm max-sm:text-sm">
                    A partir dali, mergulhei de cabeça. Nos dois primeiros meses, estudei HTML e CSS intensivamente, e, no terceiro mês, comecei a aprender JavaScript. Pouco depois, participei do meu primeiro hackathon. Trabalhando em equipe via Discord, tivemos uma experiência incrível e conseguimos uma bolsa de estudos na Recode PRO. Foi um divisor de águas.
                </p>
                <p className="text-dark-grey text-justify lg:text-xl max-lg:text-lg max-md:text-sm max-sm:text-sm">
                    Na Recode PRO, participei de um curso de 540 horas que simulava um ambiente de trabalho real. Estudamos tecnologias como Java, React.js, C#, SQL, Bootstrap, entre outras. Trabalhando em squads, aprendi sobre metodologias ágeis como Scrum e vivenciei desafios reais de colaboração em equipe. Nosso grupo era tão comprometido que criamos o hábito de fazer reuniões francas no final de cada entrega, onde discutíamos pontos positivos e melhorias, em um verdadeiro &quot;lava-roupa suja&quot; construtivo. Essas experiências me ensinaram a importância da comunicação aberta e a resolver conflitos antes que se tornassem barreiras.
                </p>
                <p className="text-dark-grey text-justify lg:text-xl max-lg:text-lg max-md:text-sm max-sm:text-sm">
                    Depois desse curso, decidi me aprofundar ainda mais. Participei de dois bootcamps pela Alura: um focado em React.js e JavaScript, com duração de seis meses, e outro em Java e Spring Boot. Embora não tenha concluído o segundo, aproveitei essa pausa para trabalhar como freelancer, desenvolvendo o front-end de um e-commerce responsivo. Foi um projeto desafiador, no qual implementei animações dinâmicas acionadas pelo scroll, links com rolagem suave e uma experiência de usuário interativa e fluida.
                </p>
                <p className="text-dark-grey text-justify lg:text-xl max-lg:text-lg max-md:text-sm max-sm:text-sm">
                    Além de continuar estudando por conta própria, passei a participar ativamente de comunidades, ajudando outros desenvolvedores com dicas e soluções. Essa troca de conhecimento culminou na oportunidade de atuar como instrutor voluntário na Devox, onde ensinei JavaScript, HTML, CSS e React para novos desenvolvedores. Foi um momento de crescimento não só técnico, mas também pessoal, ao perceber o impacto que meu aprendizado podia ter na vida de outras pessoas.
                </p>
                <p className="text-dark-grey text-justify lg:text-xl max-lg:text-lg max-md:text-sm max-sm:text-sm">
                    Minha jornada é marcada por desafios, aprendizado constante e pela paixão por criar. Cada passo, desde aquele servidor de Lineage 2 até o trabalho como instrutor, reforçou meu amor por desenvolvimento e minha determinação em continuar evoluindo, sempre buscando transformar ideias em realidade.
                </p>
            </section>
        </>
    );
}

export default AboutMePage;