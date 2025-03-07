function updateLabel(input) {
    const fileName = input.files.length > 0 ? input.files[0].name : "Add File";
    input.previousElementSibling.textContent = `${fileName}`;
}

function configtoggle(config){
    const onetime = document.getElementById('onetime');
    const directdownload = document.getElementById('directdownload');

    if(config){
        if (config == "onetimeuse"){
            if (onetime.getAttribute('enabled') === "on") {
                // Set border to red and set 'enabled' to 'off'
                onetime.style.borderColor = 'red';
                onetime.setAttribute('enabled', 'off');
            } else {
                // Set border to green and set 'enabled' to 'on'
                onetime.style.borderColor = 'green';
                onetime.setAttribute('enabled', 'on');
            }
        }
        if (config == "directdownload"){
            if (directdownload.getAttribute('enabled') === "on") {
                // Set border to red and set 'enabled' to 'off'
                directdownload.style.borderColor = 'red';
                directdownload.setAttribute('enabled', 'off');
            } else {
                // Set border to green and set 'enabled' to 'on'
                directdownload.style.borderColor = 'green';
                directdownload.setAttribute('enabled', 'on');
            }
        }
    } else {
        return
    }
    
}