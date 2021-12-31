// import { fetchNewList } from '@/api/index.js'
//
// const state = {
//     news: []
// }
//
// const getters = {
//     getNews(state){
//         return state.news;
//     }
// }
//
// const actions = {
//     FETCH_NEWS(context){
//         fetchNewList()
//             .then((res) => {
//                 context.commit('SET_NEWS',res.data);
//             })
//             .catch((err) => {
//                 console.log(err);
//             })
//     }
// }
//
// const mutations = {
//     SET_NEWS(state, news) {
//         state.news = news;
//         console.log(state.news);
//     }
// }
// export default { state, getters, actions, mutations }