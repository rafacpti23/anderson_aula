import { MadeWithDyad } from "@/components/made-with-dyad";
import { Button } from "@/components/ui/button";
import FloatingLogos from "@/components/FloatingLogos";
import ServiceCard from "@/components/ServiceCard";
import { Brain, Code, Server, Mail, User } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-brazil-white text-gray-800 relative overflow-hidden">
      <FloatingLogos />

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 py-16 bg-gradient-to-br from-brazil-green to-brazil-blue text-brazil-white">
        <div className="z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            Anderson Drege: Inovação em TI e Inteligência Artificial
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Transformando dados em soluções inteligentes e eficientes para o seu negócio.
          </p>
          <Button className="bg-brazil-yellow text-brazil-blue hover:bg-yellow-400 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            Conheça Meus Projetos
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-brazil-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-brazil-green">Sobre Anderson Drege</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 flex justify-center">
              <div className="w-48 h-48 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-6xl overflow-hidden shadow-lg">
                <User size={96} /> {/* Placeholder for a profile picture */}
              </div>
            </div>
            <div className="md:w-2/3 text-lg text-gray-700 text-left">
              <p className="mb-4">
                Com vasta experiência como Analista de TI, Anderson Drege é um profissional dedicado à otimização de sistemas e infraestruturas. Sua paixão por tecnologia o levou a aprofundar-se no campo da Inteligência Artificial, onde desenvolve soluções inovadoras que impulsionam a eficiência e a tomada de decisões estratégicas.
              </p>
              <p>
                Anderson combina um sólido conhecimento técnico com uma visão estratégica, buscando sempre as melhores práticas e as tecnologias mais recentes para entregar resultados de alto impacto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-brazil-green text-brazil-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-brazil-yellow">Minhas Especialidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={Server}
              title="Análise e Infraestrutura de TI"
              description="Otimização de sistemas, segurança de redes e gestão de infraestrutura para garantir a estabilidade e performance do seu ambiente."
            />
            <ServiceCard
              icon={Brain}
              title="Desenvolvimento em Inteligência Artificial"
              description="Criação de modelos de IA personalizados para automação, análise preditiva e otimização de processos de negócio."
            />
            <ServiceCard
              icon={Code}
              title="Desenvolvimento de Software"
              description="Construção de aplicações robustas e escaláveis, utilizando as melhores práticas de desenvolvimento e tecnologias modernas."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-brazil-blue text-brazil-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-brazil-yellow">Entre em Contato</h2>
          <p className="text-lg mb-8">
            Interessado em colaborar ou saber mais sobre meus serviços? Ficarei feliz em conversar!
          </p>
          <Button className="bg-brazil-yellow text-brazil-blue hover:bg-yellow-400 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            <Mail className="mr-2 h-5 w-5" /> Enviar Mensagem
          </Button>
          <p className="mt-8 text-sm opacity-80">
            Ou conecte-se comigo no LinkedIn.
          </p>
        </div>
      </section>

      <MadeWithDyad />
    </div>
  );
};

export default Index;