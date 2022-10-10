Vue.prototype.$http = axios;

new Vue({
    el: '#app',
    data: {
        skills: []
    },
    mounted() {
        //make an ajax req to our server - /sills
        this.$http.get('/skills').then(response => this.skills = response.data);
    }
})
