import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ChevronRight, BookOpen, Users, Settings, FileText, Clock, UserCheck, AlertCircle } from 'lucide-react'
import './App.css'

// Import all slide images
import slide01 from './assets/slide-01.png'
import slide02 from './assets/slide-02.png'
import slide03 from './assets/slide-03.png'
import slide04 from './assets/slide-04.png'
import slide05 from './assets/slide-05.png'
import slide06 from './assets/slide-06.png'
import slide07 from './assets/slide-07.png'
import slide08 from './assets/slide-08.png'
import slide09 from './assets/slide-09.png'
import slide10 from './assets/slide-10.png'
import slide11 from './assets/slide-11.png'
import slide12 from './assets/slide-12.png'
import slide13 from './assets/slide-13.png'
import slide14 from './assets/slide-14.png'
import slide15 from './assets/slide-15.png'
import slide16 from './assets/slide-16.png'
import slide17 from './assets/slide-17.png'
import slide18 from './assets/slide-18.png'
import slide19 from './assets/slide-19.png'
import slide20 from './assets/slide-20.png'
import slide21 from './assets/slide-21.png'
import slide22 from './assets/slide-22.png'
import slide23 from './assets/slide-23.png'
import slide24 from './assets/slide-24.png'
import slide25 from './assets/slide-25.png'
import slide26 from './assets/slide-26.png'
import slide27 from './assets/slide-27.png'
import slide28 from './assets/slide-28.png'
import slide29 from './assets/slide-29.png'
import slide30 from './assets/slide-30.png'
import slide31 from './assets/slide-31.png'
import slide32 from './assets/slide-32.png'
import slide33 from './assets/slide-33.png'
import slide34 from './assets/slide-34.png'
import slide35 from './assets/slide-35.png'
import slide36 from './assets/slide-36.png'
import slide37 from './assets/slide-37.png'
import slide38 from './assets/slide-38.png'
import slide39 from './assets/slide-39.png'
import slide40 from './assets/slide-40.png'
import slide41 from './assets/slide-41.png'
import slide42 from './assets/slide-42.png'

