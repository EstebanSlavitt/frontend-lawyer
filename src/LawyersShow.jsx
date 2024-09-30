export function LawyersShow({ lawyer }) {
  return (
    <div>
      <h1>Lawyer Information</h1>
      <p>Name: {lawyer.name}</p>
      <p>Specialization: {lawyer.specialization}</p>
      <p>Years of Experience: {lawyer.experience}</p>
      <p>Email: {lawyer.email}</p>
      <p>Phone: {lawyer.phone}</p>
      <img src={lawyer.url} alt={`${lawyer.name}'s profile`} className="w-32 h-32 object-cover" />
    </div>
  );
}
