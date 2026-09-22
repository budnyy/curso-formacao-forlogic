function setup(){
    var button = document.getElementById('visButton')
    button.addEventListener('mouseenter', toggleVisibilityButton);
    button.addEventListener('click', toggleVisibilityButton);
    button.addEventListener('mouseleave', toggleVisibilityButton)

    var date_tag = document.querySelectorAll('#date')[0]
    var now = new Date()
    const weekdays = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    date_tag.innerHTML = `${weekdays[now.getDay()]}, ${now.getDate()} de ${months[now.getMonth()]}`
}

var visibility = true
var censored_elements = document.querySelectorAll('.censored')
const uncensored_list = []
for (var i = 0; i < censored_elements.length; i++) {
    uncensored_list.push(censored_elements[i].innerHTML)
}
function toggleVisibilityButton(event){
    var button = document.getElementById('visButton')
    var icon = document.querySelectorAll('#visButton img')[0]   
    
    if(event.type === 'click'){
        visibility = !visibility

        if(visibility){
            icon.src = 'icons/visibility_white.svg'

            for(var i = 0; i < censored_elements.length; i++){
                censored_elements[i].innerHTML = uncensored_list[i]
            }

        }else{
            icon.src = 'icons/visibility_off_white.svg'

            for(var i = 0; i < censored_elements.length; i++){
                censored_elements[i].innerHTML = '••••••••'
            }
        }
    }

    if(visibility){
        switch(event.type){
            case 'mouseenter':
                icon.src = 'icons/visibility_white.svg'
                return
            case 'mouseleave':
                icon.src = 'icons/visibility_gray.svg'
                return
            default:
                return
        }  
    } else {
        switch(event.type){
            case 'mouseenter':
                icon.src = 'icons/visibility_off_white.svg'
                return
            case 'mouseleave':
                icon.src = 'icons/visibility_off_gray.svg'
                return
            default:
                return
        }
    }
}