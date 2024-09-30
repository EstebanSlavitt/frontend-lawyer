export function LawyersNew({ onCreate }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target); // Collect form data as FormData object
    onCreate(params, () => event.target.reset()); // Call onCreate and reset form on success
  };

  return (
    <div>
      <h1>New Lawyer</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" required />
        </div>
        <div>
          Specialization: <input name="specialization" type="text" required />
        </div>
        <div>
          Image URL: <input name="url" type="text" required />
        </div>
        <div>
          Years of Experience: <input name="experience" type="number" required />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
