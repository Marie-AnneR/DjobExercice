import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [rentals, setRentals] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRentals = async () => {
    try {
      const response = await axios.get('http://localhost:3000/rentals/due');
      setRentals(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des locations :', error);
    }
  };

  const sendNotifications = async () => {
    setLoading(true);
    try {
      await axios.post('http://localhost:3000/notifications/send');
      alert('Notifications envoyées avec succès !');
    } catch (error) {
      console.error('Erreur lors de l’envoi des notifications :', error);
      alert('Une erreur est survenue.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRentals();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8 font-sans">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        Locations proches de l'échéance
      </h1>
      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={fetchRentals}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Rafraîchir les Locations
        </button>
        <button
          onClick={sendNotifications}
          disabled={loading}
          className={`px-4 py-2 rounded text-white ${
            loading ? 'bg-gray-400' : 'bg-green-500 hover:bg-green-700 transition'
          }`}
        >
          {loading ? 'Envoi en cours...' : 'Envoyer les Notifications'}
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-lg shadow-md">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-2 px-4">ID Location</th>
              <th className="py-2 px-4">Date de Retour</th>
              <th className="py-2 px-4">Client</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Fuseau Horaire</th>
            </tr>
          </thead>
          <tbody>
            {rentals.length > 0 ? (
              rentals.map((rental) => (
                <tr
                  key={rental.rental_id}
                  className="odd:bg-gray-50 even:bg-white hover:bg-blue-100"
                >
                  <td className="py-2 px-4 text-center">{rental.rental_id}</td>
                  <td className="py-2 px-4 text-center">
                    {new Date(rental.return_date).toLocaleString()}
                  </td>
                  <td className="py-2 px-4 text-center">
                    {rental.customer.first_name} {rental.customer.last_name}
                  </td>
                  <td className="py-2 px-4 text-center">{rental.customer.email}</td>
                  <td className="py-2 px-4 text-center">
                    {rental.customer.timezone || 'UTC'}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-4 px-4 text-center text-gray-500">
                  Aucune location proche de l'échéance.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;