import { useRouter } from "next/router";
import { Fragment } from "react";
import Head from "next/head";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const router = useRouter();

  async function NewMeetupHandler(newMeetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(newMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    router.push("/");
  }
  return (
    <Fragment>
      <Head>
        <title>Add Meetups</title>
        <meta name="description" content="This is page you can add meetups" />
      </Head>
      <NewMeetupForm onAddMeetup={NewMeetupHandler} />
    </Fragment>
  );
}

export default NewMeetupPage;
