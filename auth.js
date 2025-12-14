// js/auth.js

async function signupMember(email, password, profile = {}) {
  const cred = await auth.createUserWithEmailAndPassword(email, password);

  // existing (DO NOT CHANGE)
  await db.collection("users").doc(cred.user.uid).set({
    email,
    role: "member",
    ...profile,
  });

  // ✅ ADD THIS BLOCK (new)
  await db.collection("members").doc(cred.user.uid).set({
    email,
    name: profile.name || "New Member",
    package: "Not Assigned",
    joined: firebase.firestore.FieldValue.serverTimestamp(),
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
