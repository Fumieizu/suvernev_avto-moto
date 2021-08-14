export const HeaderItemMap = [
  {
    text: 'Автомобили',
    route: '/',
  },
  {
    text: 'Контакты',
    route: '/contacts',
  },
  {
    text: 'Услуги',
    route: '/services',
  },
  {
    text: 'Вакансии',
    route: '/vacancy',
  },
];

export const FooterItemMap = [
  {
    text: 'Корпоративным клиентам',
    route: '/corp',
  },
  {
    text: 'Клиентам',
    route: '/customer',
  },
  {
    text: 'Аренда авто',
    route: '/rent',
  },
  {
    text: 'Каршеринг',
    route: '/car-sharing',
  },
  {
    text: 'Как продать авто',
    route: '/sell',
  },
  {
    text: 'Trade-in',
    route: '/trade-in',
  },
  {
    text: 'Test drive',
    route: '/test-drive',
  },
];

export const SpecItemMap = [
  {title: 'Трансмиссия', text: 'Роботизированная'},
  {title: 'Мощность двигателя, л.с.', text: '249'},
  {title: 'Тип двигателя', text: 'Бензиновый'},
  {title: 'Привод', text: 'Полный'},
  {title: 'Объем двигателя, л', text: '2.4'},
  {title: 'Макс. крутящий момент', text: '370/4500'},
  {title: 'Количество цилиндров', text: '4'},
];

export const ReviewsInitialState = [
  {
    id: 1,
    name: 'Борис Иванов',
    advantages: 'мощность, внешний вид',
    disadvantages: 'Слабые тормозные колодки (пришлось заменить)',
    comment: 'Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.',
    rating: 3,
    time: '1 минуту назад',
  },
  {
    id: 2,
    name: 'Марсель Исмагилов',
    advantages: 'Стиль, комфорт, управляемость',
    disadvantages: 'Дорогой ремонт и обслуживание',
    comment: 'Дизайн отличный, управление просто шикарно, ощущения за рулём такой машины особые. Но ремонт очень дорогой. Пару месяцев назад пришлось менять двигатель. По стоимости вышло как новый автомобиль. Так что, если покупать эту машину, надо быть готовым к большим расходам на обслуживание.',
    rating: 3,
    time: '1 минуту назад',
  },
];

export const PromoItemMap = [
  {text: 'бензин'},
  {text: 'механика'},
  {text: '100 л.с.'},
  {text: '1.4 л'},
];

export const TabsItemMap = {
  SPEC: 'Характеристики',
  REVIEWS: 'Отзывы',
  CONTACTS: 'Контакты',
};

export const MenuType = {
  HEADER: 'header',
  FOOTER: 'footer',
};

export const ControlType = {
  NEXT: 'next',
  PREV: 'prev',
};

export const STARS_COUNT = 5;

export const InputName = {
  NAME: 'name',
  ADVANTAGES: 'advantages',
  DISADVANTAGES: 'disadvantages',
  RATING: 'rating',
  COMMENT: 'comment',
};
