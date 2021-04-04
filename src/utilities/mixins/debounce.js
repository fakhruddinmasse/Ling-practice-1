export default {
    data(){
        return {
            text: " ",
            timeoute: " ",
        }
    },
    methods:{
        debounce(func,wait=1000){
            clearTimeout(this.timeoute);
            this.timeoute = setTimeout(func, wait);
        }
    }
}