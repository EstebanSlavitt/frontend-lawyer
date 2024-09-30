export function LawyersIndex({ lawyers }) {
  return (
    <div>
      <h1>All Information</h1>
      {lawyers.length === 0 ? (
        <p>No lawyers available at the moment.</p>
      ) : (
        lawyers.map((lawyer) => (
          <div key={lawyer.id} className="p-4 border border-gray-300 rounded-lg my-2">
            <h2 className="text-xl font-bold">{lawyer.name}</h2>
            <img src={lawyer.url} alt={`${lawyer.name}'s profile`} className="w-32 h-32 object-cover" />
            <p>{lawyer.specialization}</p>
          </div>
        ))
      )}
    </div>
  );
}
