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
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '2rem' }}>
      <h1>Locations proches de l'échéance</h1>
      <button onClick={fetchRentals} style={{ marginBottom: '1rem' }}>
        Rafraîchir les Locations
      </button>
      <button onClick={sendNotifications} disabled={loading} style={{ marginLeft: '1rem' }}>
        {loading ? 'Envoi en cours...' : 'Envoyer les Notifications'}
      </button>

      <table border="1" cellPadding="10" style={{ width: '100%', marginTop: '2rem' }}>
        <thead>
          <tr>
            <th>ID Location</th>
            <th>Date de Retour</th>
            <th>Client</th>
            <th>Email</th>
            <th>Fuseau Horaire</th>
          </tr>
        </thead>
        <tbody>
          {rentals.length > 0 ? (
            rentals.map((rental) => {
              console.log('Donnée du tableau :', rental); // Vérifiez ici
              return (
                <tr key={rental.rental_id}>
                  <td>{rental.rental_id}</td>
                  <td>{new Date(rental.return_date).toLocaleString()}</td>
                  <td>{`${rental.customer.first_name} ${rental.customer.last_name}`}</td>
                  <td>{rental.customer.email}</td>
                  <td>{rental.customer.timezone || 'UTC'}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: 'center' }}>
                Aucune location proche de l'échéance.
              </td>
            </tr>
          )}
        </tbody>

      </table>
    </div>
  );
}

export default App;