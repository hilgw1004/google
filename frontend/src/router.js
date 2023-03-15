
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import FilelayoutidManager from "./components/listers/FilelayoutidCards"
import FilelayoutidDetail from "./components/listers/FilelayoutidDetail"

import IndexinformationManager from "./components/listers/IndexinformationCards"
import IndexinformationDetail from "./components/listers/IndexinformationDetail"

import IndexManager from "./components/listers/IndexCards"
import IndexDetail from "./components/listers/IndexDetail"



import DsshBoarfView from "./components/DsshBoarfView"
import DsshBoarfViewDetail from "./components/DsshBoarfViewDetail"

export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
            {
                path: '/filelayoutids',
                name: 'FilelayoutidManager',
                component: FilelayoutidManager
            },
            {
                path: '/filelayoutids/:id',
                name: 'FilelayoutidDetail',
                component: FilelayoutidDetail
            },

            {
                path: '/indexinformations',
                name: 'IndexinformationManager',
                component: IndexinformationManager
            },
            {
                path: '/indexinformations/:id',
                name: 'IndexinformationDetail',
                component: IndexinformationDetail
            },

            {
                path: '/indices',
                name: 'IndexManager',
                component: IndexManager
            },
            {
                path: '/indices/:id',
                name: 'IndexDetail',
                component: IndexDetail
            },



            {
                path: '/dsshBoarves',
                name: 'DsshBoarfView',
                component: DsshBoarfView
            },
            {
                path: '/dsshBoarves/:id',
                name: 'DsshBoarfViewDetail',
                component: DsshBoarfViewDetail
            },


    ]
})
