import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ProductCategories() {
  const categories = [
    {
      id: "mushrooms",
      title: "Грибы",
      emoji: "🍄",
      description: "Свежие лесные грибы: белые, подберёзовики, лисички, опята",
      items: ["Белые грибы", "Подберёзовики", "Лисички", "Опята", "Маслята"],
      price: "от 350₽/кг",
      color: "bg-orange-50 border-orange-200",
    },
    {
      id: "berries",
      title: "Ягоды",
      emoji: "🫐",
      description: "Сезонные ягоды: черника, брусника, клюква, малина",
      items: ["Черника", "Брусника", "Клюква", "Малина", "Морошка"],
      price: "от 280₽/кг",
      color: "bg-purple-50 border-purple-200",
    },
    {
      id: "herbs",
      title: "Лечебные травы",
      emoji: "🌿",
      description: "Целебные травы и сборы для здоровья и красоты",
      items: ["Иван-чай", "Мята", "Зверобой", "Ромашка", "Шиповник"],
      price: "от 120₽/упак",
      color: "bg-green-50 border-green-200",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-nature-brown mb-4">
            Наши продукты
          </h2>
          <p className="text-xl text-nature-brown/80 max-w-2xl mx-auto">
            Выберите категорию товаров и найдите всё необходимое для здорового
            питания
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card
              key={category.id}
              className={`${category.color} hover:shadow-lg transition-shadow`}
            >
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{category.emoji}</div>
                  <h3 className="text-2xl font-bold text-nature-brown mb-2">
                    {category.title}
                  </h3>
                  <p className="text-nature-brown/80 mb-4">
                    {category.description}
                  </p>
                  <div className="text-lg font-semibold text-nature-green">
                    {category.price}
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {category.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between py-2 border-b border-nature-beige/30"
                    >
                      <span className="text-nature-brown">{item}</span>
                      <span className="text-nature-green font-medium">
                        В наличии
                      </span>
                    </div>
                  ))}
                </div>

                <Button
                  className="w-full bg-nature-green hover:bg-nature-green/90 text-white"
                  size="lg"
                >
                  Смотреть все {category.title.toLowerCase()}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
