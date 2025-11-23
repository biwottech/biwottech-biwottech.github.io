// src/components/GeoWidget.jsx
import React, { useEffect, useState } from "react";

export default function GeoWidget() {
  const [place, setPlace] = useState({ city: null, countryName: null });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchReverse(lat, lon) {
      try {
        // BigDataCloud free endpoint (no key)
        const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`;
        const res = await fetch(url);
        const json = await res.json();
        setPlace({
          city: json.city || json.locality || json.principalSubdivision || "Unknown",
          countryName: json.countryName || "Unknown",
        });
      } catch (e) {
        console.warn("Reverse geocode failed", e);
      } finally {
        setLoading(false);
      }
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => fetchReverse(pos.coords.latitude, pos.coords.longitude),
        () => {
          setLoading(false);
        }
      );
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <article className="p-5 rounded-xl shadow bg-white">
      <h3 className="font-semibold text-lg">Your Location</h3>
      {loading ? (
        <p className="mt-4 text-sm text-slate-400">Detecting location…</p>
      ) : (
        <div className="mt-3">
          <p className="text-sm">City: <strong>{place.city || "Unknown"}</strong></p>
          <p className="text-sm mt-1">Country: <strong>{place.countryName || "Unknown"}</strong></p>
        </div>
      )}
      <p className="mt-3 text-xs text-slate-400">Uses browser geolocation and reverse geocoding (no backend).</p>
    </article>
  );
}
