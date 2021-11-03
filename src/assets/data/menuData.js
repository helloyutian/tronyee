module.exports = [
    {
        name: '首页',
        herf: '/'
    },
    {
        name: '关于创亿',
        herf: '/about',
        childrens: [
            {
                name: '创亿简介',
                herf: '/about#intro',
                type: 'intro'
            },
            {
                name: '企业文化',
                herf: '/about#culture',
                type: 'culture'
            },
            {
                name: '荣誉资质',
                herf: '/about#honor',
                type: 'honor'
            },
            {
                name: '公司环境',
                herf: '/about#environment',
                type: 'environment'
            },
        ]
    },
    {
        name: '产品中心',
        herf: '/product',
        childrens: [
            {
                name: '三星贴片电容',
                herf: '/product/sx',
                type: 'sx'
            },
            {
                name: '村田贴片电容',
                herf: '/product/ct',
                type: 'ct'
            },
            {
                name: '国巨贴片电容',
                herf: '/product/gj',
                type: 'gj'
            },
        ]
    },
    {
        name: '资料下载',
        herf: '/download',
        childrens: [
            {
                name: '规格书下载',
                herf: '/download/spec',
                type: 'spec'
            },

        ]
    },
    {
        name: '行业动态',
        herf: '/news',
        childrens: [
            {
                name: '创亿动态',
                herf: '/news/cy',
                type: 'cy'
            },
            {
                name: '产品百科',
                herf: '/news/wiki',
                type: 'wiki'
            },
        ]
    },
    {
        name: '品牌专区',
        herf: '/brand',
    },
    {
        name: '联系我们',
        herf: '/contact',
    },
]