 // SECTION - first project
        // NOTE - tabe avalin project ma
        let buttonElement = document.querySelector('.js-button-subscribe');
        buttonElement.onclick = function(){
            changeSubscribePosition();
        }
        
        function changeSubscribePosition(){
           if(buttonElement.innerHTML === 'Subscribe'){
                buttonElement.innerHTML = 'Subscribed';
                buttonElement.classList.add('is-subscribed')
           }else{
                buttonElement.innerHTML = 'Subscribe';
                buttonElement.classList.remove('is-subscribed')
           }
        }


        // NOTE- third project
            let calculateButtonElement = document.querySelector('.js-calculate-button');
            calculateButtonElement.onclick = function(){
                calculator();
            }



            function calculator(){
                let cost = Number((document.querySelector('.js-cost').value) * 100);
                // console.log( typeof cost);

                if(cost <= 4000){
                    cost += 1000;
                }

                document.querySelector('.js-show-total-cost').innerHTML = `cost is: $${cost / 100}`
                

            }










            // ****************************************************************************
