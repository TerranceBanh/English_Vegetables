// Have indicators of literal meaning and intended meaning and indicators to differentiate similarities
const answers = {
    food: [
        {ch: '菠菜',  en: 'Spinach', },
        {ch: '胡萝卜',  en: 'Carrot', },
        {ch: '玉米',  en: 'Corn', },
        {ch: '土豆',  en: 'Potato', },
        {ch: '大蒜',  en: 'Garlic', },
        {ch: '西兰花',  en: 'Broccoli', },
        {ch: '黄瓜',  en: 'Cucumber', },
        {ch: '洋葱',  en: 'Onion', },
        {ch: '蘑菇',  en: 'Mushroom', },
        {ch: '菜花',  en: 'Cauliflower', },
        {ch: '芦笋',  en: 'Asparagus', },
        {ch: '卷心菜',  en: 'Cabbage', },
        {ch: '夏南瓜',  en: 'Zucchini', },
        {ch: '橄榄',  en: 'Olive', },
        {ch: '抱子甘蓝',  en: 'Brussels Sprout', },
        {ch: '生菜',  en: 'Lettuce', },
        {ch: '芹菜',  en: 'Celery', },
        {ch: '韭菜',  en: 'Chive', },
        {ch: '甘薯',  en: 'Yam/Sweet Potato', },
        {ch: '羽衣甘蓝',  en: 'Kale', },
        {ch: '甜菜',  en: 'Beet', },
        {ch: '朝鲜蓟',  en: 'Artichoke', },
        {ch: '茄子',  en: 'Eggplant', },
        {ch: '韭葱',  en: 'Leek', },
        {ch: '芝麻菜',  en: 'Arugula', },
        {ch: '秋葵',  en: 'Okra', },
        {ch: '西洋菜',  en: 'Watercress', },
        {ch: '茴香',  en: 'Fennel', },
        {ch: '芋头',  en: 'Taro', },
        {ch: '芜菁',  en: 'Turnip', },
        {ch: '罗勒',  en: 'Basil', },
        {ch: '莳萝',  en: 'Dill', },
        {ch: '番茄',  en: 'Tomato', },
        {ch: '苋菜',  en: 'Amaranth', },
        {ch: '生姜',  en: 'Ginger', },
    ],
}

for (let prop in answers) {
    for (let i = 0, length = answers[prop].length; i < length; i++) {
        answers[prop][i].audio = `
            <button type="button" onclick="document.querySelector(\`[src='./english/${
                (() => answers[prop][i].en.replace(/ /g, '_').replace(/\//g, '|').replace('\'', '').replace('?', '').toLowerCase())()
            }.mp3']\`).play()">
                &#9654;
                <audio preload="none" src="./english/${(() => answers[prop][i].en.replace(/ /g, '_').replace(/\//g, '|').replace('\'', '').replace('?', '').toLowerCase())()}.mp3"></audio>
            </button>
        `
    }
}

// INDICATE MALE AND FEMALE AND FORMAL AND POLITE






