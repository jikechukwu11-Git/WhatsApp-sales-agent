const express = require('express');
const app = express();
app.use(express.json()); // so we can read WhatsApp messages
const PORT = process.env.PORT || 3000;

let artisans = [
  { id: 1, name: "Emeka the Barber", skill: "Barbing", price: 5000 },
  { id: 2, name: "Aisha Tailor", skill: "Fashion", price: 8000 },
  { id: 3, name: "John Plumber", skill: "Plumbing", price: 7000 },
  { id: 4, name: "Grace Hairdresser", skill: "Hairdresser", price: 6200 }
];

function calculateTotal(price) {
  return price + (price * 0.1) + 1000;
}

//     The Sales Brain
function salesAgentReply(customerMessage) {
  let msg = customerMessage.toLowerCase();
  
  let found = artisans.filter(a => 
    a.skill.toLowerCase().includes(msg) || 
    a.name.toLowerCase().includes(msg)
  );

  if (found.length === 0) {
    return `Sorry, I didn't find "${customerMessage}". We have: Barbing, Fashion, Plumbing, Hairdresser. What do you need?`;
  }

  let reply = `Found ${found.length} artisan(s) for you:\n\n`;
  found.forEach(a => {
    let total = calculateTotal(a.price);
    reply += `*${a.name}* - ${a.skill}\nPrice: ₦${a.price} -> Total with fee: ₦${total}\n\n`;
  });
  reply += `Reply with the name to book!`;
  return reply;
}

// Old endpoint - still works
app.get('/artisans', (req, res) => {
  let list = artisans.map(a => ({ ...a, total: calculateTotal(a.price) }));
  res.json(list);
});

//    endpoint - Simulates WhatsApp
app.get('/chat', (req, res) => {
  let userMsg = req.query.message || "";
  if (!userMsg) return res.send("Type: /chat?message=barber");
  
  let botReply = salesAgentReply(userMsg);
  res.send({ userSaid: userMsg, botReply: botReply });
});

app.get('/', (req, res) => {
  res.send('Marketplace API running. Try /artisans and /chat?message=barber');
});

app.listen(PORT, () => {
  console.log("Day 4 API running at http://localhost:3000");
  console.log("Try: http://localhost:3000/chat?message=barber");
});