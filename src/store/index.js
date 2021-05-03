import Vue from "vue";
import Vuex from "vuex";
import decode from "jwt-decode";
import router from "../router/index";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        token: null,
        user: null,
        tipo: null,
        id : null,
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
        },
        setUser(state, user) {
            state.user = user;
        },
        setTipo(state, tipo) {
            state.tipo = tipo;
        },
        setId(state, id)
        {
            state.id = id;
        }
    },
    actions: {
        keepToken({ commit }, token) {
            commit("setToken", token);
            commit("setUser", decode(token));
            commit("setTipo", this.state.user.tipo);
            commit("setId", this.state.user.id);
            console.log(this.state.tipo);
            localStorage.setItem("token", token);
            localStorage.setItem("tipo", this.state.user.tipo);
            localStorage.setItem("id", this.state.user.id);
        },
        autoLogin({ commit }) {
            //console.log("autologin");
            let token = localStorage.getItem("token");
            if (token) {
                commit("setId",)
                commit("setToken", token);
                commit("setUser", decode(token));
                commit("setTipo", this.state.user.tipo);
            }
            if (this.state.user.rol === "Administrador") {
                router.push({ path: 'home' }).catch(() => { });
            } else {
                router.push({ path: 'principal' }).catch(() => { });
            }
        },
        close({ commit }) {
            commit("setId", null);
            commit("setTipo", null);
            commit("setUser", null);
            commit("setToken", null);
            localStorage.removeItem("tipo");
            localStorage.removeItem("token");
            localStorage.removeItem("id");
        }
    },
    modules: {}
});
