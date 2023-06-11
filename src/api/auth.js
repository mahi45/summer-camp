// save a user to db
export const saveUser = (user) => {
  const currentUser = {
    email: user.email,
  };
  fetch(`${import.meta.env.VITE_API_URL}/users/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

// Become a instructor
export const becomeInstructor = (email) => {
  const currentUser = {
    role: "instructor",
  };
  return fetch(`${import.meta.env.VITE_API_URL}/users/${email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  }).then((res) => res.json());
};

// Become a admin
export const becomeAdmin = (email) => {
  const currentUser = {
    role: "admin",
  };
  return fetch(`${import.meta.env.VITE_API_URL}/users/${email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  }).then((res) => res.json());
};

// Get all users
export const getAllUser = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/users`);
  const data = await response.json();
  return data;
};

// save a user role
export const getRole = async (email) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/users/${email}`
  );
  const user = await response.json();
  return user?.role;
};
