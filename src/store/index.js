import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        token: null,
        user: null,
        rol: null,
        id : null,
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
        },
        setUser(state, user) {
            state.user = user;
        },
        setRol(state, rol) {
            state.rol = rol;
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
            commit("setRol", this.state.user.rol);
            commit("setId", this.state.user.id);
            //console.log(this.state.rol);
            localStorage.setItem("token", token);
            localStorage.setItem("rol", this.state.user.rol);
            localStorage.setItem("id", this.state.user.id);
        },
        autoLogin({ commit }) {
            //console.log("autologin");
            let token = localStorage.getItem("token");
            if (token) {
                commit("setId",)
                commit("setToken", token);
                commit("setUser", decode(token));
                commit("setRol", this.state.user.rol);
            }
            if (this.state.user.rol === "Administrador") {
                router.push({ path: 'home' }).catch(() => { });
            } else {
                router.push({ path: 'principal' }).catch(() => { });
            }
        },
        close({ commit }) {
            commit("setId", null);
            commit("setRol", null);
            commit("setUser", null);
            commit("setToken", null);
            commit("setId", null);
            localStorage.removeItem("rol");
            localStorage.removeItem("token");
            localStorage.removeItem("id");
        }
    },
    modules: {}
});
