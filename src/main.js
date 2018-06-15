// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

require('../style/css/bootstrap.min.css')
require('../style/css/style.scss')
//import style from '../bootstrap4/css/style.module.scss'
//require('../src/assets/style/open-iconic-bootstrap.scss')


import Vue from 'vue'
import comment from './components/comment.vue'
import articletable from './components/article.vue'
import seo from './components/seo.vue'
import preview from './components/preview.vue'
import ourshops from './components/shops.vue'
import DatePicker from 'vue2-datepicker'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import BalloonEditor from '@ckeditor/ckeditor5-build-balloon'
import VueCkeditor from 'vue-ckeditor5'

const options = {
    editors: {
        classic: ClassicEditor,
        balloon: BalloonEditor
    },
    name: 'ckeditor',
    config: {
        language:'ru',
        toolbar: [ 'bold', 'italic', 'bulletedList', 'numberedList', 'blockQuote' ],
        height: 900
    }
}


Vue.use(VueCkeditor.plugin, options)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#section',
    data: {
        status : 1,
        statusName: 'Dashboard',
        filter: 0,
        activeSection: 1,
        createProductBlock: false,
        createShopBlock: false,
        createArticleBlock: false,
        newOption: '',
        newPhone: '',
        newEmail: '',
        newProductStatus: 1,
        newShopStatus: 1,
        newArticleStatus: 1,
        newCommentStatus: 1,
        sectionStatus: { id: 0 },
        pageStatus: 8,
        pagesStatus: 1,
        createStructureBlock: 0,
        createFilterBlock: 0,
        newProduct: {
            id: 0, img: false, price: 0, name: '', shop: '', brand:'', optionsName: 'Материал', options: ['100% шерсть', '50/50 шерсть/синтетика', '100% синтетика', 'Кожа', 'Эко-кожа'], rating: 0, like: 0, published: false, deleted: false,
            colors: [3,4,5], sizes: [1,2,3], activeOptions: [1,2,3], description: '', categoryId: 22,
            sizePrices: [100, 200, 345,,200], colorPrices: [0, 120,222], optionPrices: [0, 220,223],
            images: [
                { id: 0, url: '/assets/img/newProduct/black.jpg', colors: [], sizes: [], options: [], published: true, deleted: false},
                { id: 1, url: '/assets/img/newProduct/balck2.jpg', colors: [], sizes: [], options: [], published: true, deleted: false},
                { id: 2, url: '/assets/img/newProduct/black3.jpg', colors: [], sizes: [], options: [], published: true, deleted: false}
            ], seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}
        },
        productTemplate: {
            id: 0, img: false, price: 0, name: '', shop: '', optionsName: 'Материал', options: ['100% шерсть', '50/50 шерсть/синтетика', '100% синтетика', 'Кожа', 'Эко-кожа'], rating: 0, like: 0, published: false, deleted: false,
            colors: [], sizes: [], activeOptions: [], description: '', categoryId: 22,
            sizePrices: [], colorPrices: [], optionPrices: [],
            images: [
                { id: 0, url: '/assets/img/newProduct/black.jpg', colors: [], sizes: [], options: [], published: true, deleted: false},
                { id: 1, url: '/assets/img/newProduct/balck2.jpg', colors: [1], sizes: [3], options: [1,2], published: true, deleted: false},
                { id: 2, url: '/assets/img/newProduct/black3.jpg', colors: [2], sizes: [2], options: [], published: true, deleted: false},
                { id: 3, url: '/assets/img/newProduct/white1.jpg', colors: [], sizes: [4], options: [], published: true, deleted: false},
                { id: 4, url: '/assets/img/newProduct/white2.jpg', colors: [2,3], sizes: [], options: [3], published: true, deleted: false},
                { id: 5, url: '/assets/img/newProduct/white3.jpg', colors: [], sizes: [2,3], options: [], published: true, deleted: false},
                { id: 6, url: '/assets/img/newProduct/broun1.jpg', colors: [], sizes: [2,4], options: [], published: true, deleted: false},
                { id: 7, url: '/assets/img/newProduct/broun2.jpg', colors: [], sizes: [2,3,4], options: [], published: true, deleted: false},
                { id: 8, url: '/assets/img/newProduct/broun3.jpg', colors: [], sizes: [3,4], options: [], published: true, deleted: false},
            ], seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}
        },
        newShop: {
            id: 0, name: '', description: '', email: '', emails: [], delivery: '', take_back: '',
            instagram: '', phones: [], addresses: [], stock_description: '',
            goods: 222, allow_goods: 250, discounts: 25, allow_discounts: 25, stock: 10, allow_stocks: 15,
            sales: 112, published: false, deleted: false, seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}
        },
        newOurShop: {
            id: 0, published: true, img: '', name: '', description: '', address: ''
        },
        //newOurShopCount: pages[7].shops.length,
        shopTemplate: {
            id: 0, name: '', description: '', email: '', emails: [], delivery: '', take_back: '',
            instagram: '', phones: [], addresses: '', stock_description: '', published: false,
            goods: 222, allow_goods: 250, discounts: 25, allow_discounts: 25, stock: 10, allow_stocks: 15,
            sales: 112, published: false, deleted: false, seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}
        },
        newArticle:{id:0, img: "", published: false, deleted: false, title: "", description: "Здесь краткое описание", content: "Здесь текст статьи", views: 0, like: 0, shares: 0, tags: 0, create_date: '', published_date: '', seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
        articleTemplate:{id:0, img: "", published: false, deleted: false, title: "", description: "Здесь краткое описание", content: "Здесь текст статьи", views: 0, like: 0, shares: 0, tags: 0, create_date: '', published_date: '', seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
        newCategory:{ id: 0, published: false, illustration: '', sectionId: 0, title: '', description: '', deleted: false, seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
        categoryTemplate: {id: 0, published: false, illustration: '', sectionId: 0, title: '', description: '', deleted: false, seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
        newSection: { id: 0, published: false, description:'', title: '', deleted: false, seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
        sectionTemplate: { id: 0, published: false, description:'', title: '', deleted: false, seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
        newColor: { id: 0, name: '', code: '', published: false , deleted: false },
        colorTemplate: { id: 0, name: '', code: '', published: false , deleted: false },
        newSize: { id: 1, name: 'S', description: 'описание/пояснение размера', published: false, deleted: false },
        sizeTemplate: { id: 0, name: '', description: 'описание/пояснение размера', published: false, deleted: false },
        products : [
            { id: 1, img: '/assets/img/goods/1.jpg', price: 600, sizePrices: [100, 200, 345,,200], colorPrices: [0, 120,222], optionPrices: [0, 220,223, 543], name: 'Комплект "ковбой"', description: '', categoryId: 6, brand:'Dolge Gabana', shop: 'Техас и джинсы', optionsName: 'Материал', options: ['100% шерсть', '50/50 шерсть/синтетика', '100% синтетика', 'Кожа', 'Эко-кожа'], rating: 3, like: 223, published: true, colors: [2,3,4], sizes: [1,2,3,4], activeOptions: [0, 2, 3], images: [
                    { id: 0, url: '/assets/img/newProduct/black.jpg', colors: [3], sizes: [1,2,3,4], options: [1], published: true, deleted: false},
                    { id: 1, url: '/assets/img/newProduct/balck2.jpg', colors: [3], sizes: [1,2,3,4], options: [2], published: true, deleted: false},
                    { id: 2, url: '/assets/img/newProduct/black3.jpg', colors: [3], sizes: [1,2,3,4], options: [1], published: true, deleted: false},
                    { id: 3, url: '/assets/img/newProduct/white1.jpg', colors: [6], sizes: [3,4,6], options: [0], published: false, deleted: false},
                    { id: 4, url: '/assets/img/newProduct/white2.jpg', colors: [6], sizes: [3,4,6], options: [3], published: false, deleted: false},
                    { id: 5, url: '/assets/img/newProduct/white3.jpg', colors: [6], sizes: [3,4,6], options: [1], published: true, deleted: false},
                    { id: 6, url: '/assets/img/newProduct/broun1.jpg', colors: [9], sizes: [2,5,6], options: [0], published: true, deleted: false},
                    { id: 7, url: '/assets/img/newProduct/broun2.jpg', colors: [9], sizes: [2,6,5], options: [0], published: true, deleted: false},
                    { id: 8, url: '/assets/img/newProduct/broun3.jpg', colors: [9], sizes: [6,2,5], options: [3], published: false, deleted: false},
                ], deleted: false, seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 21, img: '/assets/img/goods/2.jpg', price: 1200, sizePrices: [100, 200, 345,,200], colorPrices: [0, 70,222], optionPrices: [0, 220,223], name: 'Кофта "плебей"', description: '', categoryId: 22, brand:'Green wave', shop: 'Техас и джинсы', optionsName: 'Пошив', options: ['slimFit', 'Regular', 'Huge'], rating: 3, like: 323, published: true, colors: [5,2,1], sizes: [3,4,6], activeOptions: [2, 0], images: [
                    { id: 0, url: '/assets/img/newProduct/black.jpg', colors: [3], sizes: [1,2,3,4], options: [1], published: true, deleted: false},
                    { id: 1, url: '/assets/img/newProduct/balck2.jpg', colors: [3], sizes: [1,2,3,4], options: [2], published: true, deleted: false},
                    { id: 2, url: '/assets/img/newProduct/black3.jpg', colors: [3], sizes: [1,2,3,4], options: [1], published: true, deleted: false},
                    { id: 3, url: '/assets/img/newProduct/white1.jpg', colors: [6], sizes: [3,4,6], options: [0], published: false, deleted: false},
                    { id: 4, url: '/assets/img/newProduct/white2.jpg', colors: [6], sizes: [3,4,6], options: [3], published: false, deleted: false},
                    { id: 5, url: '/assets/img/newProduct/white3.jpg', colors: [6], sizes: [3,4,6], options: [1], published: true, deleted: false},
                    { id: 6, url: '/assets/img/newProduct/broun1.jpg', colors: [9], sizes: [2,5,6], options: [0], published: true, deleted: false},
                    { id: 7, url: '/assets/img/newProduct/broun2.jpg', colors: [9], sizes: [2,6,5], options: [0], published: true, deleted: false},
                    { id: 8, url: '/assets/img/newProduct/broun3.jpg', colors: [9], sizes: [6,2,5], options: [3], published: false, deleted: false},
                ], deleted: true, seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 32, img: '/assets/img/goods/3.jpg', price: 900, sizePrices: [100, 200, 345,,200], colorPrices: [0, 120,222], optionPrices: [0, 220,223, 234], name: 'Штаны "Мачо"', description: '', categoryId: 5, brand:'Hugo Boss', shop: 'Мачо и Версачо', optionsName: 'Материал', options: ['100% шерсть', '50/50 шерсть/синтетика', '100% синтетика', 'Кожа', 'Эко-кожа'], rating: 4, like: 263, published: false, colors: [3,2], sizes: [3,4,6,5], activeOptions: [1, 2, 3], images: [
                    { id: 0, url: '/assets/img/newProduct/black.jpg', colors: [3], sizes: [1,2,3,4], options: [1], published: true, deleted: false},
                    { id: 1, url: '/assets/img/newProduct/balck2.jpg', colors: [3], sizes: [1,2,3,4], options: [2], published: true, deleted: false},
                    { id: 2, url: '/assets/img/newProduct/black3.jpg', colors: [3], sizes: [1,2,3,4], options: [1], published: true, deleted: false},
                    { id: 3, url: '/assets/img/newProduct/white1.jpg', colors: [6], sizes: [3,4,6], options: [0], published: false, deleted: false},
                    { id: 4, url: '/assets/img/newProduct/white2.jpg', colors: [6], sizes: [3,4,6], options: [3], published: false, deleted: false},
                    { id: 5, url: '/assets/img/newProduct/white3.jpg', colors: [6], sizes: [3,4,6], options: [1], published: true, deleted: false},
                    { id: 6, url: '/assets/img/newProduct/broun1.jpg', colors: [9], sizes: [2,5,6], options: [0], published: true, deleted: false},
                    { id: 7, url: '/assets/img/newProduct/broun2.jpg', colors: [9], sizes: [2,6,5], options: [0], published: true, deleted: false},
                    { id: 8, url: '/assets/img/newProduct/broun3.jpg', colors: [9], sizes: [6,2,5], options: [3], published: false, deleted: false},
                ], deleted: false, seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 43, img: '/assets/img/goods/4.jpg', price: 1900, sizePrices: [100, 345,,200], colorPrices: [0, 120,222], optionPrices: [0, 220,223], name: 'Ремень "Мачо"', description: '', categoryId: 9, brand:'Red type', shop: 'Техас и джинсы', optionsName: 'Пошив', options: ['slimFit', 'Regular', 'Huge'], rating: 2, like: 123, published: false, colors: [9,8,7], sizes: [2,6,5], activeOptions: [1, 2, 0], images: [
                    { id: 0, url: '/assets/img/newProduct/black.jpg', colors: [3], sizes: [1,2,3,4], options: [1], published: true, deleted: false},
                    { id: 1, url: '/assets/img/newProduct/balck2.jpg', colors: [3], sizes: [1,2,3,4], options: [2], published: true, deleted: false},
                    { id: 2, url: '/assets/img/newProduct/black3.jpg', colors: [3], sizes: [1,2,3,4], options: [1], published: true, deleted: false},
                    { id: 3, url: '/assets/img/newProduct/white1.jpg', colors: [6], sizes: [3,4,6], options: [0], published: false, deleted: false},
                    { id: 4, url: '/assets/img/newProduct/white2.jpg', colors: [6], sizes: [3,4,6], options: [3], published: false, deleted: false},
                    { id: 5, url: '/assets/img/newProduct/white3.jpg', colors: [6], sizes: [3,4,6], options: [1], published: true, deleted: false},
                    { id: 6, url: '/assets/img/newProduct/broun1.jpg', colors: [9], sizes: [2,5,6], options: [0], published: true, deleted: false},
                    { id: 7, url: '/assets/img/newProduct/broun2.jpg', colors: [9], sizes: [2,6,5], options: [0], published: true, deleted: false},
                    { id: 8, url: '/assets/img/newProduct/broun3.jpg', colors: [9], sizes: [6,2,5], options: [3], published: false, deleted: false},
                ], deleted: true, seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 55, img: '/assets/img/goods/5.jpg', price: 2200, sizePrices: [100, 200, 345,,200], colorPrices: [0, 120,222, 100], optionPrices: [0, 180,223], name: 'Топанки "Мачо"', description: '', categoryId: 31, brand:'Waykiki', shop: 'Техас и джинсы', optionsName: 'Пошив', options: ['slimFit', 'Regular', 'Huge'], rating: 5, like: 73, published: true, colors: [5,3,4], sizes: [2,6,5], activeOptions: [1, 2], images: [
                    { id: 0, url: '/assets/img/newProduct/black.jpg', colors: [3], sizes: [1,2,3,4], options: [1], published: true, deleted: false},
                    { id: 1, url: '/assets/img/newProduct/balck2.jpg', colors: [3], sizes: [1,2,3,4], options: [2], published: true, deleted: false},
                    { id: 2, url: '/assets/img/newProduct/black3.jpg', colors: [3], sizes: [1,2,3,4], options: [1], published: true, deleted: false},
                    { id: 3, url: '/assets/img/newProduct/white1.jpg', colors: [6], sizes: [3,4,6], options: [0], published: false, deleted: false},
                    { id: 4, url: '/assets/img/newProduct/white2.jpg', colors: [6], sizes: [3,4,6], options: [3], published: false, deleted: false},
                    { id: 5, url: '/assets/img/newProduct/white3.jpg', colors: [6], sizes: [3,4,6], options: [1], published: true, deleted: false},
                    { id: 6, url: '/assets/img/newProduct/broun1.jpg', colors: [9], sizes: [2,5,6], options: [0], published: true, deleted: false},
                    { id: 7, url: '/assets/img/newProduct/broun2.jpg', colors: [9], sizes: [2,6,5], options: [0], published: true, deleted: false},
                    { id: 8, url: '/assets/img/newProduct/broun3.jpg', colors: [9], sizes: [6,2,5], options: [3], published: false, deleted: false},
                ], deleted: true, seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 63, img: '/assets/img/goods/6.jpg', price: 1600, sizePrices: [100, 200, 345,,200], colorPrices: [0, 230,222], optionPrices: [0, 220,223], name: 'Туфли "Ляля"', description: '', categoryId: 33, brand:'Waykiki', shop: 'Ляля и Диля', optionsName: 'Материал', options: ['100% шерсть', '50/50 шерсть/синтетика', '100% синтетика', 'Кожа', 'Эко-кожа'], rating: 3, like: 523, published: false, colors: [2,4,7], sizes: [3,4,6], activeOptions: [0, 1, 2, 3], images: [
                    { id: 0, url: '/assets/img/newProduct/black.jpg', colors: [3], sizes: [1,2,3,4], options: [1], published: true, deleted: false},
                    { id: 1, url: '/assets/img/newProduct/balck2.jpg', colors: [3], sizes: [1,2,3,4], options: [2], published: true, deleted: false},
                    { id: 2, url: '/assets/img/newProduct/black3.jpg', colors: [3], sizes: [1,2,3,4], options: [1], published: true, deleted: false},
                    { id: 3, url: '/assets/img/newProduct/white1.jpg', colors: [6], sizes: [3,4,6], options: [0], published: false, deleted: false},
                    { id: 4, url: '/assets/img/newProduct/white2.jpg', colors: [6], sizes: [3,4,6], options: [3], published: false, deleted: false},
                    { id: 5, url: '/assets/img/newProduct/white3.jpg', colors: [6], sizes: [3,4,6], options: [1], published: true, deleted: false},
                    { id: 6, url: '/assets/img/newProduct/broun1.jpg', colors: [9], sizes: [2,5,6], options: [0], published: true, deleted: false},
                    { id: 7, url: '/assets/img/newProduct/broun2.jpg', colors: [9], sizes: [2,6,5], options: [0], published: true, deleted: false},
                    { id: 8, url: '/assets/img/newProduct/broun3.jpg', colors: [9], sizes: [6,2,5], options: [3], published: false, deleted: false},
                ], deleted: false, seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}}
        ],
        shops : [
            { id: 1, name: 'Техас и понты', goods: 167, allow_goods: 200, discounts: 12, allow_discounts: 25, stock: 10, allow_stocks: 15,
                description: 'Описание нашего магазина содержит краткий но информативный текст, ' +
                'в достаточном обьеме чтобы понять что мы круче и лучше всех, в нашей области!', deleted: false,
                sales: 131, instagram: 'В разработке', phones: ['+7 987 698 21 10', '+7 987 698 32 44'], addresses: '', stock_description: '',
                published: true, email: '', emails: ['fortifelx@gmail.com', 'fortifelx2@gmail.com'], delivery: '', take_back: '', seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 12, name: 'Штаны и кофты', goods: 118, allow_goods: 120, discounts: 22, allow_discounts: 35, stock: 12, allow_stocks: 15,
                description: 'Описание нашего магазина содержит краткий но информативный текст, ' +
                'в достаточном обьеме чтобы понять что мы круче и лучше всех, в нашей области!', deleted: false,
                sales: 232, instagram: 'В разработке', phones: ['+7 987 243 28 96', '+7 987 698 32 44'], addresses: '', stock_description: '',
                published: false, email: '', emails: ['nelia.belorus@gmail.com', 'nelia2.belorus@gmail.com'], delivery: '', take_back: '', seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''} },
            { id: 18, name: 'Понты и джинсы', goods: 43, allow_goods: 100, discounts: 25, allow_discounts: 35, stock: 13, allow_stocks: 15,
                description: 'Описание нашего магазина содержит краткий но информативный текст, ' +
                'в достаточном обьеме чтобы понять что мы круче и лучше всех, в нашей области!', deleted: false,
                sales: 30, instagram: 'В разработке', phones: ['+7 987 698 32 41', '+7 987 698 33 22'], addresses: '', stock_description: '',
                published: true, email: '', emails: ['ktara@gmail.com', 'ktara2@gmail.com'], delivery: '', take_back: '', seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 21, name: 'Ляля и Даля', goods: 156, allow_goods: 500, discounts: 15, allow_discounts: 55, stock: 11, allow_stocks: 25,
                description: 'Описание нашего магазина содержит краткий но информативный текст, ' +
                'в достаточном обьеме чтобы понять что мы круче и лучше всех, в нашей области!', deleted: false,
                sales: 73, instagram: 'В разработке', phones: ['+7 987 755 99 62', '+7 987 698 32 44'], addresses: '', stock_description: '',
                published: false, email: '', emails: ['agrich@gmail.com', 'agrich3@gmail.com'], delivery: '', take_back: '', seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 22, name: 'Аосртиментос', goods: 289, allow_goods: 1000, discounts: 36, allow_discounts: 65, stock: 20, allow_stocks: 35,
                description: 'Описание нашего магазина содержит краткий но информативный текст, ' +
                'в достаточном обьеме чтобы понять что мы круче и лучше всех, в нашей области!', deleted: false,
                sales: 112, instagram: 'В разработке', phones: ['+7 987 543 32 55', '+7 987 698 32 44'], addresses: '', stock_description: '',
                published: true, email: '', emails: ['nelia.belorus@gmail.com', 'nelia2.belorus@gmail.com'], delivery: '', take_back: '', seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
        ],
        users: [
            { id: 244, banned: false, avatar: '/assets/img/users/avatar1.jpg', name: 'Иванов Иван', instagram: 'в разработку', comments: 23, favorites: 9, purchases: 8, email: 'fortifelx@gmail.com', contacts: 'не указано', seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 221, banned: false, avatar: '/assets/img/users/avatar2.png', name: 'Асалан Валентин', instagram: 'в разработку', comments: 3, favorites: 13, purchases: 12, email: 'temposte@gmail.com', contacts: 'не указано', seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 132, banned: true, avatar: '/assets/img/users/avatar3.jpg', name: 'Маришкина Валерия', instagram: 'в разработку', comments: 17, favorites: 2, purchases: 11, email: 'agrich@gmail.com', contacts: 'не указано', seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 132, banned: true, avatar: '/assets/img/users/avatar4.png', name: 'Калатай Инна', instagram: 'в разработку', comments: 7, favorites: 2, purchases: 11, email: 'kalatay@mail.ru', contacts: 'не указано', seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 132, banned: false, avatar: '/assets/img/users/avatar5.png', name: 'Мрийна Елена', instagram: 'в разработку', comments: 1, favorites: 4, purchases: 2, email: 'elena@mail.ru', contacts: 'не указано', seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 132, banned: true, avatar: '/assets/img/users/avatar6.jpg', name: 'Атифонова Оксана', instagram: 'в разработку', comments: 0, favorites: 0, purchases: 1, email: 'oksana@gmail.com', contacts: 'не указано', seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
        ],
        articles: [
            { id: 21, img: '/assets/img/articles/size1.png', published: true, title: 'Как подобрать платье по размерной таблице', description: 'Для того чтобы удачно и хорошо подобрать платье на самом деле нужно знать всего пару вещей, и вы будете удивлены а заодно и поймете как некоторые продавцы сразу глядя на человека понимают что нем будет как влитое', content:'', views: 23, like: 11, shares: 12, tags:'платья, таблица, размер, выбрать, подобрать, сидеть, хорошо', create_date: '19.03.2018', published_date: '22.03.2018', seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 22, img: '/assets/img/articles/size3.jpg', published: true, title: 'Как подобрать платье по размерной таблице', description: 'Для того чтобы удачно и хорошо подобрать платье на самом деле нужно знать всего пару вещей, и вы будете удивлены а заодно и поймете как некоторые продавцы сразу глядя на человека понимают что нем будет как влитое', content:'', views: 165, like: 92, shares: 15, tags:'платья, таблица, размер, выбрать, подобрать, сидеть, хорошо', create_date: '19.03.2018', published_date: '08.01.2018', seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 23, img: '/assets/img/articles/size2.jpg', published: true, title: 'Как подобрать платье по размерной таблице', description: 'Для того чтобы удачно и хорошо подобрать платье на самом деле нужно знать всего пару вещей, и вы будете удивлены а заодно и поймете как некоторые продавцы сразу глядя на человека понимают что нем будет как влитое', content:'', views: 122, like: 13, shares: 12, tags:'платья, таблица, размер, выбрать, подобрать, сидеть, хорошо', create_date: '19.03.2018', published_date: '17.02.2018', seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 28, img: '/assets/img/articles/size3.jpg', published: true, title: 'Как подобрать платье по размерной таблице', description: 'Для того чтобы удачно и хорошо подобрать платье на самом деле нужно знать всего пару вещей, и вы будете удивлены а заодно и поймете как некоторые продавцы сразу глядя на человека понимают что нем будет как влитое', content:'', views: 91, like: 92, shares: 17, tags:'платья, таблица, размер, выбрать, подобрать, сидеть, хорошо', create_date: '19.03.2018', published_date: '22.03.2018', seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}}
        ],
        comments: [
            { id: 64, published: false, avatar: '/assets/img/users/avatar1.jpg', name: 'Иванов Иван', instagram: 'в разработку', productImg:'/assets/img/goods/1.jpg', productName: 'Комплект "ковбой"', productPrice: 600, productRating: 3, productLike: 124, productShop: 'Техас и джинсы', rating: 4, date: '28/06/2018', content: 'Самый отличный комплект за такую цену, подходит для всего, просто универсал'},
            { id: 63, published: true, avatar: '/assets/img/users/avatar2.png', name: 'Асалан Валентин', instagram: 'в разработку', productImg:'/assets/img/goods/2.jpg', productName: 'Кофта "плебей"', productPrice: 120, productRating: 4, productLike: 224, productShop: 'Штаны и кофты', rating: 4, date: '21/05/2018', content: 'Самый отличный комплект за такую цену, подходит для всего, просто универсал'},
            { id: 122, published: true, avatar: '/assets/img/users/avatar3.jpg', name: 'Маришкина Валерия', instagram: 'в разработку', productImg:'/assets/img/goods/3.jpg', productName: 'Штаны "Мачо"', productPrice: 500, productRating: 3, productLike: 510, productShop: 'Ляля и Диля', rating: 4, date: '12/05/2018', content: 'Самый отличный комплект за такую цену, подходит для всего, просто универсал'},
            { id: 61, published: true, avatar: '/assets/img/users/avatar4.png', name: 'Калатай Инна', instagram: 'в разработку', productImg:'/assets/img/goods/4.jpg', productName: 'Ремень "Мачо"', productPrice: 1600, productRating: 4, productLike: 92, productShop: 'Мачо и Версачо', rating: 4, date: '28/04/2018', content: 'Самый отличный комплект за такую цену, подходит для всего, просто универсал'},
            { id: 26, published: false, avatar: '/assets/img/users/avatar3.jpg', name: 'Маришкина Валерия', instagram: 'в разработку', productImg:'/assets/img/goods/5.jpg', productName: 'Топанки "Мачо"', productPrice: 2600, productRating: 5, productLike: 21, productShop: 'Мачо и Версачо', rating: 4, date: '21/04/2018', content: 'Самый отличный комплект за такую цену, подходит для всего, просто универсал'},
            { id: 164, published: false, avatar: '/assets/img/users/avatar6.jpg', name: 'Атифонова Оксана', instagram: 'в разработку', productImg:'/assets/img/goods/5.jpg', productName: 'Топанки "Мачо"', productPrice: 600, productRating: 5, productLike: 5, productShop: 'Техас и джинсы', rating: 4, date: '28/03/2018', content: 'Самый отличный комплект за такую цену, подходит для всего, просто универсал'},
            { id: 92, published: true, avatar: '/assets/img/users/avatar3.jpg', name: 'Маришкина Валерия', instagram: 'в разработку', productImg:'/assets/img/goods/6.jpg', productName: 'Туфли "Ляля"', productPrice: 600, productRating: 2, productLike: 687, productShop: 'Ляля и Диля', rating: 4, date: '22/03/2018', content: 'Самый отличный комплект за такую цену, подходит для всего, просто универсал'},
            { id: 36, published: true, avatar: '/assets/img/users/avatar5.png', name: 'Мрийна Елена', instagram: 'в разработку', productImg:'/assets/img/goods/1.jpg', productName: 'Комплект "ковбой"', productPrice: 600, productRating: 3, productLike: 512, productShop: 'Техас и джинсы', rating: 4, date: '08/03/2018', content: 'Самый отличный комплект за такую цену, подходит для всего, просто универсал'},
        ],
        sections: [
            { id: 1, published: true, description:'Одежда и обувь для женщин', title: 'Женщинам', deleted: false, seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 2, published: true, description:'Одежда и обувь для мужчин', title: 'Мужчинам', deleted: false, seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 3, published: true, description:'Все для детей и младенцев', title: 'Детям', deleted: false, seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 4, published: false, description:'section description, give short description about section', title: 'Аксесуары', deleted: false, seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 5, published: false, description:'Все для дома', title: 'Дом и быт', deleted: false, seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 6, published: true, description:'section description, give short description about section', title: 'Еда и напитки', deleted: false, seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 7, published: true, description:'section description, give short description about section', title: 'Украшения', deleted: false, seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
        ],
        categories: [
            { id: 1, published: true, deleted: false, illustration: '/assets/img/categories/cat1.jpg', sectionId: 1, sectionName: 'Женщинам', sectionDescription:'Одежда и обувь для женщин', title: 'Верхняя одежда', description: 'Category description give as short description about category, and about its goods and maybe something else ', seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 2, published: true, deleted: true, illustration: '/assets/img/categories/cat1.jpg', sectionId: 1, sectionName: 'Женщинам', sectionDescription:'Одежда и обувь для женщин', title: 'Толстовки и худи', description: 'Category description give as short description about category, and about its goods and maybe something else ', seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 3, published: true, deleted: false, illustration: '/assets/img/categories/cat1.jpg', sectionId: 1, sectionName: 'Женщинам', sectionDescription:'Одежда и обувь для женщин', title: 'Свитеры', description: 'Category description give as short description about category, and about its goods and maybe something else ', seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 4, published: true, deleted: false, illustration: '/assets/img/categories/cat1.jpg', sectionId: 1, sectionName: 'Женщинам', sectionDescription:'Одежда и обувь для женщин', title: 'Топы и рубашки', description: 'Category description give as short description about category, and about its goods and maybe something else ', seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 5, published: true, deleted: false, illustration: '/assets/img/categories/cat1.jpg', sectionId: 1, sectionName: 'Женщинам', sectionDescription:'Одежда и обувь для женщин', title: 'Платья', description: 'Category description give as short description about category, and about its goods and maybe something else ', seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 6, published: true, deleted: false, illustration: '/assets/img/categories/cat2.jpg', sectionId: 5, sectionName: 'Дом и быт', sectionDescription:'Все для дома', title: 'Забота о себе', description: 'Category description give as short description about category, and about its goods and maybe something else ', seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 7, published: true, deleted: false, illustration: '/assets/img/categories/cat3.jpg', sectionId: 2, sectionName: 'Мужчинам', sectionDescription:'Одежда и обувь для мужчин', title: 'Брюки', description: 'Category description give as short description about category, and about its goods and maybe something else ', seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 8, published: true, deleted: false, illustration: '/assets/img/categories/cat3.jpg', sectionId: 2, sectionName: 'Мужчинам', sectionDescription:'Одежда и обувь для мужчин', title: 'Свитеры', description: 'Category description give as short description about category, and about its goods and maybe something else ', seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 9, published: true, deleted: false, illustration: '/assets/img/categories/cat3.jpg', sectionId: 2, sectionName: 'Мужчинам', sectionDescription:'Одежда и обувь для мужчин', title: 'Рубашки', description: 'Category description give as short description about category, and about its goods and maybe something else ', seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 10, published: true, deleted: false, illustration: '/assets/img/categories/cat3.jpg', sectionId: 2, sectionName: 'Мужчинам', sectionDescription:'Одежда и обувь для мужчин', title: 'Верхняя одежда', description: 'Category description give as short description about category, and about its goods and maybe something else ', seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 11, published: true, deleted: false, illustration: '/assets/img/categories/cat3.jpg', sectionId: 2, sectionName: 'Мужчинам', sectionDescription:'Одежда и обувь для мужчин', title: 'Обувь', description: 'Category description give as short description about category, and about its goods and maybe something else ', seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 12, published: false, deleted: false, illustration: '/assets/img/categories/cat4.jpg', sectionId: 5, sectionName: 'Дом и быт', sectionDescription:'Все для дома', title: 'Домашний декор', description: 'Category description give as short description about category, and about its goods and maybe something else ', seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 13, published: false, deleted: false, illustration: '/assets/img/categories/cat5.jpg', sectionId: 4, sectionName: 'Аксесуары', sectionDescription:'section description, give short description about section', title: 'Сумки, рюкзаки и кошельки', description: 'Category description give as short description about category, and about its goods and maybe something else ', seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 15, published: false, deleted: false, illustration: '/assets/img/categories/cat5.jpg', sectionId: 4, sectionName: 'Аксесуары', sectionDescription:'section description, give short description about section', title: 'Головные уборы', description: 'Category description give as short description about category, and about its goods and maybe something else ', seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 16, published: false, deleted: false, illustration: '/assets/img/categories/cat5.jpg', sectionId: 4, sectionName: 'Аксесуары', sectionDescription:'section description, give short description about section', title: 'Очки', description: 'Category description give as short description about category, and about its goods and maybe something else ', seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 17, published: false, deleted: false, illustration: '/assets/img/categories/cat5.jpg', sectionId: 4, sectionName: 'Аксесуары', sectionDescription:'section description, give short description about section', title: 'Ремни', description: 'Category description give as short description about category, and about its goods and maybe something else ', seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 18, published: false, deleted: true, illustration: '/assets/img/categories/cat5.jpg', sectionId: 4, sectionName: 'Аксесуары', sectionDescription:'section description, give short description about section', title: 'Галстуки и запонки', description: 'Category description give as short description about category, and about its goods and maybe something else ', seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 19, published: true, deleted: false, illustration: '/assets/img/categories/cat6.jpg', sectionId: 7, sectionName: 'Украшения', sectionDescription:'section description, give short description about section', title: 'Колье', description: 'Category description give as short description about category, and about its goods and maybe something else ', seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 20, published: true, deleted: false, illustration: '/assets/img/categories/cat6.jpg', sectionId: 7, sectionName: 'Украшения', sectionDescription:'section description, give short description about section', title: 'Кулоны и цепочки', description: 'Category description give as short description about category, and about its goods and maybe something else ', seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 21, published: true, deleted: true, illustration: '/assets/img/categories/cat6.jpg', sectionId: 7, sectionName: 'Украшения', sectionDescription:'section description, give short description about section', title: 'Чокеры', description: 'Category description give as short description about category, and about its goods and maybe something else ', seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 22, published: true, deleted: false, illustration: '/assets/img/categories/cat7.jpg', sectionId: 1, sectionName: 'Женщинам', sectionDescription:'section description, give short description about section', title: 'Юбки', description: 'Category description give as short description about category, and about its goods and maybe something else ', seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 23, published: true, deleted: false, illustration: '/assets/img/categories/cat8.jpg', sectionId: 6, sectionName: 'Еда и напитки', sectionDescription:'section description, give short description about section', title: 'Бакалея', description: 'Category description give as short description about category, and about its goods and maybe something else ', seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 24, published: true, deleted: true, illustration: '/assets/img/categories/cat8.jpg', sectionId: 6, sectionName: 'Еда и напитки', sectionDescription:'section description, give short description about section', title: 'Сладости и снеки', description: 'Category description give as short description about category, and about its goods and maybe something else ', seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 25, published: true, deleted: false, illustration: '/assets/img/categories/cat8.jpg', sectionId: 6, sectionName: 'Еда и напитки', sectionDescription:'section description, give short description about section', title: 'Масла, соусы и специи', description: 'Category description give as short description about category, and about its goods and maybe something else ', seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 26, published: false, deleted: false, illustration: '/assets/img/categories/cat2.jpg', sectionId: 3, sectionName: 'Детям', sectionDescription:'Все для детей и младенцев', title: 'Обувь для мальчиков', description: 'Category description give as short description about category, and about its goods and maybe something else ', seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 27, published: false, deleted: true, illustration: '/assets/img/categories/cat2.jpg', sectionId: 3, sectionName: 'Детям', sectionDescription:'Все для детей и младенцев', title: 'Обувь для мальчиков', description: 'Category description give as short description about category, and about its goods and maybe something else ', seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 28, published: true, deleted: false, illustration: '/assets/img/categories/cat3.jpg', sectionId: 3, sectionName: 'Детям', sectionDescription:'Все для детей и младенцев', title: 'Наматрасники', description: 'Category description give as short description about category, and about its goods and maybe something else ', seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 29, published: true, deleted: false, illustration: '/assets/img/categories/cat3.jpg', sectionId: 3, sectionName: 'Детям', sectionDescription:'Все для детей и младенцев', title: 'Аксесуары', description: 'Category description give as short description about category, and about its goods and maybe something else ', seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 30, published: true, deleted: false, illustration: '/assets/img/categories/cat3.jpg', sectionId: 3, sectionName: 'Детям', sectionDescription:'Все для детей и младенцев', title: 'Одежда для девочек', description: 'Category description give as short description about category, and about its goods and maybe something else ', seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 31, published: true, deleted: false, illustration: '/assets/img/categories/cat3.jpg', sectionId: 3, sectionName: 'Детям', sectionDescription:'Все для детей и младенцев', title: 'Одежда для младенцев', description: 'Category description give as short description about category, and about its goods and maybe something else ', seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 32, published: true, deleted: false, illustration: '/assets/img/categories/cat3.jpg', sectionId: 3, sectionName: 'Детям', sectionDescription:'Все для детей и младенцев', title: 'Одежда для мальчиков', description: 'Category description give as short description about category, and about its goods and maybe something else ', seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 33, published: false, deleted: false, illustration: '/assets/img/categories/cat7.jpg', sectionId: 5, sectionName: 'Дом и быт', sectionDescription:'Все для дома', title: 'Аксесуары для електроники', description: 'Category description give as short description about category, and about its goods and maybe something else ', seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},

        ],
        colors: [
            { id: 1, name: 'Red', code: 'red', published: true, deleted: false},
            { id: 2, name: 'Green', code: 'green', published: true, deleted: false },
            { id: 3, name: 'Black', code: 'black', published: false, deleted: false },
            { id: 4, name: 'Purple', code: 'purple', published: false, deleted: false },
            { id: 5, name: 'Gray', code: 'grey', published: false, deleted: false },
            { id: 6, name: 'White', code: 'white', published: false, deleted: false },
            { id: 7, name: 'Blue', code: 'blue', published: false, deleted: false },
            { id: 8, name: 'Yellow', code: 'yellow', published: true, deleted: false },
            { id: 9, name: 'Brown', code: 'brown', published: true, deleted: false },
        ],
        sizes: [
            { id: 1, name: 'S', description: 'description for size', published: true, deleted: false },
            { id: 2, name: 'L', description: 'some description', published: true, deleted: false },
            { id: 3, name: 'XS', description: 'description', published: false, deleted: false },
            { id: 4, name: 'SL', description: 'some description', published: true, deleted: false },
            { id: 5, name: 'XL', description: 'description for size', published: true, deleted: false },
            { id: 6, name: 'XXL', description: 'description', published: true, deleted: false }
        ],
        pages: [
            { id: 1, image: '', title: '', content: '',
                seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'RU_ru', site_name: 'goome.ru'}},
            { id: 2, image: '', title: '', content: '',
                seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 3, image: '', title: '', content: '',
                seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 4, image: '', title: '', content: '',
                seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 5, image: '', title: '', content: '',
                seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 6, image: '', title: '', content: '',
                seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 7, image: '', title: '', content: '',
                seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 8, image: '', title: '', phoneTitle: '', phones: '', workTimeTitle: '', workTime: '', shopsTitle: 'Также приглашаем посетить наши магазины',
                shops: [{ id: 0, published: true, img: '/assets/img/shops/shop1.jpg', name: 'Техас и копыта', description: '', address: 'г. Москвы, ул.Тверская 8'},
                    { id: 1, published: true, img: '/assets/img/shops/shop2.jpg', name: 'Чувайчик', description: '', address: 'г. Казань, ул.Толстого 8'},],
                seo: {title: '', type: '', image: '/assets/img/newProduct/black.jpg', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 9, image: '', title: '', content: '',
                facebook: { link: 'Facebook link', icon: ''},
                instagram: { link: '', icon: ''},
                telegram: { link: '', icon: ''},
                vkontakte: { link: '', icon: ''},
                watsup: { link: '', icon: ''}},
        ]

    },
    methods: {
        showInLog: function(tr){
            console.log(tr);
        },
        changeStatus: function(x, name){
          this.status = x;
          this.statusName = name;
        },
        addOption: function(){
            this.newProduct.options.push(this.newOption);
            this.newOption = '';
        },
        addPhone: function(){
            this.newShop.phones.push(this.newPhone);
            this.newPhone = '';
        },
        addOurShop: function(){
          var newShops = this.pages[7].shops;
          newShops.push(this.newOurShop);
          //   this.pages[7].shops.forEach(function(el, i){
          //       el.id = i;
          // })
        },
        removeOurShop: function(i){
           this.pages[7].shops.splice(i, 1);
        },
        addEmail: function(){
            this.newShop.emails.push(this.newEmail);
            this.newEmail = '';
        },
        removeOption: function(e){
            var i = e.target.dataset.id;
            this.newProduct.options.splice(i, 1);
        },
        removePhone: function(e){
            var i = e.target.dataset.id;
            this.newShop.phones.splice(i, 1);
        },
        removeEmail: function(e){
            var i = e.target.dataset.id;
            this.newShop.emails.splice(i, 1);
        },
        addSizeToProduct: function(){
            var sizes = this.$refs.new_product_size;
            this.newProduct.sizes.length = 0;
            for(var i = 0; i < sizes.length; i++){
                if(sizes[i].checked){
                    this.newProduct.sizes.push(sizes[i].value);
                    console.log(this.newProduct.sizePrices);
                }
            }
        },
        addColorToProduct: function(){
            var colors = this.$refs.new_product_color;
            this.newProduct.colors.length = 0;
            for(var i = 0; i < colors.length; i++){
                if(colors[i].checked){
                    this.newProduct.colors.push(colors[i].value);
                }
            }
        },
        addOptionToProduct: function(){
            var options = this.$refs.new_product_option;
            this.newProduct.activeOptions.length = 0;
            for(var i = 0; i < options.length; i++){
                if(options[i].checked){
                    this.newProduct.activeOptions.push(options[i].value);
                }
            }
        },
        previewThumbnail: function(event) {
            var input = event.target;

            if (input.files && input.files[0]) {
                var reader = new FileReader();
                var vm = this;
                reader.onload = function(e) {
                    vm.newProduct.img = e.target.result;
                }

                reader.readAsDataURL(input.files[0]);
            }
        },
        previewArticleImg: function(event) {
            var input = event.target;

            if (input.files && input.files[0]) {
                var reader = new FileReader();
                var vm = this;
                reader.onload = function(e) {
                    vm.newArticle.img = e.target.result;
                }

                reader.readAsDataURL(input.files[0]);
            }
        },
        previewCategoryImg: function(event) {
            var input = event.target;

            if (input.files && input.files[0]) {
                var reader = new FileReader();
                var vm = this;
                reader.onload = function(e) {
                    vm.newCategory.illustration = e.target.result;
                }

                reader.readAsDataURL(input.files[0]);
            }
        },
        previewAboutPageImg: function(num, event) {
            var input = event.target;
            console.log(num);

            if (input.files && input.files[0]) {
                var reader = new FileReader();
                var vm = this;
                reader.onload = function(e) {
                    vm.pages[num].image = e.target.result;
                }

                reader.readAsDataURL(input.files[0]);
            }
        },
        showThumbnail: function(event) {
            var input = event.target;
            var reader = [];
            if (input.files && input.files[0]) {
                for(var i = 0; i <input.files.length; i++) {
                    reader[i] = new FileReader();
                    reader[i].readAsDataURL(input.files[i]);
                }
                var length = this.newProduct.images.length;
                var filesLength = input.files.length;
                var x = 0;
                var pictures = [];
                if(this.newProduct.images.length > 0) {
                    pictures = this.newProduct.images;
                }
                for(var i = length; i < filesLength + length; i++) {
                    var img = {};
                    img.id = i;
                    img.colors = [];
                    img.sizes = [];
                    img.options = [];
                    img.published = true;
                    img.deleted = false;
                    var vm = this;
                    pictures.push(img);
                    reader[x].onload = function(e) {
                        var y = 0;
                        for(var x = length; x < filesLength+length; x++){
                            pictures[x].url = reader[y].result;
                            vm.$set(vm.newProduct.images, x, pictures[x]);
                            y++;
                        }
                        // vm.newProduct.images = pictures;

                    };
                    x++;
                }
            };
        },
        updateProduct: function(product){
            console.log('send data to server');
        },
        updateShop: function(product){
            console.log('send shop data to server');
        },
        updateArticle: function(article){
            console.log('send article data to server');
        },
        updateComment: function(comment){
            console.log('send article data to server');
        },
        updateCategory: function(category){
            category = this.newCategory;
            console.log('send category data to server');
        },
        updateColor: function(color){
            color = this.newColor;
            console.log('send category data to server');
        },
        updateSize: function(size){
            size = this.newSize;
            console.log('send size data to server');
        },
        deleteProduct: function(product){
            product.deleted = !product.deleted;
            this.updateProduct(product);
        },
        deleteArticle: function(article){
            article.deleted = !article.deleted;
            this.updateArticle(article);
        },
        deleteCategory: function(category){
            category.deleted = !category.deleted;
            this.updateCategory(category);
        },
        deleteSection: function(section){
            section.deleted = !section.deleted;
            this.updateCategory(section);
        },
        deleteColor: function(color){
            color.deleted = !color.deleted;
            this.updateColor(color);
        },
        deleteSize: function(size){
            size.deleted = !size.deleted;
            this.updateSize(size);
        },
        publishProduct: function(product){
            product.published = !product.published;
            this.updateProduct(product);
        },
        publishArticle: function(article){
            article.published = !article.published;
            this.updateArticle(article);
        },
        publishComment: function(comment){
            comment.published = !comment.published;
            this.updateComment(comment);
        },
        deleteShop: function(shop){
            shop.deleted = !shop.deleted;
            this.updateProduct(shop);
        },
        publishShop: function(shop){
            shop.published = !shop.published;
            this.updateProduct(shop);
        },
        publishCategory: function(category){
            category.published = !category.published;
            this.updateCategory(category);
        },
        publishSection: function(section){
            section.published = !section.published;
            this.updateSection(section);
        },
        publishColor: function(color){
            color.published = !color.published;
            this.updateColor(color);
        },
        publishSize: function(size){
            size.published = !size.published;
            this.updateSize(size);
        },
        createProduct: function(){
            this.newProduct = this.productTemplate;
            this.createProductBlock = true;
        },
        createArticle: function(){
            this.newArticle = this.articleTemplate;
            this.createArticleBlock = true;
        },
        createShop: function(){
            this.newShop = this.shopTemplate;
            this.createShopBlock = true;
        },
        createCategory: function(){
            this.newCategory = this.categoryTemplate;
            this.createStructureBlock = 1;
        },
        createSection: function(){
            this.newSection = this.sectionTemplate;
            this.createStructureBlock = 2;
        },
        createColor: function(){
            this.newColor = this.colorTemplate;
            this.createFilterBlock = 1;
        },
        createSize: function(){
            this.newSize = this.sizeTemplate;
            this.createFilterBlock = 2;
        },
        changeProduct: function(product){
            this.newProduct = product;
            for(var i = 0; i < this.categories.length; i++){
                if(product.categoryId == this.categories[i].id){
                    this.activeSection = this.categories[i].sectionId;
                }
            }
            this.createProductBlock = true;
        },
        changeShop: function(shop){
            this.newShop = shop;
            this.createShopBlock = true;
        },
        changeArticle: function(article){
            this.newArticle = article;
            this.createArticleBlock = true;
        },
        changeCategory: function(category){
            this.newCategory = category;
            this.createStructureBlock = 1;
        },
        changeSection: function(section){
            if(section === false) {
                this.newSection = this.sectionStatus;
            } else {
                this.newSection = section;
            }
            this.createStructureBlock = 2;
        },
        changeColor: function(color){
            this.newColor = color;
            this.createFilterBlock = 1;
        },
        changeSize: function(size){
            this.newSize = size;
            this.createFilterBlock = 2;
        },
        saveProduct: function(){
            this.updateProduct(this.newProduct);
            this.getProducts();
            this.createProductBlock = false;
        },
        saveShop: function(){
            this.updateShop(this.newShop);
            this.getShops();
            this.createShopBlock = false;
        },
        saveArticle: function(){
            this.updateArticle(this.newArticle);
            this.getArticles();
            this.createArticleBlock = false;
        },
        saveCategory: function(){
            this.updateCategory(this.newCategory);
            this.getCategorys();
            this.createStructureBlock = 0;
        },
        saveSection: function(){
            this.updateSection(this.newSection);
            this.getSections();
            this.createStructureBlock = 0;
        },
        saveColor: function(){
            this.updateColor(this.newColor);
            this.getColors();
            this.createFilterBlock = 0;
        },
        saveSize: function(){
            this.updateSize(this.newSize);
            this.getSizes();
            this.createFilterBlock = 0;
        },
        savePage: function(){
            console.log('send page data');
        },
        getProducts: function(options){
            console.log('get product list');
        },
        getPage: function(options){
            console.log('get page data');
        },
        getShops: function(options){
            console.log('get shop list');
        },
        getArticles: function(options){
            console.log('get article list');
        },
        getCategorys: function(options){
            console.log('get category list');
        },
        getSections: function(options){
            console.log('get sections list');
        },
        getColors: function(options){
            console.log('get colors list');
        },
        getSizes: function(options){
            console.log('get sizes list');
        },
        cancelShop: function(options){
            console.log('get shop list');
        },
        cancelArticle: function(options){
            console.log('get article list');
        },
        cancelCategory: function(options){
            console.log('get category list');
        },
        cancelSection: function(options){
            console.log('get sections list');
        },
        cancelProduct: function(){
            this.getProducts();
        },
        cancelSize: function(){
            this.getSizes();
        },
        cancelColor: function(){
            this.getColors();
        },
        cancelPage: function(){
            this.getPage();
        },
        chooseSection: function(){
            var category = this.newCategory;
            var sections = this.sections;
            var sectionID = category.sectionId;
            for(var i = 0; i < this.sections.length; i++){
                if(sections[i].id == sectionID){
                    category.sectionName = sections[i].title;
                    category.sectionDescription = sections[i].description;
                }
            }
        },

    },
    computed: {

    },
    components: { DatePicker, comment, articletable, seo, preview, ourshops },
})
