
const About = () => {
  return (
  <>
    <section
      id="about"
      className="flex justify-center bg-[#eff0ec] w-full px-6 py-8"
    >
      <div className="flex justify-around items-center max-w-8xl px-6 py-2">
        <div className="flex justify-center items-center gap-4 max-w-7xl" data-aos="fade-up">
          <div className="md:w-1/2 flex flex-col justify-center items-start md:items-center" data-aos="zoom-in" >

          <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJllXarD4VdGz9lALARG2JOkQZqU8z0_qOA&s"
          alt="Foto de perfil"
          className="w-92 h-92 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 mb-6"
          />
      </div>

      <div className="flex-2 flex items-center bg-[#eff0ec]">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl text-left font-serif font-bold text-blue-900 leading-tight">
            Um pouco sobre quem sou e a psicóloga que me tornei
          </h1>

          <p className="text-base text-blue-900 text-left">
            Me chamo Thais, sou psicóloga e escolhi a Psicologia pelo desejo de escutar, acolher e caminhar
            junto com as pessoas em momentos importantes da vida.
          </p>

          <p className="text-base text-blue-900 text-left">
            Desde a graduação, sempre tive curiosidade em aprender além das aulas, participando de diferentes 
            atividades e experiências.
          </p>
        </div>
      </div>
        </div>
      </div>
    </section>

    <section className="flex flex-col justify-center items-center bg-[#eff0ec] w-full px-6 py-8">
      <div className="flex flex-col gap-4 max-w-5xl mb-6" data-aos="fade-up">
        <p className="text-base text-blue-900 text-left">
          Esse interesse me aproximou da Psicologia Econômica, área que ampliou meu olhar sobre o comportamento humano e
          sobre a forma como nos relacionamos com o dinheiro.
        </p>

        <p className="text-base text-blue-900 text-left">
          As demandas que chegam até mim são diversas e únicas. Não falam apenas de dinheiro, mas de emoções, histórias,
          inseguranças e expectativas. Tudo isso faz parte da escuta, sem rótulos, com respeito e sem julgamentos.
        </p>

        <p className="text-base text-blue-900 text-left">
          Acompanho adolescentes e adultos em diferentes momentos da vida, oferecendo um espaço seguro para conversar,
          refletir e cuidar da saúde emocional. Minha atuação é guiada pela ética, pelo compromisso com o sigilo e pelo
          respeito à autonomia de cada pessoa.
        </p>

        <p className="text-base text-blue-900 text-left">
          Acredito em um trabalho próximo, acessível e humano, baseado no diálogo e na construção de vínculo. Buscar
          apoio psicológico é um gesto de cuidado consigo mesmo(a).
        </p>
      </div>

      <div className="flex gap-8 pr-12 pt-4">
        <button className="bg-yellow-400 text-white font-semibold px-6 py-3 rounded-full hover:bg-yellow-500 transition-colors">
          Saiba mais sobre mim
        </button>

        <button className="bg-yellow-400 text-white font-semibold px-6 py-3 rounded-full hover:bg-yellow-500 transition-colors">
          Entre em contato
        </button>
      </div>
    </section>
  </>
  );
};

export default About;
