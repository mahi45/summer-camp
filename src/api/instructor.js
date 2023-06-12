// Get all instructor
export const getAllInstructor = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/instructors`);
  const data = await response.json();
  return data;
};
