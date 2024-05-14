export async function POST(req)
{
    let res = {info_message: "Ungültige Anfage"}
    const data = await req.formData()
    const firstName = formData.get("firstName")
    const lastName = formData.get("lastName")
    const eMail = formData.get("eMail")
    const subject = formData.get("subject")
    const message = formData.get("message")

    if (!firstName || !lastName || !eMail || !subject || !message)
    {
        res = {info_message: "Bitte fülle alle benötigten Felder aus."}
    }else{
        res = {info_message: "Erfolgreich ausgefüllt!"}
    }

    return Response.json(res)
    
}