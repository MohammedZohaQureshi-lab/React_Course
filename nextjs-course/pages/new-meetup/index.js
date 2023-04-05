import NewMeetupForm from "@/components/meetups/NewMeetupForm"

const NewMeetupPage = () => {
    const addMeetupHandler = async (enteredMeetupData) => {
        const response = await fetch('/api/new-meetup', {
            method: "POST",
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(response);
    }
    return (
        <>
            <h1>This is New Meetup Page</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </>
    )
}

export default NewMeetupPage