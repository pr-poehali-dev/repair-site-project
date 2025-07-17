import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      icon: "Wrench",
      title: "Ремонт стиральных машин",
      description: "Быстрая диагностика и ремонт всех типов стиральных машин",
      price: "от 1500 ₽",
      features: ["Диагностика", "Замена деталей", "Гарантия 6 месяцев"]
    },
    {
      icon: "Snowflake",
      title: "Ремонт холодильников",
      description: "Профессиональное обслуживание холодильного оборудования",
      price: "от 1800 ₽",
      features: ["Заправка хладагента", "Замена компрессора", "Гарантия 1 год"]
    },
    {
      icon: "Zap",
      title: "Экстренный вызов",
      description: "Круглосуточная служба экстренного ремонта",
      price: "от 2500 ₽",
      features: ["Выезд в течение часа", "Диагностика на месте", "Срочный ремонт"]
    }
  ];

  const gallery = [
    {
      image: "/img/d3e00911-4bb0-4d03-8417-7f2acdac9832.jpg",
      title: "Профессиональная диагностика"
    },
    {
      image: "/img/33e85af8-a76b-49d5-add7-23c912d5d2c6.jpg",
      title: "До и после ремонта"
    },
    {
      image: "/img/1e853d55-f78c-46f3-9ae2-500bdaa129b2.jpg",
      title: "Наши специалисты"
    }
  ];

  const reviews = [
    {
      name: "Анна Петрова",
      rating: 5,
      text: "Отличный сервис! Мастер приехал быстро, починил стиральную машину за час. Очень доволен работой!",
      date: "15 июля 2024"
    },
    {
      name: "Михаил Сидоров",
      rating: 5,
      text: "Профессионально отремонтировали холодильник. Гарантия год - это говорит о качестве!",
      date: "10 июля 2024"
    },
    {
      name: "Елена Козлова",
      rating: 5,
      text: "Срочно нужен был ремонт. Мастер приехал в тот же день, все починил. Рекомендую!",
      date: "8 июля 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Wrench" className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-heading font-bold text-foreground">РемонтТех</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#gallery" className="text-foreground hover:text-primary transition-colors">Работы</a>
              <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-secondary hover:bg-secondary/90 text-white font-medium">
              <Icon name="Phone" className="h-4 w-4 mr-2" />
              Экстренный вызов
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-success/10 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-secondary text-white px-4 py-2">
                  <Icon name="Zap" className="h-4 w-4 mr-2" />
                  Экстренный ремонт 24/7
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
                  Ремонт <span className="text-primary">стиральных машин</span> и <span className="text-success">холодильников</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Профессиональный ремонт на дому с гарантией до 1 года. Экстренный вызов мастера в течение часа.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                  <Icon name="Phone" className="h-5 w-5 mr-2" />
                  Вызвать мастера
                </Button>
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                  <Icon name="Calculator" className="h-5 w-5 mr-2" />
                  Рассчитать стоимость
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-primary">1500+</div>
                  <div className="text-sm text-muted-foreground">Выполненных ремонтов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-success">99%</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-secondary">24/7</div>
                  <div className="text-sm text-muted-foreground">Экстренный вызов</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/img/d3e00911-4bb0-4d03-8417-7f2acdac9832.jpg" 
                  alt="Профессиональный ремонт техники" 
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-success/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Комплексный ремонт бытовой техники с гарантией качества и быстрым выездом на дом
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon as any} className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-heading font-semibold">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-heading font-bold text-primary">{service.price}</div>
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-muted-foreground">
                        <Icon name="Check" className="h-4 w-4 text-success mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                    Заказать услугу
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-4">Наши работы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Примеры качественного ремонта бытовой техники наших мастеров
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gallery.map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-xl font-heading font-semibold mb-2">{item.title}</h3>
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                      <Icon name="Eye" className="h-4 w-4 mr-2" />
                      Посмотреть
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мнения наших довольных клиентов о качестве нашей работы
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-0">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg font-heading font-semibold">{review.name}</CardTitle>
                      <CardDescription className="text-sm text-muted-foreground">{review.date}</CardDescription>
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-primary/10 via-background to-success/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-8">Нужен ремонт техники?</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Оставьте заявку и наш мастер свяжется с вами в течение 5 минут
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Icon name="Phone" className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="font-heading font-semibold">Телефон</div>
                    <div className="text-muted-foreground">+7 (999) 123-45-67</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-success/10 rounded-full">
                    <Icon name="Clock" className="h-6 w-6 text-success" />
                  </div>
                  <div className="text-left">
                    <div className="font-heading font-semibold">Режим работы</div>
                    <div className="text-muted-foreground">Круглосуточно, без выходных</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-secondary/10 rounded-full">
                    <Icon name="MapPin" className="h-6 w-6 text-secondary" />
                  </div>
                  <div className="text-left">
                    <div className="font-heading font-semibold">Зона обслуживания</div>
                    <div className="text-muted-foreground">Москва и Московская область</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <Button size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-white">
                  <Icon name="Phone" className="h-5 w-5 mr-2" />
                  Экстренный вызов
                </Button>
                <Button variant="outline" size="lg" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                  <Icon name="MessageSquare" className="h-5 w-5 mr-2" />
                  Написать в WhatsApp
                </Button>
                <Button variant="outline" size="lg" className="w-full border-success text-success hover:bg-success hover:text-white">
                  <Icon name="Send" className="h-5 w-5 mr-2" />
                  Оставить заявку
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Wrench" className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-heading font-bold">РемонтТех</h3>
              </div>
              <p className="text-background/70 mb-4">
                Профессиональный ремонт бытовой техники с гарантией качества
              </p>
              <div className="flex space-x-4">
                <Icon name="Phone" className="h-5 w-5 text-primary" />
                <Icon name="Mail" className="h-5 w-5 text-primary" />
                <Icon name="MapPin" className="h-5 w-5 text-primary" />
              </div>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-background/70">
                <li>Ремонт стиральных машин</li>
                <li>Ремонт холодильников</li>
                <li>Экстренный вызов</li>
                <li>Диагностика техники</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Преимущества</h4>
              <ul className="space-y-2 text-background/70">
                <li>Гарантия до 1 года</li>
                <li>Ремонт на дому</li>
                <li>Работаем 24/7</li>
                <li>Оригинальные запчасти</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-background/70">
                <li>+7 (999) 123-45-67</li>
                <li>info@remonttech.ru</li>
                <li>Москва, ул. Примерная, 1</li>
                <li>Работаем круглосуточно</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/70">
            <p>&copy; 2024 РемонтТех. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;