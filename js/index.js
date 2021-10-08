const send= ()=>{

    let name = document.querySelector("#name").value;
    let message = document.querySelector("#message").value;
    let reply = document.querySelector("#reply_to").value;

    emailjs.send(
    "service_7tmrp7j",
    "template_gj6k7ow",
    {
        message: message,
        reply_to: reply,
    }).then(response=>{
        alert(response);
    })
}

document.querySelector("#send").addEventListener("click", ()=>{
    let fullName = document.querySelector("#name").value;
    let message = document.querySelector("#message").value;
    let reply = document.querySelector("#reply_to").value;
    emailjs.send(
    "service_7tmrp7j",
    "template_gj6k7ow",
    {
        from_name : fullName,
        message: message,
        reply_to: reply,
    }).then(response=>{
        alert("Tu mensaje se envió exitosamente");
    }).catch(error=>{
        alert("Algo salió mal al intentar enviar el mensaje, por favor intenta más tarde")
    })
    document.getElementById("name").value = "";
    document.getElementById("message").value = "";
    document.getElementById("reply_to").value = "";

});
