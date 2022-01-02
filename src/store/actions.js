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
    async FETCH_USER({ commit }, name) {
        const res = await fetchUserInfo(name);
        commit('SET_USER',res.data);
        return res;

    },
    async FETCH_ITEM( {commit}, id ){
        const res = await fetchCommentItem(id);
        commit('SET_ITEM',res.data);
        return res;
    },
    async FETCH_LIST({commit},pageName){
        try {
            const res = await fetchList(pageName);
            commit('SET_LIST',res.data);
            return res;
        }catch(err){
            console.log(err);
        }
    },
}