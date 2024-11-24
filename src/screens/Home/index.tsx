'use client'

const HomePage = () => {
    return (
        <>
            <section className="text-center px-5 py-20 lg:w-10/12 max-lg:w-10/12 max-sm:w-11/12">
                <h2 className="lg:text-4xl max-lg:text-3xl max-sm:text-2xl font-black text-deep-indigo mb-5">Bem-vindo ao meu portfólio!</h2>
                <p className="text-dark-grey lg:text-xl max-lg:text-lg max-sm:text-base">
                    Olá! Sou um desenvolvedor front-end apaixonado por criar experiências digitais imersivas e de fácil navegação. Ao longo da minha jornada, venho transformando ideias em interfaces modernas, acessíveis e funcionais, sempre com o objetivo de entregar soluções que encantam e engajam os usuários.
                </p>
                <p className="text-dark-grey lg:text-xl max-lg:text-lg max-sm:text-base">
                    Explore meus projetos, descubra como utilizo tecnologias inovadoras para resolver desafios e conheça minha trajetória no desenvolvimento de aplicações que unem design, performance e usabilidade.
                </p>
            </section>
            <section className="bg-dodger-blue w-full text-center">
                <h2 className="lg:text-4xl max-lg:text-4xl max-sm:text-2xl font-black text-white mb-5 py-2">Meus Projetos</h2>
            </section>
        </>
    );
}

export default HomePage;