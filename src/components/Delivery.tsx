import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Delivery() {
  const deliveryOptions = [
    {
      icon: "Truck",
      title: "Курьерская доставка",
      description: "По Москве и области",
      time: "24 часа",
      price: "от 300₽",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "Package",
      title: "Самовывоз",
      description: "Пункты выдачи в городе",
      time: "через 2-4 часа",
      price: "бесплатно",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "MapPin",
      title: "Почта России",
      description: "Доставка по всей России",
      time: "3-7 дней",
      price: "от 250₽",
      color: "bg-purple-50 border-purple-200",
    },
  ];

  const zones = [
    { zone: "Москва (в пределах МКАД)", price: "300₽", time: "24 часа" },
    {
      zone: "Московская область (до 30 км)",
      price: "450₽",
      time: "24-48 часов",
    },
    { zone: "Московская область (30-50 км)", price: "650₽", time: "2-3 дня" },
    { zone: "Другие регионы России", price: "от 250₽", time: "3-7 дней" },
  ];

  return (
    <section id="delivery" className="py-16 bg-nature-cream/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-nature-brown mb-4">
            Доставка и самовывоз
          </h2>
          <p className="text-xl text-nature-brown/80 max-w-2xl mx-auto">
            Доставляем свежие продукты быстро и бережно. Выберите удобный способ
            получения заказа
          </p>
        </div>

        {/* Способы доставки */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {deliveryOptions.map((option, index) => (
            <Card
              key={index}
              className={`${option.color} hover:shadow-lg transition-shadow`}
            >
              <CardContent className="p-6 text-center">
                <Icon
                  name={option.icon as any}
                  size={48}
                  className="text-nature-green mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-nature-brown mb-2">
                  {option.title}
                </h3>
                <p className="text-nature-brown/80 mb-3">
                  {option.description}
                </p>
                <div className="space-y-1">
                  <div className="text-nature-green font-semibold">
                    {option.time}
                  </div>
                  <div className="text-nature-brown font-medium">
                    {option.price}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Зоны доставки */}
        <Card className="bg-white/80">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-nature-brown mb-6 text-center">
              Зоны доставки и тарифы
            </h3>
            <div className="space-y-4">
              {zones.map((zone, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-4 border-b border-nature-beige/50 last:border-0"
                >
                  <div className="flex items-center space-x-3">
                    <Icon
                      name="MapPin"
                      size={20}
                      className="text-nature-green"
                    />
                    <span className="text-nature-brown font-medium">
                      {zone.zone}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-nature-green font-semibold">
                      {zone.price}
                    </div>
                    <div className="text-nature-brown/70 text-sm">
                      {zone.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Условия доставки */}
        <div className="mt-12 bg-white/60 rounded-lg p-6">
          <h3 className="text-xl font-bold text-nature-brown mb-4 flex items-center">
            <Icon name="Info" size={24} className="text-nature-green mr-2" />
            Условия доставки
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-nature-brown/80">
            <div>• Бесплатная доставка при заказе от 2000₽</div>
            <div>• Доставка только свежих продуктов</div>
            <div>• Возможна оплата при получении</div>
            <div>• Упаковка в экологичные материалы</div>
          </div>
        </div>
      </div>
    </section>
  );
}
