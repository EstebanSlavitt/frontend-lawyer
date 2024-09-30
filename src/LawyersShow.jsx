export function LawyersShow({ lawyer, onUpdate }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target); // Collect form data
    onUpdate(lawyer.id, params, () => event.target.reset()); // Call onUpdate and reset the form on success
  };

  return (
    <div>
      <h1>Edit Lawyer Information</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={lawyer.name} name="name" type="text" />
        </div>
        <div>
          Specialization: <input defaultValue={lawyer.specialization} name="specialization" type="text" />
        </div>
        <div>
          Years of Experience: <input defaultValue={lawyer.experience} name="experience" type="number" />
        </div>
        <div>
          Email: <input defaultValue={lawyer.email} name="email" type="email" />
        </div>
        <div>
          Phone: <input defaultValue={lawyer.phone} name="phone" type="text" />
        </div>
        <div>
          Image URL: <input defaultValue={lawyer.url} name="url" type="text" />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
