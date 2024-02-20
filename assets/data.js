export const categories = [
    { 
        nom: "Tous", 
    },
    { 
        nom: "Légumes", 
        image: require('../assets/img/legumes.jpg') 
    },
    { 
        nom: "Fruits", 
        image: require('../assets/img/fruits.jpg') 
    },
    { 
        nom: "Viande", 
        image: require('../assets/img/viande.jpg') 
    },
    { 
        nom: "Poisson", 
        image: require('../assets/img/poisson.jpg') 
    }
]

export const foodItems = {
    "Légumes": [
        {
            nom: "Salade César",
            prix: 9.99,
            description: "Salade verte, poulet grillé, croûtons, parmesan, sauce césar.",
            ingredients: ["salade", "poulet", "croûtons", "parmesan", "sauce césar"],
            image: require('../assets/img/salade_cesar.jpg')
        },
        {
            nom: "Ratatouille Provençale",
            prix: 12.99,
            description: "Mélange de légumes frais mijotés avec des herbes de Provence.",
            ingredients: ["aubergine", "courgette", "poivron", "tomate", "oignon"],
            image: require('../assets/img/ratatouille.jpg')
        },
        {
            nom: "Soupe au Potiron",
            prix: 8.99,
            description: "Soupe crémeuse à base de potiron, carottes, oignons et épices.",
            ingredients: ["potiron", "carottes", "oignons", "épices"],
            image: require('../assets/img/soupe_potiron.jpg')
        },
        {
            nom: "Curry de Légumes",
            prix: 11.99,
            description: "Curry végétarien avec des légumes variés et du lait de coco.",
            ingredients: ["courgette", "poivron", "aubergine", "carotte", "lait de coco"],
            image: require('../assets/img/curry_legumes.jpg')
        }
    ],
    "Fruits": [
        {
            nom: "Salade de Fruits Frais",
            prix: 7.99,
            description: "Assortiment de fruits frais de saison.",
            ingredients: ["fraises", "bananes", "oranges", "pommes", "kiwis"],
            image: require('../assets/img/salade_fruits.jpg')
        },
        {
            nom: "Smoothie Exotique",
            prix: 5.99,
            description: "Mélange de fruits exotiques mixés avec du yaourt.",
            ingredients: ["mangue", "ananas", "noix de coco", "yaourt"],
            image: require('../assets/img/smoothie.jpg')
        },
        {
            nom: "Tarte aux Fruits Rouges",
            prix: 10.99,
            description: "Tarte sucrée garnie de fraises, framboises et myrtilles.",
            ingredients: ["fraises", "framboises", "myrtilles", "pâte feuilletée"],
            image: require('../assets/img/tarte_fruits_rouges.jpg')
        },
        {
            nom: "Banana Split",
            prix: 6.99,
            description: "Dessert glacé avec des bananes, de la crème glacée et de la sauce au chocolat.",
            ingredients: ["bananes", "crème glacée", "chocolat"],
            image: require('../assets/img/banana_split.jpg')
        }
    ],
    "Viande": [
        {
            nom: "Steak de Boeuf Grillé",
            prix: 15.99,
            description: "Steak de boeuf grillé servi avec des pommes de terre sautées et une sauce au poivre.",
            ingredients: ["steak de boeuf", "pommes de terre", "poivre"],
            image: require('../assets/img/steak.jpg')
        },
        {
            nom: "Côtelettes d'Agneau",
            prix: 18.99,
            description: "Côtelettes d'agneau marinées et grillées, accompagnées de légumes de saison.",
            ingredients: ["côtelettes d'agneau", "légumes", "herbes"],
            image: require('../assets/img/cotelettes_agneau.jpg')
        },
        {
            nom: "Burger Classique",
            prix: 13.99,
            description: "Burger juteux garni de fromage, laitue, tomate et sauce spéciale.",
            ingredients: ["steak haché", "pain burger", "fromage", "laitue", "tomate"],
            image: require('../assets/img/burger_classique.jpg')
        },
        {
            nom: "Rôti de Porc",
            prix: 16.99,
            description: "Rôti de porc cuit lentement avec des pommes de terre et des légumes racines.",
            ingredients: ["rôti de porc", "pommes de terre", "légumes racines"],
            image: require('../assets/img/roti_porc.jpg')
        }
    ],
    "Poisson": [
        {
            nom: "Filet de Saumon Grillé",
            prix: 14.99,
            description: "Filet de saumon frais grillé, servi avec du riz basmati et des légumes vapeur.",
            ingredients: ["filet de saumon", "riz basmati", "légumes"],
            image: require('../assets/img/saumon.jpg')
        },
        {
            nom: "Fish and Chips",
            prix: 10.99,
            description: "Poisson pané frit servi avec des frites et de la sauce tartare.",
            ingredients: ["filet de poisson", "frites", "sauce tartare"],
            image: require('../assets/img/fish_chips.jpg')
        },
        {
            nom: "Sushi Assorti",
            prix: 17.99,
            description: "Assortiment de sushis traditionnels japonais avec du poisson cru et du riz vinaigré.",
            ingredients: ["saumon", "thon", "crevette", "riz vinaigré", "algues"],
            image: require('../assets/img/sushi.jpg')
        },
        {
            nom: "Bouillabaisse",
            prix: 22.99,
            description: "Soupe de poissons traditionnelle provençale avec une variété de fruits de mer.",
            ingredients: ["poissons", "crevettes", "moules", "tomates", "fenouil"],
            image: require('../assets/img/bouillabaisse.jpg')
        }
    ]
};
