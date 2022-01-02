import {fetchAskList, fetchCommentItem, fetchJobsList, fetchNewList, fetchUserInfo, fetchList} from "@/api";

export default {
    FETCH_NEWS(context) {
        fetchNewList()
            .then((res) => {
                context.commit('SET_NEWS', res.data);
                return res;
            })
            .catch((err) => {
                console.log(err);
            })
    },

    FETCH_JOBS({commit}) {
        fetchJobsList()
            .then((res) => {
                commit('SET_LIST', res.data);
                return res;
            })
            .catch((err) => {
                console.log(err);
            })
    },
    FETCH_ASKS(context) {
        fetchAskList()
            .then((res) => {
                context.commit('SET_ASKS', res.data);
                return res;
            })
            .catch((err) => {
                console.log(err);
            })
    },
    FETCH_USER({ commit }, name) {
        return fetchUserInfo(name)
            .then(({data}) => {
                commit('SET_USER', data);
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            })
    },
    FETCH_ITEM( {commit}, id ){
        return fetchCommentItem(id)
            .then(({data})=>{
                commit('SET_ITEM',data);
                console.log(data);
            })
            .catch((err) =>{
                console.log(err);
            })
    },
    FETCH_LIST({commit},pageName){
        return fetchList(pageName)
            .then(res => {
                commit('SET_LIST',res.data)
                return res;
    })
            .catch((err) => console.log(err))
    },
}