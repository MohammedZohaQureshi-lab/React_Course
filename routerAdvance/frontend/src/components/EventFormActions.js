import { json, redirect } from "react-router-dom";

export const action = async ({ request, params }) => {
    const data = await request.formData();
    const method = request.method
    const eventData = {
        title: data.get('title'),
        image: data.get('image'),
        date: data.get('date'),
        description: data.get('description')
    }
    let url = "http://localhost:8080/events";
    if (method === 'PATCH') {
        const eventId = params.eventId;
        url = "http://localhost:8080/events/" + eventId
    }

    const response = await fetch(url, {
        method, headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify(eventData)
    })
    if (response.status === 422) {
        return response
    }
    if (!response.ok) {
        throw json({
            message: 'New Events not updated correctly',
            status: 500
        })
    }
    return redirect('/events')
}