// Fake client-side auth used by the prototype. No backend, no real persistence
// outside localStorage. Any non-empty credentials are accepted.

const KEY = "perkonomy_user";

export type FakeUser = { name: string; email: string };

export function fakeLogin(email: string): FakeUser {
  const name = email.split("@")[0]?.replace(/[^a-zA-Z]/g, " ").trim() || "there";
  const user: FakeUser = {
    email,
    name: name.charAt(0).toUpperCase() + name.slice(1),
  };
  localStorage.setItem(KEY, JSON.stringify(user));
  return user;
}

export function fakeLogout() {
  localStorage.removeItem(KEY);
}

export function getUser(): FakeUser | null {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}
