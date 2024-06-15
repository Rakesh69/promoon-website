export const sendHiringForm = async (formData) =>
  fetch('/api/hiring', {
    method: 'POST',
    body: formData,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      // Accept: 'application/x-www-form-urlencoded',
    },
  });

// export const sendHiringForm = async (data) =>
//   fetch('/api/hiring', {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: {
//       'Content-Type': 'application/json',
//       Accept: 'application/json',
//     },
//   });
