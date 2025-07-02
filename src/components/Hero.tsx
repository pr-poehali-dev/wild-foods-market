import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-nature-cream to-nature-beige py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-nature-brown mb-6">
            Только свежие продукты от местных поставщиков
          </h2>
          <p className="text-xl text-nature-brown/80 mb-8">
            Грибы, ягоды и лечебные травы собраны в экологически чистых районах.
            Гарантируем качество и свежесть каждого продукта.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button className="bg-nature-green hover:bg-nature-green/90 text-white px-8 py-3 text-lg">
              <Icon name="ShoppingBag" size={20} className="mr-2" />
              Посмотреть каталог
            </Button>
            <Button
              variant="outline"
              className="border-nature-brown text-nature-brown hover:bg-nature-brown hover:text-white px-8 py-3 text-lg"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Связаться с нами
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/70 rounded-lg p-6 shadow-sm">
              <Icon
                name="Truck"
                size={48}
                className="text-nature-green mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-nature-brown mb-2">
                Быстрая доставка
              </h3>
              <p className="text-nature-brown/70">
                Доставим свежие продукты прямо к вашему дому в течение 24 часов
              </p>
            </div>

            <div className="bg-white/70 rounded-lg p-6 shadow-sm">
              <Icon
                name="Award"
                size={48}
                className="text-nature-green mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-nature-brown mb-2">
                Гарантия качества
              </h3>
              <p className="text-nature-brown/70">
                Каждый продукт проходит тщательную проверку перед отправкой
              </p>
            </div>

            <div className="bg-white/70 rounded-lg p-6 shadow-sm">
              <Icon
                name="Heart"
                size={48}
                className="text-nature-green mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-nature-brown mb-2">
                С заботой о здоровье
              </h3>
              <p className="text-nature-brown/70">
                Натуральные продукты без химических добавок и консервантов
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
