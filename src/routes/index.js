import Vue from 'vue'
import VueRouter from "vue-router";
// import NewsView from '../views/NewsView'
// import AskView from '../views/AskView'
import JobsView from '../views/JobsView'
import ItemView from "@/views/ItemView";
import UserView from "@/views/UserView";
import createListView from '../views/CreateListView.js'
import bus from "@/utils/bus";
import { store } from '@/store/index'

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/news'
        },
        {
            // path : url 주소
            path: '/news',
            name: 'news',
            // component: url 주소로 갔을 때 표시될 컴폰먼트
            component: createListView('NewsView'),
        },
        {
            path: '/ask',
            name: 'ask',
            component: createListView('AskView'),
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
            beforeEnter: (to, from, next) =>{
                bus.$emit('start:spinner');
                setTimeout(()=>{
                    store.dispatch('FETCH_LIST',to.name)
                        .then(() => {
                            console.log('fetched');
                            // bus.$emit('end:spinner');
                            next();
                        })
                        .catch((err)=>{
                            console.log(err);
                        })
                },3000);
            }
            // component: createListView('JobsView')
        },
        {
            path: '/user/:id',
            component: UserView
        },
        {
            path: '/item/:id',
            component: ItemView
        }
    ]
});