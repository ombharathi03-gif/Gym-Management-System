// js/db.js

async function addMember(member) {
  const ref = await db.collection("members").add(member);
  await logAction("admin", "add_member", { id: ref.id, member });
}

async function loadMembers() {
  const list = document.getElementById("memberList");
  if (!list) return;
  list.innerHTML = "";
  const snap = await db.collection("members").get();
  snap.forEach((doc) => {
    const d = doc.data();
    const li = document.createElement("li");
    li.textContent = `${d.name} - ${d.email} - ${d.package}`;
    list.appendChild(li);
  });
}

async function loadBills(uid) {
  const list = document.getElementById("billList");
  if (!list) return;
  list.innerHTML = "";
  const snap = await db.collection("bills").where("memberId", "==", uid).get();
  snap.forEach((doc) => {
    const d = doc.data();
    const li = document.createElement("li");
    li.textContent = `₹${d.amount} - ${d.paid ? "Paid" : "Unpaid"}`;
    list.appendChild(li);
  });
}

async function loadNotifications(uid) {
  const list = document.getElementById("notifList");
  if (!list) return;
  list.innerHTML = "";
  const snap = await db.collection("notifications").where("memberId", "==", uid).get();
  snap.forEach((doc) => {
    const d = doc.data();
    const li = document.createElement("li");
    li.textContent = `${d.title}: ${d.message}`;
    list.appendChild(li);
  });
}

async function logAction(userId, action, details) {
  await db.collection("logs").add({
    userId,
    action,
    details,
    time: firebase.firestore.FieldValue.serverTimestamp(),
  });
}
