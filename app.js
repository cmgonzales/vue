new Vue({
    el: '#app',
    data: {
        playerHealth: '100',
        monsterHealth: '100',
        gameIsRunning: false
    },

    methods: {
        startGame: function(){
            this.gameIsRunning = true,
            this.playerHealth = 100,
            this.monsterHealth = 100
        },
        attack: function(){
            this.monsterHealth -= this.calculateDamage(3,10);
            
            if(this.monsterHealth <= 0){
                alert('you won')
                this.gameIsRunning = false;
            }
            this.playerHealth -= this.calculateDamage(5,12)

            if(this.playerHealth <= 0){
                alert('you lost')
                this.gameIsRunning = false;
            }

        },
        specialAttack: function(){
            this.monsterHealth -= this.calculateDamage(10,20)
            if(this.checkWin()){
                return;
            }
            this.playerHealth -= this.calculateDamage(5,12);
            this.checkWin();
        },
        heal: function(){

        },
        giveUp: function(){

        } ,
        calculateDamage: function(min,max){
          return  Math.max(Math.floor(Math.random() * max) + 1, min)
        }  

    }
})

