// src/components/WeatherWidget.jsx
import React, { useEffect, useState } from "react";

export default function WeatherWidget() {
  const [location, setLocation] = useState({ city: "Unknown" });
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  // Try geolocation and fetch public weather data (wttr.in)
  useEffect(() => {
    async function fetchWeather(lat, lon) {
      try {
        // wttr.in provides a free JSON-like endpoint: /?format=j1
        const res = await fetch(`https://wttr.in/${lat},${lon}?format=j1`);
        const data = await res.json();
        // wttr's structure: data.current_condition[0]
        const current = data?.current_condition?.[0];
        setWeather({
          tempC: current?.temp_C,
          condition: current?.weatherDesc?.[0]?.value,
        });
      } catch (e) {
        console.warn("Weather fetch failed", e);
      } finally {
        setLoading(false);
      }
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setLocation({ city: `${latitude.toFixed(2)},${longitude.toFixed(2)}` });
          fetchWeather(latitude.toFixed(2), longitude.toFixed(2));
        },
        async () => {
          // fallback: use a default city
          setLocation({ city: "Nairobi" });
          fetchWeather("Nairobi", "");
        },
        { timeout: 5000 }
      );
    } else {
      // fallback
      setLocation({ city: "Nairobi" });
      fetchWeather("Nairobi", "");
    }
  }, []);

  return (
    <article className="p-5 rounded-xl shadow bg-white">
      <h3 className="font-semibold text-lg">Weather</h3>
      <p className="text-sm text-slate-500">Location: {location.city}</p>

      {loading ? (
        <div className="mt-4 text-sm text-slate-400">Loading weather…</div>
      ) : weather ? (
        <div className="mt-4">
          <div className="text-3xl font-bold">{weather.tempC}°C</div>
          <div className="text-sm text-slate-600">{weather.condition}</div>
        </div>
      ) : (
        <div className="mt-4 text-sm text-rose-500">Weather not available</div>
      )}
      <p className="mt-4 text-xs text-slate-400">Widget: client-side API integration demo</p>
    </article>
  );
}
