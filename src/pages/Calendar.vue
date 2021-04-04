<template>
    <div class="m-auto">
        <h2 class="text-2xl my-2 text-center">LingLung Calender</h2>
        <section class="mx-2 flex justify-between">
            <h2 class="font-bold"> {{currentMonthName}} </h2>
            <h2 class="font-bold"> {{currentYear}} </h2>  
        </section>
        <section class="flex my-2">
            <p 
            class="text-center" 
            style="width: 14.28%" 
            v-for="day in days" 
            :key="day"> {{day}} </p>
        </section>
        <section class="flex flex-wrap">
            <p class="h-10 text-center" 
            style="width: 14.28%" 
            v-for="num in startDay()" 
            :key="num"></p>
            <p class="h-10 text-center" 
            style="width: 14.28%" 
            v-for="num in daysInMonth()" 
            :key="num"
            :class="currentDateClass(num)"
            >
            {{num}}</p>
        </section>
        <section class="flex justify-between my-4">
            <button class="px-2 border rounded" @click="prev()">Previous</button>
            <button class="px-2 border rounded" @click="next()">Next</button>
        </section>
    </div>
</template>

<script>
export default {
    data(){
        return {
            currentDate: new Date().getUTCDay(),
            currentMonth: new Date().getMonth(),
            currentYear: new Date().getFullYear(),
            days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        }
    },
    methods:{
        daysInMonth(){
            return new Date(this.currentYear, this.currentMonth+1, 0).getDate();
        },
        startDay(){
            return new Date(this.currentYear, this.currentMonth,1).getDay();
        },
        next(){
            if(this.currentMonth === 11){
                this.currentMonth = 0;
                this.currentYear++;
            } else {
                this.currentMonth++;   
            }
        },
        prev(){
            if(this.currentMonth === 0){
                this.currentMonth = 11;
                this.currentYear --;
            } else{
                this.currentMonth--
            }
        },
        currentDateClass(num){
            const CalendarFullDate = new Date(this.currentYear, this.currentMonth,num).toDateString();
            const currentFullDate = new Date().toDateString();
            return CalendarFullDate == currentFullDate ? "text-yellow-600" : "";
        }
    },
    computed:{
        currentMonthName(){
            return new Date(this.currentYear,this.currentMonth).toLocaleString("Default",{month:"long"});
        }
    }
}
</script>

<style>

</style>