function App() {
  const [selectedSection, setSelectedSection] = useState(null)

  const groupedSections = [
    {
      id: 'introducao',
      title: 'Introdução e Papéis',
      description: 'Papéis e responsabilidades relacionados à Sala do Futuro',
      icon: Users,
      color: 'bg-blue-500',
      slides: [
        { title: 'Slide 1', image: slide01 },
        { title: 'Slide 2', image: slide02 },
        { title: 'Slide 3', image: slide03 },
        { title: 'Slide 4', image: slide04 },
      ]
    },
    {
      id: 'sala-futuro',
      title: 'Sala do Futuro',
      description: 'Conceitos, objetivos e funcionalidades da Sala do Futuro',
      icon: BookOpen,
      color: 'bg-green-500',
      slides: [
        { title: 'Slide 5', image: slide05 },
        { title: 'Slide 6', image: slide06 },
        { title: 'Slide 7', image: slide07 },
        { title: 'Slide 8', image: slide08 },
        { title: 'Slide 9', image: slide09 },
        { title: 'Slide 10', image: slide10 },
        { title: 'Slide 11', image: slide11 },
      ]
    },
    {
      id: 'diario-classe',
      title: 'Diário de Classe',
      description: 'Sistema de registro pedagógico e suas funcionalidades',
      icon: FileText,
      color: 'bg-purple-500',
      slides: [
        { title: 'Slide 12', image: slide12 },
        { title: 'Slide 13', image: slide13 },
        { title: 'Slide 14', image: slide14 },
        { title: 'Slide 15', image: slide15 },
      ]
    },
    {
      id: 'cadastros',
      title: 'Cadastros e Configurações',
      description: 'Horários, grades e configurações do sistema',
      icon: Settings,
      color: 'bg-orange-500',
      slides: [
        { title: 'Slide 16', image: slide16 },
        { title: 'Slide 17', image: slide17 },
        { title: 'Slide 18', image: slide18 },
      ]
    },
    {
      id: 'registros',
      title: 'Registros e Lançamentos',
      description: 'Frequência, aulas, avaliações e fechamentos',
      icon: Clock,
      color: 'bg-red-500',
      slides: [
        { title: 'Slide 19', image: slide19 },
        { title: 'Slide 20', image: slide20 },
        { title: 'Slide 21', image: slide21 },
        { title: 'Slide 22', image: slide22 },
        { title: 'Slide 23', image: slide23 },
        { title: 'Slide 24', image: slide24 },
        { title: 'Slide 25', image: slide25 },
      ]
    },
    {
      id: 'grade-horaria',
      title: 'Alteração de Grade Horária',
      description: 'Regras e vigência das alterações na grade horária',
      icon: AlertCircle,
      color: 'bg-yellow-500',
      slides: [
        { title: 'Slide 26', image: slide26 },
        { title: 'Slide 27', image: slide27 },
        { title: 'Slide 28', image: slide28 },
        { title: 'Slide 29', image: slide29 },
        { title: 'Slide 30', image: slide30 },
      ]
    },
    {
      id: 'professor-eventual',
      title: 'Professor Eventual',
      description: 'Sistema Professor Presente e substituições',
      icon: UserCheck,
      color: 'bg-indigo-500',
      slides: [
        { title: 'Slide 31', image: slide31 },
        { title: 'Slide 32', image: slide32 },
        { title: 'Slide 33', image: slide33 },
        { title: 'Slide 34', image: slide34 },
        { title: 'Slide 35', image: slide35 },
        { title: 'Slide 36', image: slide36 },
        { title: 'Slide 37', image: slide37 },
      ]
    },
    {
      id: 'responsabilidades',
      title: 'Responsabilidades SEDUC',
      description: 'O que é responsabilidade da Sala do Futuro',
      icon: Settings,
      color: 'bg-teal-500',
      slides: [
        { title: 'Slide 38', image: slide38 },
        { title: 'Slide 39', image: slide39 },
        { title: 'Slide 40', image: slide40 },
        { title: 'Slide 41', image: slide41 },
      ]
    },
    {
      id: 'final',
      title: 'Final',
      description: 'Resumo e agradecimentos',
      icon: Settings,
      color: 'bg-gray-500',
      slides: [
        { title: 'Slide 42', image: slide42 },
      ]
    },
  ]

  const openSlides = (section) => {
    setSelectedSection(section)
  }

  const closeSlides = () => {
    setSelectedSection(null)
  }

  if (selectedSection) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 flex items-center justify-between">
            <Button 
              onClick={closeSlides}
              variant="outline"
              className="flex items-center gap-2"
            >
              ← Voltar às Seções
            </Button>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              {selectedSection.title}
            </Badge>
          </div>
          
          <div className="space-y-6">
            {selectedSection.slides.map((slide, index) => (
              <Card key={index} className="shadow-lg">
                <CardHeader className={`${selectedSection.color} text-white rounded-t-lg`}>
                  <CardTitle className="text-xl">{slide.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <img src={slide.image} alt={`Slide ${index + 1}`} className="w-full h-auto" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-2">
            Capacitação Técnica - PEC, NVE e Supervisor SPDE
          </h1>
          <p className="text-xl text-gray-600 text-center">
            PEC Tecnologia Davi, Supervisora Marli e Supervisora Daihy
          </p>
          <div className="mt-4 text-center">
            <Badge variant="outline" className="text-lg px-4 py-2">
              Diretoria de Ensino de Sertãozinho
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Seções da Apresentação
          </h2>
          <p className="text-lg text-gray-600">
            Clique em uma seção para visualizar os slides correspondentes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groupedSections.map((section) => {
            const IconComponent = section.icon
            return (
              <Card 
                key={section.id} 
                className="hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
                onClick={() => openSlides(section)}
              >
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 ${section.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">{section.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {section.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge variant="secondary" className="mb-4">
                    {section.slides.length} slide{section.slides.length > 1 ? 's' : ''}
                  </Badge>
                  <Button className="w-full flex items-center justify-center gap-2">
                    Ver Slides
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Resumo Detalhado</h3>
            <p className="text-gray-600 mb-4">
              Para mais informações detalhadas, acesse:
            </p>
            <a 
              href="https://saladofuturo-pontosfocais.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-semibold text-lg"
            >
              https://saladofuturo-pontosfocais.vercel.app
            </a>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-2xl font-bold text-gray-800">Gratidão!</p>
              <p className="text-gray-600 mt-2">Diretoria de Ensino de Sertãozinho/SP</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App


