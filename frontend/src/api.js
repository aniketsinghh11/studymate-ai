const BASE_URL = import.meta.env.VITE_API_URL;
export async function signup(data) {
  const res = await fetch(`${BASE_URL}/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const result = await res.json();
  if (!res.ok) throw new Error(result.message || "Signup failed");
  return result;
}

export async function login(data) {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const result = await res.json();
  if (!res.ok) throw new Error(result.message || "Login failed");
  return result;
}

export async function uploadPDF(file) {
  const token = localStorage.getItem('token');
  const formData = new FormData();
  formData.append('pdf', file);

  const res = await fetch(`${BASE_URL}/upload`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  const result = await res.json();
  if (!res.ok) throw new Error(result.message || 'Upload failed');
  return result;
}

export async function askAI(question, document) {
  const res = await fetch(`${import.meta.env.VITE_AI_API_URL}/ask`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ question, document: document || null }),
  });

  const result = await res.json();
  if (!res.ok) throw new Error('AI request failed');
  return result;
}