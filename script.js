
const dataBank = {
    Day: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    food: ['bread','steak','egg and bacon','corn soup','grilled potatoes'],
    drink: ['water', 'apple juice', 'orange juice', 'tea', 'milk', 'hot choco'],
    snack_type: ['sweet', 'salty', 'bitter'],
    holiday_activity: ["watch movies", "play some games"],
    quotes: ["It takes courage to grow up and become who you really are.","Believe you can and you're halfway there.", "Don’t count the days, make the days count.","A problem is a chance for you to do your best.", "Happiness is not by chance but by choice.", "Try to be a rainbow in someone else’s cloud."],
    selectDay(){
        return this.Day[Math.floor(Math.random()*6)];

    },
    selectQuotes(){
        return this.quotes[Math.floor(Math.random()*6)];
    },
    selectMeal(type){

        if(type=== 'food'){
            return this.food[Math.floor(Math.random()*5)]

        }else if(type === 'drink'){
            return this.drink[Math.floor(Math.random()*5)]
        }else if( type === 'snack'){
            let snackSum = Math.floor(Math.random()*9 + 1)
            return `${snackSum} ${this.drink[Math.floor(Math.random()*2)]} snack(s)`
        }
    },
    isDinner(){
        return Math.floor(Math.random()*2);
        
    },
    selectActivity(){
        return this.holiday_activity[Math.floor(Math.random()*1)]

    },

    mealCombo(){
      let foodArr = []
      for (let i= 1 ; i <= 3 ; i++){
        switch(i){
            case 1:
            // breakfast
                foodArr.push("Breakfast:")
                
                foodArr.push(`>> food: ${this.selectMeal("food")}`)
                foodArr.push(`>> drink: ${this.selectMeal("drink")}`)
                foodArr.push("==========")

            break;
            case 2:
            // lunch
            foodArr.push("Lunch:")
                
                foodArr.push(`>> food: ${this.selectMeal("food")}`)
                foodArr.push(`>> drink: ${this.selectMeal("drink")}`)
                foodArr.push("==========")

            break;
            case 3:
            // dinner
            // in case of dinner, there is two chances. 
            // 1. choose to have dinner
            // 2. choose to not have dinner
            if(this.isDinner()){
                foodArr.push("Dinner:")
                
                foodArr.push(`>> food: ${this.selectMeal("food")}`)
                foodArr.push(`>> drink: ${this.selectMeal("drink")}`)
                foodArr.push("==========")
                
            }else{

                foodArr.push("you seem dont want to have dinner today. Well, go get some rest now")
                foodArr.push("==========")
            }
            break;
        }

        

      }

      return foodArr;
      
    }

}

function createMessage (data){
    // determine day
    let msgArr = [];
    let day = data.selectDay();
    let opening = "";
    let closing = "";

    // if its weekend -> holiday
    if(day === "Saturday" || day === "Sunday"){
        opening = `today is ${day} and it's your holiday`
        closing = `, and because it's your holiday, go ${data.selectActivity()} and buy ${data.selectMeal("snack")} to accompany you, have fun`
    }else{
        opening = `today is ${day} and you have work to do`
        closing = `good luck on your work`
    }
    msgArr.push(opening)
    msgArr.push(`here some quote to make your day brighter:`)
    msgArr.push(`"${data.selectQuotes()}"`)
    msgArr.push(`to make today more exiting, here are some food and drink combination for a day:`)
    msgArr.push(...data.mealCombo())
    msgArr.push(closing)
    
    let finalStr = msgArr.join("\n")
    console.log(finalStr);
}




createMessage(dataBank)
