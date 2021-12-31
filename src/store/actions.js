import {fetchAskList, fetchCommentItem, fetchJobsList, fetchNewList, fetchUserInfo} from "@/api";

export default {
    FETCH_NEWS(context) {
        fetchNewList()
            .then(({data}) => {
                context.commit('SET_NEWS', data);
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            })
    },

    FETCH_JOBS({commit}) {
        fetchJobsList()
            .then(({data}) => {
                commit('SET_JOBS', data);
            })
            .catch((err) => {
                console.log(err);
            })
    },
    FETCH_ASKS(context) {
        fetchAskList()
            .then(({data}) => {
                context.commit('SET_ASKS', data);
            })
            .catch((err) => {
                console.log(err);
            })
    },
    FETCH_USER({ commit }, name) {
        fetchUserInfo(name)
            .then(({data}) => {
                commit('SET_USER', data);
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            })
    },
    FETCH_ITEM( {commit}, id ){
        fetchCommentItem(id)
            .then(({data})=>{
                commit('SET_ITEM',data);
                console.log(data);
            })
            .catch((err) =>{
                console.log(err);
            })
    }
}