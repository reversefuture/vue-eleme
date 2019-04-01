import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        lists: [],
        isReg: false
    },
    mutations: {
        addItem(state, value) {
            state.lists.push(value);
        },
        changeRegState(state, value){
            state.isReg = value;
        }
    },
    actions: {}
});
