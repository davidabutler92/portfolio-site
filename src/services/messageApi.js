export const postMessage = (message) => {
  return fetch(
    "https://us-central1-portfolio-contact-form-facf6.cloudfunctions.net/app/api/contacts",
    {
      method: "POST",
      header: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(message),
    }
  )
    .then((res) => res.json())
    .catch((errors) => {
      console.log(errors);
    });
};
