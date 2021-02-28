const services = [
    {
        id: '53aee463-cfa2-47e1-ba9f-3020c2eeeda2',
        title: 'Перманентный макияж',
        main: [
            {
                id: '5596bca9-0d85-4bab-aca6-019673c7d260',
                title: 'Брови',
                price: '12 000 ₽'  
            },
            {
                id: '22adc15a-4373-4a04-bd7f-6002aeb68e67',
                title: 'Межресничное пространство lore',
                price: '10 000 ₽'
            },
            {
                id: '02109d65-503c-407a-b3f3-d101b554be03',
                title: 'Стрелки',
                price: '10 000 ₽'
            },
            {
                id: 'aede212d-6221-4b0d-b428-0f0daac19b96',
                title: 'Губы',
                price: '12 000 ₽'
            },
            {
                id: '4f7c684a-b849-4e76-bca6-2a0094e51a89',
                title: 'Коррекция ПМ',
                price: '6 000 ₽'
            },
            {
                id: '9653be17-2b14-46b0-a791-0183263bf7aa',
                title: 'Обновление ПМ',
                price: '8 000 ₽'
            },
            {
                id: '4461cb3d-0c9c-4c66-bf21-33fd97bb9c07',
                title: 'Удаление татуажа ремувером',
                price: '5 000 ₽'
            }
        ],
        img: 'make-up'
    },
    {
        id: '19667508-c7b4-4b9f-8eb1-939d65c3d509',
        title: 'Оформление бровей',
        main: [
            {
                id: '94f65443-42a7-477c-ac33-40ecf9b6e279',
                title: 'Архитектура Бровей Ideal brows (моделирование формы бровей, коррекция и окрашивание',
                price: '1 800 ₽'  
            },
            {
                id: '274b023c-b12f-40e7-a241-fb896169ffed',
                title: 'Коррекция бровей Tweeze (пинцетом)',
                price: '790 ₽'
            },
            {
                id: '9cc3e674-bebc-4f09-9be0-7cde8e6fca70',
                title: 'Коррекция бровей Wax (воск премиум класса Lycon)',
                price: '900 ₽'
            },
            {
                id: 'b16bc56f-e35a-4abe-ac59-bd9c6e8440e9',
                title: 'Долговременная укладка бровей',
                price: '2 700 ₽'
            },
            {
                id: '65ef5445-6874-4ffa-8a7a-b4d0946d3d42',
                title: 'Ламинирование бровей',
                price: '3 500 ₽'
            },
            {
                id: 'b71d97bd-7cd6-4491-8a1c-16ae8d7a9f2e',
                title: 'Ламинирование бровей + Botox',
                price: '4 000 ₽'
            },
            {
                id: 'e0ad8345-349e-477e-9296-54fad479109a',
                title: 'Осветление бровей',
                price: '550 ₽'
            },
            {
                id: '05a94ed7-7c4c-41ea-a8f1-6e3ea172bcc3',
                title: 'Мужской уход',
                price: '1 500 ₽'
            }
        ],
        img: 'brows'
    },
    {
        id: '67d4cf6d-1408-4e38-a9d6-ddc991b2b664',
        title: 'Ресницы',
        main: [
            {
                id: '897b4405-bb67-4059-bc81-29a97e2747b3',
                title: 'Окрашивание ресниц краской',
                price: '800 ₽'
            },
            {
                id: 'aec83ceb-5103-41ba-8d25-a616a901f824',
                title: 'Кератиновое ламинирование ресниц',
                price: '3 900 ₽'
            },
            {
                id: '3b2da54d-ac5a-43ce-ba82-0d58e869af90',
                title: 'Кератиновое ламинирование ресниц + Botox',
                price: '4 400 ₽'
            }
        ],
        other: [
            {
                title: 'Наращивание ресниц',
                items: [
                    {
                        id: '6c94507c-0745-4158-a879-f1ce24c82fcd',
                        title: 'Неполный объем / уголки ( 50% объем)',
                        price: '2 200 ₽'
                    },
                    {
                        id: '88662f6a-7248-4cc5-b565-8757563964d0',
                        title: 'Полный объем 1D',
                        price: '3 200 ₽'
                    },
                    {
                        id: 'db4ec078-3b05-47f4-805f-3cf42d45491d',
                        title: 'Полуторный объем 1.5D',
                        price: '3 800 ₽'
                    },
                    {
                        id: '79f0a628-8384-47de-b6fc-61ac9a711bba',
                        title: 'Двойной объем 2D',
                        price: '4 000 ₽'
                    },
                    {
                        id: '49e3109d-0d59-4323-ad61-481dd598cdb4',
                        title: 'Двойной с половиной 2.5D',
                        price: '4 500 ₽'
                    },
                    {
                        id: '709ea3fa-c3a6-4478-b205-712171cb0927',
                        title: 'Тройной объем 3D',
                        price: '5 000 ₽'
                    },
                    {
                        id: '084f4b0b-955e-4be9-8b9c-7d6c56febec4',
                        title: 'Коррекция наращенных ресниц (от стоимости наращивания 60-80%)',
                        price: ''
                    },
                    {
                        id: 'c5f77937-5f0a-4262-ae1c-547c4983121f',
                        title: 'Снятие ресниц с последующим наращиванием',
                        price: '500 ₽'
                    },
                    {
                        id: '57bc08e9-470f-4f86-8a7a-b4458f0c3b1e',
                        title: 'Снятие ресниц без наращивания',
                        price: '800 ₽'
                    }
                ]
            },
            {
                title: 'Дополнение к наращиванию ресниц',
                items: [
                    {
                        id: '381048f9-1164-4dd8-b840-a5844958f159',
                        title: 'Цветные ресницы',
                        price: '500 ₽'
                    },
                    {
                        id: '39a4afd1-54db-48f4-a50c-e77b036d1c4c',
                        title: 'Дизайн ресниц (MIX)',
                        price: 'от 500 ₽ до 2 000 ₽'
                    }
                ]
            }
        ],
        img: 'eyelashes'
    },
    {
        id: 'e02b5a12-5d09-4866-8e2d-039f7e24d87c',
        title: 'Макияж',
        main: [
            {
                id: '0f6d9000-e0e9-4389-8440-97124c6a5597',
                title: 'Легкий макияж Nude Shine',
                price: '1 500 ₽'
            },
            {
                id: '57cbb6e0-8450-4ba8-a29a-e3b48cf56fba',
                title: 'Дневной макияж Perfect day',
                price: '1 990 ₽'
            },
            {
                id: 'e239c520-b751-441f-8d8c-c28f5d7b158a',
                title: 'Вечерний макияж Hot Weekend',
                price: '2 500 ₽'
            },
            {
                id: '7b8a33b9-7c53-4a19-a1d5-d56ca7792e43',
                title: 'Классический Smokey Eyes (в дневном или вечернем исполнении)',
                price: '2 700 ₽'
            },
            {
                id: '70ab1d97-8796-4a78-976f-97d1ee13c8d4',
                title: 'Макияж глаз Mirror of soul',
                price: '1 200 ₽'
            },
            {
                id: 'a58dbf69-b259-448b-b304-6886d9453cfb',
                title: 'Макияж губ / бровей',
                price: '350 ₽'
            },
            {
                id: '62569100-ea8b-4055-a97f-df0675107254',
                title: 'Свадебный макияж Marry Me!',
                price: '3 200 ₽'
            },
            {
                id: '12202a4e-b6f3-4989-967e-f58f0fe0f51d',
                title: 'Лифтинг-макияж New Age',
                price: '2 700 ₽'
            },
            {
                id: 'a9d743ad-5a90-446e-97e4-4e8641b4bb59',
                title: 'Макияж для фотосессии Camera Glam',
                price: '3 000 ₽'
            },
            {
                id: 'c7d57d59-8ec4-4efc-9235-45d1d52fe717',
                title: 'Детский макияж Little Darling',
                price: '1 000 ₽'
            }
        ],
        other: [
            {
                title: 'Дополнение к макияжу',
                items: [
                    {
                        id: '489662a1-e55f-448d-bc64-65c341523174',
                        title: 'Пучковое наращивание',
                        price: '500 ₽'
                    },
                    {
                        id: 'eafd31cf-8c30-4137-8949-bf8e53635554',
                        title: 'Накладные ресницы',
                        price: '600 ₽'
                    },
                    {
                        id: 'a93fc4f8-6535-4397-b368-1893824140e3',
                        title: 'Декоративные стразы',
                        price: '350 ₽'
                    }
                ]
            }
        ],
        img: 'make-up-2'
    },
    {
        id: 'fcb3bc3f-460a-4a86-a938-c192cc422002',
        title: 'Укладки',
        main: [            
            {
                id: '6cc0d0e3-122b-4f3a-8910-e1d291d641e6',
                title: 'Свадебная укладка',
                price: '3 000 ₽'
            },
            {
                id: '5c4ad6e5-5592-4027-9eac-9562812eadeb',
                title: 'Плетение кос',
                price: 'от 700 до 1 500 ₽'
            },
            {
                id: '129477da-f014-4126-970f-a85f3858744d',
                title: 'Плетение кос с канеколоном',
                price: 'от 3 000 ₽'
            },
        ],
        other: [
            {
                title: 'Укладки по типу волос',
                items: [
                    {
                        id: 'c2e28846-01ec-4e96-8d4c-c0300cbcfa0f',
                        title: 'Локоны / волны / гофре для коротких волос',
                        price: '1 600 ₽'
                    },
                    {
                        id: 'e8488f0f-7109-4972-980e-79dd15e49ff7',
                        title: 'Локоны / волны / гофре для средних волос',
                        price: '2 000 ₽'
                    },
                    {
                        id: 'f81a30f3-c285-4a38-9bc8-f1d8e0335bd8',
                        title: 'Локоны / волны / гофре для длинных волос',
                        price: '2 400 ₽'
                    },
                    {
                        id: 'd6cbd0af-3534-4858-b41a-abf71076e984',
                        title: 'Вечерние укладки коротких волос',
                        price: '1 800 ₽'
                    },
                    {
                        id: 'bec89c0b-3bcc-4c70-a2ac-55bde2a9068a',
                        title: 'Вечерние укладки средних волос',
                        price: '2 200 ₽'
                    },
                    {
                        id: '9362384d-2766-43ca-927a-5178f56a0a03',
                        title: 'Вечерние укладки длинных волос',
                        price: '2 600 ₽'
                    },
                    {
                        id: 'e97aeecb-7396-4626-a9a7-99e68b659698',
                        title: 'Выпрямление коротких волос',
                        price: '800 ₽'
                    },
                    {
                        id: '60f5783e-d84f-486e-8ff9-47169fb485a5',
                        title: 'Выпрямление средних волос',
                        price: '1 200 ₽'
                    },
                    {
                        id: 'c87f6d4d-f3c9-4c04-aefc-4d5e31c8e270',
                        title: 'Выпрямление длинных волос',
                        price: '1 600 ₽'
                    },
                ]
            },
            {
                title: 'Дополнение к укладкам',
                items: [
                    {
                        id: '1cc15fae-01bc-456e-a22a-27ece8b1d572',
                        title: 'Прикрепление накладных прядей',
                        price: '500 ₽'
                    },
                    {
                        id: '59abd6d2-fb16-4b31-b0b6-c7d6c2a50b4c',
                        title: 'Начес / прикорневое гофре',
                        price: '300 ₽'
                    },
                    {
                        id: 'af80c336-1cb3-4c9d-b209-ebb0663c501d',
                        title: 'Доплата за экстра длину / густоту',
                        price: '500 ₽'
                    }
                ]
            }
        ],
        img: 'hairstyle'
    },
    {
        id: '5d71a9b6-8cd0-4798-94e9-6b8c6caf72e7',
        title: 'Выезд на дом',
        main: [            
            {
                id: '6b8bf90d-b179-417b-9aef-4b576542916c',
                title: 'Свадебная прическа + Make-Up + репетиция на студии Wedding Set',
                price: '12 000 ₽'
            },
            {
                id: 'f5fa1d8e-964b-4ec8-a5a3-b2e86a92841c',
                title: 'Прическа + Make-Up к празднику Special Day',
                price: '7 000 ₽'
            },
            {
                id: '20ee7678-6e50-49df-981a-856a70fbe9d8',
                title: 'Прическа к празднику Hair in the air',
                price: '4 500 ₽'
            },
        ],
        img: 'hairstyle'
    },
    {
        id: '2ca0fd01-a1f8-474c-b81a-a29f87d82822',
        title: 'Обучение',
        main: [            
            {
                id: '74e4d9a0-aaa0-4036-a929-b17b5160cb65',
                title: 'Индивидуальный урок макияжа ( 1 час со своей косметикой )',
                price: '3 000 ₽'
            },
            {
                id: '0fd8593c-a4e0-428c-be71-9484ec7186df',
                title: 'Индивидуальный урок макияжа (с профессиональной косметикой визажиста)',
                price: '3 500 ₽'
            },
        ],
        img: 'hairstyle'
    }
]

export default services;
