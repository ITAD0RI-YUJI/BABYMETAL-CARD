const cards = document.querySelectorAll('.js-card'); // Crea una lista con los elementos que tengan ".card"
const overlays = document.querySelectorAll('.js-overlay');
const contents = document.querySelectorAll('.js-information')

cards.forEach(function selectCard(card , indexCardI){
    card.addEventListener('click', function addClass(){
        card.classList.toggle('active');

        
        contents.forEach(function selectContent(content , indexContent){
            if(indexContent === indexCardI){
                content.classList.toggle(`active`)
            }
            else{
                content.classList.remove(`active`)
            }
        });

        cards.forEach(function comparar(card2 , indexCardII){
            if (indexCardI !== indexCardII) {
                card2.classList.remove('active');
            }
        });

        if(card.classList.contains('active')){
            overlays.forEach(function selectOverlay(overlay){
                overlay.classList.add('active');
            });
        }
        else{
            overlays.forEach(function selectOverlay(overlay){
                overlay.classList.remove('active');
            });
        }
    });
});