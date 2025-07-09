import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "AI-Видео",
      subtitle:
        "Создание креативного контента с помощью искусственного интеллекта",
      background: "linear-gradient(135deg, #121212 0%, #2a2a2a 100%)",
    },
    {
      title: "AI-Изображения",
      subtitle: "Генерация уникальных визуальных решений",
      background: "linear-gradient(135deg, #1a1a1a 0%, #333333 100%)",
    },
    {
      title: "AI-Аудио",
      subtitle: "Профессиональная обработка звука с применением ИИ",
      background: "linear-gradient(135deg, #0f0f0f 0%, #292929 100%)",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const portfolioCategories = [
    {
      title: "AI-Видео",
      count: "12 проектов",
      icon: "Video",
      description: "Создание видеоконтента с помощью ИИ",
    },
    {
      title: "AI-Изображения",
      count: "28 работ",
      icon: "Image",
      description: "Генерация уникальных изображений",
    },
    {
      title: "AI-Аудио",
      count: "15 треков",
      icon: "Music",
      description: "Обработка и создание аудио",
    },
    {
      title: "Консультации",
      count: "50+ клиентов",
      icon: "Users",
      description: "Экспертные консультации по ИИ",
    },
  ];

  const services = [
    {
      title: "Создание AI-видео",
      price: "от 50,000₽",
      features: [
        "Концепция и сценарий",
        "Генерация видео",
        "Постобработка",
        "Финальный монтаж",
      ],
    },
    {
      title: "AI-изображения",
      price: "от 15,000₽",
      features: [
        "Техническое задание",
        "Генерация вариантов",
        "Доработка",
        "Коммерческие права",
      ],
    },
    {
      title: "Консультации",
      price: "5,000₽/час",
      features: [
        "Анализ задач",
        "Выбор технологий",
        "Обучение команды",
        "Сопровождение проекта",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-dark-bg text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-dark-bg/90 backdrop-blur-sm border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-playfair font-semibold text-gradient">
            Олег Серегин
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-gold transition-colors">
              Главная
            </a>
            <a href="#portfolio" className="hover:text-gold transition-colors">
              Портфолио
            </a>
            <a href="#about" className="hover:text-gold transition-colors">
              Обо мне
            </a>
            <a href="#services" className="hover:text-gold transition-colors">
              Услуги
            </a>
            <a href="#contacts" className="hover:text-gold transition-colors">
              Контакты
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Slider */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 transition-all duration-1000 ease-in-out"
          style={{ background: slides[currentSlide].background }}
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-playfair font-bold mb-6 text-gradient">
            Олег Серегин
          </h1>
          <p className="text-2xl md:text-3xl font-roboto font-light mb-4 opacity-90">
            AI-специалист
          </p>
          <p className="text-lg md:text-xl font-roboto opacity-70 mb-8 max-w-2xl mx-auto leading-relaxed">
            {slides[currentSlide].subtitle}
          </p>

          <Button className="bg-gold hover:bg-gold/90 text-dark-bg font-medium text-lg px-8 py-4 rounded-none transition-all duration-300 hover:scale-105">
            Смотреть работы
          </Button>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-gold scale-125"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Portfolio Categories */}
      <section id="portfolio" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-playfair font-semibold text-center mb-4 text-gradient">
            Портфолио
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">
            Исследование возможностей искусственного интеллекта
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portfolioCategories.map((category, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gold/20 hover:border-gold/40 transition-all duration-300 hover:scale-105 group cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                      <Icon
                        name={category.icon}
                        size={24}
                        className="text-gold"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-playfair font-semibold mb-2 text-white">
                    {category.title}
                  </h3>
                  <p className="text-gold font-medium mb-3">{category.count}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in">
              <div className="w-full h-96 bg-gray-800 rounded-lg overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/files/36f224b6-645b-4655-ad05-9c28d7ff195c.png"
                  alt="Олег Серегин - AI-специалист"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="animate-fade-in">
              <h2 className="text-4xl font-playfair font-semibold mb-6 text-gradient">
                Обо мне
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Специалист по искусственному интеллекту с 5-летним опытом
                создания инновационного контента. Работаю с ведущими
                технологиями генерации видео, изображений и аудио.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Помогаю брендам и креативным агентствам внедрять AI-решения для
                создания уникального контента, который выделяется на рынке.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-gold font-semibold mb-2">Опыт</h4>
                  <p className="text-gray-400">2+ лет в сфере AI</p>
                </div>
                <div>
                  <h4 className="text-gold font-semibold mb-2">Проектов</h4>
                  <p className="text-gray-400">100+ реализованных</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-playfair font-semibold text-center mb-4 text-gradient">
            Услуги
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">
            Профессиональные решения с применением ИИ
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-gray-900/30 border-gold/20 hover:border-gold/40 transition-all duration-300 hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <h3 className="text-2xl font-playfair font-semibold mb-4 text-white">
                    {service.title}
                  </h3>
                  <div className="text-3xl font-bold text-gold mb-6">
                    {service.price}
                  </div>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <Icon
                          name="Check"
                          size={16}
                          className="text-gold mr-3 flex-shrink-0"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-8 bg-transparent border border-gold text-gold hover:bg-gold hover:text-dark-bg transition-all duration-300">
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-24 px-6 bg-gray-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-playfair font-semibold mb-8 text-gradient">
            Контакты
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[
              { name: "Сайт", icon: "Globe", url: "#" },
              { name: "Телеграм", icon: "MessageCircle", url: "#" },
              { name: "YouTube", icon: "Youtube", url: "#" },
              { name: "RuTube", icon: "Play", url: "#" },
            ].map((contact, index) => (
              <a
                key={index}
                href={contact.url}
                className="group flex flex-col items-center p-6 bg-gray-900/50 rounded-lg hover:bg-gray-900/70 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <Icon name={contact.icon} size={20} className="text-gold" />
                </div>
                <span className="text-white font-medium">{contact.name}</span>
              </a>
            ))}
          </div>

          <p className="text-gray-400 text-lg">
            Готов к сотрудничеству и новым вызовам в мире ИИ
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gold/20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">© 2024 Олег Серегин. AI-специалист</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
