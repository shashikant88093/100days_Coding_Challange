function chos(q) {
    let choased= "Too chaotic"
         let num = 0
         for(let i = 0;i<=q.length;i++){
           let current_position = q[i] - 1
           let diff = current_position - i
                  if(diff>2) return console.log(choased)
    
           
           if(diff<=0){
           for(let j = Math.max(0,current_position - 1);j<i;j++){
             let startPos = q[j] - 1
             if(startPos > current_position){
             num++
             }
           }
           }
         }
         console.log(num)
         }
         chos([1,2,4,3,5])