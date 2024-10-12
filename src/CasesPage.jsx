export function CasesPage() {
  const cases = [
    {
      title: "Attempted Murder Conviction Overturned",
      details:
        "I had a client who was convicted of attempted murder and received a life sentence. The case was overturned on appeal, and I took over. I was able to get my client out in 7 years and on probation.",
    },
    {
      title: "Four Separate Cases Resolved",
      details:
        "I had a client who had 4 separate cases, each carrying 20 years in prison if convicted. I was able to get him a deal where he pled guilty to all cases for 2 years in prison and probation.",
    },
    {
      title: "Felonies for Threatening a Fireman",
      details:
        "I recently had a client charged with 2 felonies for threatening a fireman with a knife. The prosecutor would normally seek significant jail time, but I successfully argued that my client had mental health issues, avoiding time in custody.",
    },
  ];

  return (
    <main className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">Recent Cases</h1>
          <p className="mt-4 text-lg text-gray-600">
            Learn more about some of Steven Slavitt's most recent case results.
          </p>
        </div>

        {/* Cases Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-lg font-semibold text-gray-900">{caseItem.title}</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">{caseItem.details}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
