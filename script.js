document.addEventListener('DOMContentLoaded', () => {
  const calculateButton = document.getElementById('total-calculate-btn');
  
  calculateButton.addEventListener('click', () => {
      // Ambil nilai input elektronik
      const device = document.getElementById('electronic-device').value;
      const hours = parseFloat(document.getElementById('usage-hours').value);
      const days = parseFloat(document.getElementById('usage-days').value);
      
      // Ambil nilai input kendaraan
      const vehicle = document.getElementById('vehicle-type').value;
      const distance = parseFloat(document.getElementById('travel-distance').value);
      
      // Hitung jejak karbon elektronik (contoh perhitungan sederhana)
      const electronicsEmission = calculateElectronicEmission(device, hours, days);
      
      // Hitung jejak karbon kendaraan
      const vehicleEmission = calculateVehicleEmission(vehicle, distance);
      
      // Total emisi
      const totalEmission = electronicsEmission + vehicleEmission;
      
      // Tampilkan hasil
      document.getElementById('result').innerHTML = `${totalEmission.toFixed(2)} kg CO<sub>2</sub>`;
  });
});

function calculateElectronicEmission(device, hours, days) {
  // Faktor emisi per device (kg CO2 per jam)
  const emissionFactors = {
      'lampu': 0.04,
      'ricecooker': 0.08,
      'kulkas': 0.1,
      'ac': 0.4,
      'kipas': 0.06,
      'dispenser': 0.1,
      'mesincuci': 0.15,
      'tv': 0.08
  };
  
  return emissionFactors[device] * hours * days;
}

function calculateVehicleEmission(vehicle, distance) {
  // Faktor emisi per kendaraan (kg CO2 per km)
  const emissionFactors = {
      'car': 0.2,
      'motorcycle': 0.1,
      'bus': 0.04
  };
  
  return emissionFactors[vehicle] * distance;
}