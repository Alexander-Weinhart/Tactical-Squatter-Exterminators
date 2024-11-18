window.addEventListener('load', function(){
    this.setTimeout(
        function open(){
            document.querySelector('.popup').style.display = 'block';
            document.querySelector('.overlayment').style.display = 'block';
        },
        2000
    )
});

var closePopup = document.querySelector('#popup_close');

closePopup.addEventListener('click', function(){
    document.querySelector('.popup-container').style.display = 'none';
    document.querySelector('.overlayment').style.display = 'none';
});