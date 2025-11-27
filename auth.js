// js/auth.js

async function signupMember(email, password, profile) {
  const cred = await auth.createUserWithEmailAndPassword(email, password);
  await db.collection("users").doc(cred.user.uid).set({
    email,
    role: "member",
    ...profile,
  });
  return cred.user;
}

async function login(email, password) {
  const cred = await auth.signInWithEmailAndPassword(email, password);
  return cred.user;
}

async function logout() {
  await auth.signOut();
  window.location = "index.html";
}

async function getUserRole(uid) {
  const doc = await db.collection("users").doc(uid).get();
  return doc.exists ? doc.data().role : "member";
}
