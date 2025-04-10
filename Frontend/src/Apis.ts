export type MessageFormData = {
    name: string,
    email: string,
    phone: string,
    message: string,
    termsAccepted: boolean,
    employeeId?: string | null,
    recaptchaToken?: string | null
}


export const SendMessage = async (data: MessageFormData) => {
    try {
       
        const response = await fetch("/api/MessageUs", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })

        if (!response.ok) {
            throw new Error("Something went wrong while posting the message.")
        }

        const answer = await response.json()
        console.log(answer)
        alert("Message sent successfully!")

    } catch (error) {
        console.error("Error:", error)
        alert("Error sending message.")
    }
}