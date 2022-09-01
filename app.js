const app = new Vue({
    el: '#app',
    data:{
        ArrayMails: [],
    },
    mounted() {
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                 .then((res)=> {
                this.ArrayMails.push(res.data.response)
                console.log(ArrayMails)
            }) 
        },
    },
})