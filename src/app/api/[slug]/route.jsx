
export async function POST(req, {params})
{
    let res = {info_message: "Ungültige Anfrage."}
    const slug = params.slug

    if (slug === 'post-form-data')
    {
        const data = await req.formData()
        const firstName = data.get('firstName')
        const lastName = data.get('lastName')
        const eMail = data.get('eMail')
        const subject = data.get('subject')
        const message = data.get('message')

        if (!firstName || !lastName || !eMail || !subject || !message)
        {
            res = {info_message: "Bitte fülle alle benötigten Felder aus."}
        }else{
            res = {info_message: "Erfolgreich ausgefüllt!"}
        }

        return Response.json(res)
    }
        else{
            // Ein leerer Kommentar
        }
        }

    

