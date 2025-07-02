import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Header() {
  return (
    <header className="bg-nature-cream shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Leaf" className="text-nature-green" size={32} />
            <h1 className="text-2xl font-bold text-nature-brown">
              Лесная Кладовая
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-nature-brown hover:text-nature-green transition-colors"
            >
              Главная
            </a>
            <a
              href="#mushrooms"
              className="text-nature-brown hover:text-nature-green transition-colors"
            >
              Грибы
            </a>
            <a
              href="#berries"
              className="text-nature-brown hover:text-nature-green transition-colors"
            >
              Ягоды
            </a>
            <a
              href="#herbs"
              className="text-nature-brown hover:text-nature-green transition-colors"
            >
              Травы
            </a>
            <a
              href="#delivery"
              className="text-nature-brown hover:text-nature-green transition-colors"
            >
              Доставка
            </a>
            <a
              href="#contacts"
              className="text-nature-brown hover:text-nature-green transition-colors"
            >
              Контакты
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-nature-brown hover:text-nature-green"
            >
              <Icon name="ShoppingCart" size={20} />
              <span className="ml-2">Корзина</span>
            </Button>

            <Button className="md:hidden" variant="ghost" size="sm">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
