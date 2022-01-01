import Vue from 'vue'
import Vuex from 'vuex'
// import {fetchAskList, fetchJobsList, fetchNewList} from "@/api";
import mutations from '@/store/mutations.js'
import actions from '@/store/actions.js'

Vue.use(Vuex);

// import NewsStore from "@/store/modules/NewsStore"

export const store = new Vuex.Store({
    state: () => ({
        news: [],
        jobs: [],
        asks: [],
        user: {},
        item: {}
    }),
    getters:{
        fetchedAsks(state){
            return state.asks;
        },
        fetchedItem(state){
            return state.item;
        }
    },
    actions,
    mutations
})

